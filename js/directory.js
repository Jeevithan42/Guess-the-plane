// Planedle - aircraft directory page to sort filter and browse types of aircrafts
// Requires js/data.js (the list of aircraft) to be actually loaded in in the first place

(function () {
    "use strict";
    const $ = id => document.getElementById(id);
    const ERA_ORDER = { "WW2": 0, "Cold War": 1, "Modern": 2 };

    function uniqueSorted(feild) {
        return [...new Set(AIRCRAFT.map(p => p[feild]))].sort();
    }

    function populateFilter(selectID, values) {
        const select = $(selectID);
        values.forEach(val => {
            const opt = document.createElement("option");
            opt.value = val;
            opt.textContent = val;
            select.appendChild(opt);
        })
    }

    function currentList() {
        const q = $("search-input").value.trim().toLowerCase();
        const era = $("era-filter").value;
        const type = $("type-filter").value;
        const country = $("country-filter").value;

        let list = AIRCRAFT.filter(p =>
            (!q || p.name.toLowerCase().includes(q) || p.manufacturer.toLowerCase().includes(q)) &&
            (!era || p.era === era) &&
            (!type || p.type === type) &&
            (!country || p.country === country)
        );

        const sort = $("sort-select").value;
        const byName = (a, b) => a.name.localeCompare(b.name);
        switch (sort) {
            case "name-asc": list.sort(byName); break;
            case "name-desc": list.sort((a, b) => byName(b, a)); break;
            case "year-asc": list.sort((a, b) => a.firstFlight - b.firstFlight); break;
            case "year-desc": list.sort((a, b) => b.firstFlight - a.firstFlight); break;
            case "era": list.sort((a, b) => (ERA_ORDER[a.era] - ERA_ORDER[b.era]) || byName(a, b)); break;
            case "type": list.sort((a, b) => a.type.localeCompare(b.type) || byName(a, b)); break;
            case "country": list.sort((a, b) => a.country.localeCompare(b.country) || byName(a, b)); break;
        }
        return list;
    }

    function buildCard(p) {
        const card = document.createElement("article");
        card.className = "plane-card";
        card.id = p.id;

        const img = document.createElement("img");
        img.className = "card-img";
        img.alt = p.name;
        img.loading = "lazy";
        img.src = p.image;

        img.addEventListener("error", () => {
            const ph = document.createElement("div");
            ph.className = "card-img img-placeholder";
            ph.innerHTML = "No photo yet<br><small>add " + p.image + "</small>";
            img.replaceWith(ph);
        })
        const body = document.createElement("div");
        body.className = "card-body";

        const h = document.createElement("h3");
        h.textContent = p.name;

        const maker = document.createElement("p");
        maker.className = "card-maker";
        maker.textContent = p.manufacturer + " · first flight " + p.firstFlight;

        const chips = document.createElement("div");
        chips.className = "chips";
        [p.era, p.type, p.country].forEach(v => {
            const chip = document.createElement("span");
            chip.className = "chip";
            chip.textContent = v;
            chips.appendChild(chip);
        });

        const desc = document.createElement("p");
        desc.className = "card-desc";
        desc.textContent = p.description;

        body.append(h, maker, chips, desc);
        card.append(img, body);
        return card;
    }

    function render() {
        const grid = $("aircraft-grid");
        grid.innerHTML = "";
        const list = currentList();
        $("result-count").textContent =
            list.length + " of " + AIRCRAFT.length + " aircraft shown";
        list.forEach(p => grid.appendChild(buildCard(p)));
    }

    document.addEventListener("DOMContentLoaded", () => {
        populateFilter("era-filter", ["WW2", "Cold War", "Modern"]);
        populateFilter("type-filter", uniqueSorted("type"));
        populateFilter("country-filter", uniqueSorted("country"));

        ["search-input", "sort-select", "era-filter", "type-filter", "country-filter"]
            .forEach(id => {
                $(id).addEventListener("input", render);
                $(id).addEventListener("change", render);
            });

        $("clear-filters").addEventListener("click", () => {
            $("search-input").value = "";
            $("sort-select").value = "name-asc";
            $("era-filter").value = "";
            $("type-filter").value = "";
            $("country-filter").value = "";
            render();
        });

        render();

        // If arriving from the game via directory.html#<id>, jump to and highlight that card.
        if (location.hash) {
            const target = document.getElementById(location.hash.slice(1));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "center" });
                target.classList.add("highlight");
            }
        }
    });
})();