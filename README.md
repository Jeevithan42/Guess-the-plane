# Planedle — Guess the Plane

A Wordle-inspired daily military aircraft guessing game plus a browsable directory of 74 major military aircraft from WW2 to the modern era. Plain HTML/CSS/JS — no build step, no server needed.

## Pages

- **index.html** — the daily game. Seven modes: Daily Plane, Daily Fighter, Daily Bomber, Daily Cargo, Daily WW2, Daily Modern, and an unlimited Practice mode. The mystery photo starts blurred and sharpens with each of your 6 guesses. After each guess you get Wordle-style feedback on era, type, country, and first-flight year (▲/▼ = the answer flew later/earlier). Stats and streaks are saved per mode in your browser, and you can copy an emoji share grid.
- **directory.html** — every aircraft with photo, description, and stats. Search by name/manufacturer, filter by era/type/country, and sort by name, first flight, era, type, or country.

## Project layout

```
index.html          game page
directory.html      directory page
css/style.css       shared styles
js/data.js          aircraft database (add new planes here)
js/game.js          game logic
js/directory.js     directory logic
images/             put aircraft photos here (see images/image-list.txt)
```

## Setup

1. Copy the code from each `*.txt` file into the matching real file (e.g. `js/data.js.txt` → `js/data.js`).
2. Add photos to `images/` using the exact filenames in `images/image-list.txt`.
3. Open `index.html` in a browser.

## Adding a new aircraft

Add one object to the `AIRCRAFT` array in `js/data.js` (id, name, manufacturer, country, era, type, firstFlight, image, description) and drop a matching photo into `images/`. It automatically appears in the directory and in every game mode whose filter it matches.
