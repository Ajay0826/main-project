# Ultimate Tool Kit

A collection of small, browser-based JavaScript projects presented through a single dashboard. The main page provides quick productivity tools and lets you open several mini-projects without leaving the dashboard.

## Features

- To-do list with add and delete controls
- Quick notepad with notes saved in `localStorage`
- Countdown timer and dice roller on the home page
- Digital clock and header weather widget
- Embedded mini-projects loaded through iframes:
  - CV project
  - Calculator
  - Form card
  - Counter
  - Digital clock
  - Weather app
- Standalone timer and dice roller pages
- Responsive dark-themed layout

## Project structure

```text
index.html                 Main dashboard
style/                     Dashboard styles
javascript/                Shared dashboard JavaScript
calculator/                Calculator mini-project
counter/                   Counter mini-project
cvproject/                 CV mini-project
diceroller/                Standalone dice roller
digitalclock/              Digital clock mini-project
formcard/                  Form card mini-project
live-weather-app/          Open-Meteo weather mini-project
timer/                     Standalone timer
images/                    Social and interface images
```

## Running the project

No build tools or package installation are required.

1. Open the project folder in VS Code.
2. Start a local web server from the project root.
3. Open `index.html` through that server.
4. Select a project from the **Projects** sidebar.

A local server is recommended because browser security restrictions can prevent iframe loading or API requests when files are opened directly with `file://`.

## Weather API

Both weather features use Open-Meteo, including its free geocoding service. No API key or account is required.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage`
- Fetch API
- Open-Meteo API

## Notes

This is a collection of front-end practice projects, so each mini-project keeps its own HTML, CSS, and JavaScript files. The dashboard connects the embedded projects through `javascript/projectloader.js`.
