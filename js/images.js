// Planedle — resolves aircraft photos from Wikipedia at runtime.
//
// Every plane in js/data.js carries a `wiki` article title instead of a local
// file, and this module turns those titles into image URLs via the Wikipedia
// API. Two things keep that cheap:
//
//   - Calls made in the same tick are batched into one request (the API takes
//     50 titles at a time), so the directory's 74 cards cost 2 requests, not 74.
//   - Results are cached in localStorage, so repeat visits cost none.
//
// Exposes: PlaneImages.get(wikiTitle) -> Promise<string|null>
//          PlaneImages.articleUrl(wikiTitle) -> string

const PlaneImages = (function () {
    "use strict";

    const API = "https://en.wikipedia.org/w/api.php";
    const ARTICLE_BASE = "https://en.wikipedia.org/wiki/";
    const THUMB_WIDTH = 800;
    const TITLES_PER_REQUEST = 50;
    const CACHE_KEY = "planedle-images-v1";
    const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // a week

    // title -> { url: string|null, at: epoch ms }. A null url is a real answer
    // ("Wikipedia has no lead photo") and is cached too, so we stop asking.
    let cache = loadCache();

    let queue = [];          // [{ title, resolve }] waiting for the next flush
    let flushScheduled = false;

    // ---------- cache ----------

    function loadCache() {
        try {
            return JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
        } catch (e) {
            return {}; // unreadable or disabled storage — just run uncached
        }
    }

    function saveCache() {
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
        } catch (e) { /* quota or private mode — cache stays in memory only */ }
    }

    // Returns undefined when there is nothing usable cached, which is distinct
    // from a cached null.
    function readCache(title) {
        const entry = cache[title];
        if (!entry) return undefined;
        if (Date.now() - entry.at > CACHE_TTL_MS) {
            delete cache[title];
            return undefined;
        }
        return entry.url;
    }

    // ---------- the API ----------

    // Wikipedia keys its response by each page's *canonical* title, so a request
    // for "de Havilland Mosquito" comes back under "De Havilland Mosquito". The
    // normalized/redirects maps tell us how to walk from what we asked for to
    // what we got.
    function resolveAliases(query) {
        const alias = new Map();
        ["normalized", "redirects"].forEach(key => {
            (query[key] || []).forEach(hop => alias.set(hop.from, hop.to));
        });
        return function (title) {
            let current = title;
            for (let hops = 0; alias.has(current) && hops < 5; hops++) {
                current = alias.get(current);
            }
            return current;
        };
    }

    async function requestBatch(titles) {
        const params = new URLSearchParams({
            action: "query",
            format: "json",
            origin: "*",          // anonymous CORS
            prop: "pageimages",
            piprop: "thumbnail",
            pithumbsize: String(THUMB_WIDTH),
            redirects: "1",
            titles: titles.join("|"),
        });

        const response = await fetch(API + "?" + params.toString());
        if (!response.ok) throw new Error("Wikipedia API returned " + response.status);

        const query = (await response.json()).query || {};
        const canonical = resolveAliases(query);

        const thumbs = new Map();
        Object.values(query.pages || {}).forEach(page => {
            thumbs.set(page.title, (page.thumbnail && page.thumbnail.source) || null);
        });

        const found = new Map();
        titles.forEach(title => {
            const url = thumbs.get(canonical(title)) || null;
            found.set(title, url);
            cache[title] = { url: url, at: Date.now() };
        });
        saveCache();
        return found;
    }

    // ---------- batching ----------

    // Runs as a microtask, so every get() from one synchronous burst of card
    // building lands in the same flush.
    async function flush() {
        flushScheduled = false;
        const waiting = queue;
        queue = [];

        const titles = [...new Set(waiting.map(item => item.title))];
        const found = new Map();

        for (let i = 0; i < titles.length; i += TITLES_PER_REQUEST) {
            const chunk = titles.slice(i, i + TITLES_PER_REQUEST);
            try {
                (await requestBatch(chunk)).forEach((url, title) => found.set(title, url));
            } catch (e) {
                // Offline or the API is unhappy. Leave this chunk unresolved and
                // uncached so the next page load retries it; callers get null and
                // show their own fallback.
                console.warn("Planedle: could not load images from Wikipedia.", e);
            }
        }

        waiting.forEach(item => {
            const url = found.get(item.title);
            item.resolve(url === undefined ? null : url);
        });
    }

    function get(title) {
        if (!title) return Promise.resolve(null);

        const cached = readCache(title);
        if (cached !== undefined) return Promise.resolve(cached);

        return new Promise(resolve => {
            queue.push({ title: title, resolve: resolve });
            if (!flushScheduled) {
                flushScheduled = true;
                Promise.resolve().then(flush);
            }
        });
    }

    function articleUrl(title) {
        return ARTICLE_BASE + encodeURIComponent(title.replace(/ /g, "_"));
    }

    return { get: get, articleUrl: articleUrl };
})();
