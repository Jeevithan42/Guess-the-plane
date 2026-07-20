# Planedle — Guess the Plane

A Wordle-inspired daily military aircraft guessing game plus a browsable directory of 74 major military aircraft from WW2 to the modern era. Plain HTML/CSS/JS.


## Pages

- **index.html** — the daily game. Seven modes: Daily Plane, Daily Fighter, Daily Bomber, Daily Cargo, Daily WW2, Daily Modern, and an unlimited Practice mode. The mystery photo starts blurred and sharpens with each of your 6 guesses. After each guess you get Wordle-style feedback on era, type, country, and first-flight year (▲/▼ = the answer flew later/earlier). Stats and streaks are saved per mode in your browser, and you can copy an emoji share grid.

- **directory.html** — every aircraft with photo, description, and stats. Search by name/manufacturer, filter by era/type/country, and sort by name, first flight, era, type, or country.

## Project layout

```
index.html          game page
directory.html      directory page
css/style.css       shared styles
js/data.js          aircraft database (add new planes here)
js/images.js        resolves photos from Wikipedia
js/game.js          game logic
js/directory.js     directory logic
```

## Photos

No images are kept in this repo. Each plane in `js/data.js` carries a `wiki` field holding the exact title of its English Wikipedia article, and `js/images.js` resolves that title to the article's lead photo through the Wikipedia API

Photos are contributed by Wikipedia editors under their own licences; both pages credit Wikipedia in the footer and link to each plane's article.

