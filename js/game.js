// Planedle — Wordle-inspired daily military aircraft guessing game.
// Requires js/data.js (the AIRCRAFT array) to be loaded first.

(function () {
    "use strict";

    const MAX_GUESSES = 6;

    // Each mode gets its own daily plane and its own stats/streak.
    const MODES = [
        { key: "all", label: "Daily Plane", filter: () => true },
        { key: "fighter", label: "Daily Fighter", filter: p => p.type === "Fighter" },
        { key: "bomber", label: "Daily Bomber", filter: p => p.type === "Bomber" },
        { key: "cargo", label: "Daily Cargo", filter: p => p.type === "Cargo" },
        { key: "ww2", label: "Daily WW2", filter: p => p.era === "WW2" },
        { key: "modern", label: "Daily Modern", filter: p => p.era === "Modern" },
        { key: "practice", label: "Practice", filter: () => true, practice: true },
    ];

    const todayStr = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD in local time

    // ---------- helpers ----------

    const $ = id => document.getElementById(id);

    // FNV-1a string hash -> stable "random" pick per mode per day.
    function hashString(str) {
        let h = 2166136261;
        for (let i = 0; i < str.length; i++) {
            h ^= str.charCodeAt(i);
            h = Math.imul(h, 16777619);
        }
        return h >>> 0;
    }

    function poolFor(mode) {
        return AIRCRAFT.filter(mode.filter);
    }

    function dailyAircraft(mode) {
        const pool = poolFor(mode);
        return pool[hashString(mode.key + ":" + todayStr) % pool.length];
    }

    function randomAircraft(mode) {
        const pool = poolFor(mode);
        return pool[Math.floor(Math.random() * pool.length)];
    }

    function findByName(name) {
        const q = name.trim().toLowerCase();
        return AIRCRAFT.find(p => p.name.toLowerCase() === q) || null;
    }

    // ---------- per-mode state, saved in localStorage ----------

    const stateKey = m => "planedle-" + m.key + "-" + todayStr;
    const statsKey = m => "planedle-stats-" + m.key;

    let mode = MODES[0];
    let answer = null;
    let guesses = [];   // array of aircraft objects
    let finished = false;
    let won = false;

    function loadState() {
        guesses = [];
        finished = false;
        won = false;
        if (mode.practice) {
            answer = randomAircraft(mode);
            return;
        }
        answer = dailyAircraft(mode);
        try {
            const raw = localStorage.getItem(stateKey(mode));
            if (!raw) return;
            const saved = JSON.parse(raw);
            guesses = (saved.guessIds || [])
                .map(id => AIRCRAFT.find(p => p.id === id))
                .filter(Boolean);
            finished = !!saved.finished;
            won = !!saved.won;
        } catch (e) { /* corrupt state — start fresh */ }
    }

    function saveState() {
        if (mode.practice) return;
        localStorage.setItem(stateKey(mode), JSON.stringify({
            guessIds: guesses.map(g => g.id),
            finished: finished,
            won: won,
        }));
    }

    function loadStats() {
        try {
            return JSON.parse(localStorage.getItem(statsKey(mode))) ||
                { played: 0, wins: 0, streak: 0, best: 0 };
        } catch (e) {
            return { played: 0, wins: 0, streak: 0, best: 0 };
        }
    }

    function recordResult(didWin) {
        if (mode.practice) return;
        const s = loadStats();
        s.played += 1;
        if (didWin) {
            s.wins += 1;
            s.streak += 1;
            s.best = Math.max(s.best, s.streak);
        } else {
            s.streak = 0;
        }
        localStorage.setItem(statsKey(mode), JSON.stringify(s));
    }

    // ---------- rendering ----------

    function renderTabs() {
        const tabs = $("mode-tabs");
        tabs.innerHTML = "";
        MODES.forEach(m => {
            const btn = document.createElement("button");
            btn.className = "mode-tab" + (m.key === mode.key ? " active" : "");
            btn.textContent = m.label;
            btn.addEventListener("click", () => switchMode(m));
            tabs.appendChild(btn);
        });
    }

    function renderImage() {
        const img = $("plane-image");
        const missing = $("image-missing");
        missing.classList.add("hidden");
        img.classList.remove("hidden");
        img.onerror = function () {
            img.classList.add("hidden");
            missing.classList.remove("hidden");
        };
        img.src = answer.image;
        // Start heavily blurred; sharpen with each guess; reveal when the game ends.
        const blur = finished ? 0 : Math.max(2, 16 - guesses.length * 3);
        img.style.filter = "blur(" + blur + "px)";
    }

    function cellClass(match) {
        return "cell " + (match ? "cell-match" : "cell-miss");
    }

    function renderBoard() {
        const board = $("guess-board");
        board.innerHTML = "";
        guesses.forEach(g => {
            const row = document.createElement("div");
            row.className = "guess-row";

            const name = document.createElement("span");
            name.className = cellClass(g.id === answer.id);
            name.textContent = g.name;

            const era = document.createElement("span");
            era.className = cellClass(g.era === answer.era);
            era.textContent = g.era;

            const type = document.createElement("span");
            type.className = cellClass(g.type === answer.type);
            type.textContent = g.type;

            const country = document.createElement("span");
            country.className = cellClass(g.country === answer.country);
            country.textContent = g.country;

            const year = document.createElement("span");
            year.className = cellClass(g.firstFlight === answer.firstFlight);
            // ▲ the answer first flew LATER than your guess, ▼ earlier.
            let arrow = "";
            if (g.firstFlight < answer.firstFlight) arrow = " ▲";
            else if (g.firstFlight > answer.firstFlight) arrow = " ▼";
            year.textContent = g.firstFlight + arrow;
            year.title = arrow === " ▲" ? "The answer first flew later"
                : arrow === " ▼" ? "The answer first flew earlier" : "";

            [name, era, type, country, year].forEach(c => row.appendChild(c));
            board.appendChild(row);
        });

        // Empty placeholder rows for remaining guesses.
        for (let i = guesses.length; i < MAX_GUESSES; i++) {
            const row = document.createElement("div");
            row.className = "guess-row empty-row";
            for (let j = 0; j < 5; j++) {
                const cell = document.createElement("span");
                cell.className = "cell cell-empty";
                row.appendChild(cell);
            }
            board.appendChild(row);
        }
    }

    function shareText() {
        const score = won ? guesses.length + "/" + MAX_GUESSES : "X/" + MAX_GUESSES;
        let grid = "";
        guesses.forEach(g => {
            grid += "\n" +
                (g.era === answer.era ? "🟩" : "⬛") +
                (g.type === answer.type ? "🟩" : "⬛") +
                (g.country === answer.country ? "🟩" : "⬛") +
                (g.firstFlight === answer.firstFlight ? "🟩" : "⬛") +
                (g.id === answer.id ? " ✈️" : "");
        });
        return "Planedle " + mode.label + " " + todayStr + " — " + score + grid;
    }

    function renderResult() {
        const box = $("result-box");
        if (!finished) {
            box.classList.add("hidden");
            box.innerHTML = "";
            return;
        }
        box.classList.remove("hidden");
        box.innerHTML = "";

        const heading = document.createElement("h2");
        heading.className = won ? "result-win" : "result-loss";
        heading.textContent = won ? "Correct! It's the " + answer.name + " 🎉"
            : "Out of guesses — it was the " + answer.name + ".";

        const desc = document.createElement("p");
        desc.textContent = answer.description;

        const meta = document.createElement("p");
        meta.className = "result-meta";
        meta.textContent = answer.manufacturer + " · " + answer.country + " · " +
            answer.era + " · " + answer.type + " · first flight " + answer.firstFlight;

        box.appendChild(heading);
        box.appendChild(desc);
        box.appendChild(meta);

        const link = document.createElement("a");
        link.href = "directory.html#" + answer.id;
        link.textContent = "View in the directory →";
        box.appendChild(link);

        if (!mode.practice) {
            const share = document.createElement("button");
            share.className = "secondary-btn";
            share.textContent = "Share result 📋";
            share.addEventListener("click", () => {
                navigator.clipboard.writeText(shareText()).then(() => {
                    share.textContent = "Copied!";
                    setTimeout(() => { share.textContent = "Share result 📋"; }, 1500);
                });
            });
            box.appendChild(share);
        }
    }

    function renderStats() {
        const el = $("stats-box");
        if (mode.practice) {
            el.textContent = "Practice mode — nothing is saved, guess as many planes as you like.";
            return;
        }
        const s = loadStats();
        el.textContent = "Played " + s.played + " · Won " + s.wins +
            " · Streak " + s.streak + " · Best " + s.best;
    }

    function renderInput() {
        const disabled = finished;
        $("guess-input").disabled = disabled;
        $("guess-btn").disabled = disabled;
        $("practice-again-btn").classList.toggle("hidden", !(mode.practice && finished));
        hideSuggestions();
    }

    function renderAll() {
        renderTabs();
        renderImage();
        renderBoard();
        renderResult();
        renderStats();
        renderInput();
    }

    function switchMode(m) {
        mode = m;
        $("guess-input").value = "";
        loadState();
        renderAll();
    }

    // ---------- guessing ----------

    function submitGuess() {
        if (finished) return;
        const input = $("guess-input");
        const plane = findByName(input.value);
        if (!plane || guesses.some(g => g.id === plane.id)) {
            input.classList.add("shake");
            setTimeout(() => input.classList.remove("shake"), 400);
            return;
        }
        guesses.push(plane);
        input.value = "";

        if (plane.id === answer.id) {
            finished = true;
            won = true;
            recordResult(true);
        } else if (guesses.length >= MAX_GUESSES) {
            finished = true;
            won = false;
            recordResult(false);
        }
        saveState();
        renderAll();
    }

    // ---------- autocomplete ----------

    function hideSuggestions() {
        $("suggestions").classList.add("hidden");
        $("suggestions").innerHTML = "";
    }

    function showSuggestions() {
        const q = $("guess-input").value.trim().toLowerCase();
        const list = $("suggestions");
        list.innerHTML = "";
        if (q.length < 2) { list.classList.add("hidden"); return; }

        const matches = AIRCRAFT.filter(p => !guesses.some(g => g.id === p.id))
            .filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.manufacturer.toLowerCase().includes(q))
            .slice(0, 8);

        if (matches.length === 0) { list.classList.add("hidden"); return; }

        matches.forEach(p => {
            const li = document.createElement("li");
            li.textContent = p.name;
            li.addEventListener("mousedown", e => {
                e.preventDefault();
                $("guess-input").value = p.name;
                hideSuggestions();
                $("guess-input").focus();
            });
            list.appendChild(li);
        });
        list.classList.remove("hidden");
    }

    // ---------- wiring ----------

    document.addEventListener("DOMContentLoaded", () => {
        $("guess-btn").addEventListener("click", submitGuess);
        $("guess-input").addEventListener("input", showSuggestions);
        $("guess-input").addEventListener("blur", () => setTimeout(hideSuggestions, 150));
        $("guess-input").addEventListener("keydown", e => {
            if (e.key === "Enter") {
                // If exactly one suggestion is visible, take it.
                const items = document.querySelectorAll("#suggestions li");
                if (items.length === 1) $("guess-input").value = items[0].textContent;
                hideSuggestions();
                submitGuess();
            }
        });
        $("practice-again-btn").addEventListener("click", () => switchMode(mode));

        loadState();
        renderAll();
    });
})();
