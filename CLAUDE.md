# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-file mobile web app (`index.html`) for the Ortiz/Stallings/Simmons Alaska cruise trip — Disney Wonder, June 15–22, 2026. No build system, no dependencies beyond Google Fonts (CDN). Open the file in a browser to run it.

## Architecture

Everything lives in `index.html`. The file is organized as:

1. **CSS** (`<style>`) — design tokens in `:root`, then component styles. Color palette: forest greens (`--forest-dark/mid/light`), glacier blues (`--glacier/glacier-light/glacier-pale`), gold (`--gold/gold-pale`). Mobile-first, max-width 430px.
2. **HTML body** — 7 `<section id="section-*">` elements, only one `.active` at a time. Fixed bottom nav drives navigation via `showSection()`.
3. **`<script>`** at the bottom — all JavaScript, no modules.

## Sections (tabs)

| Tab | Section ID | Notes |
|-----|-----------|-------|
| Home | `section-home` | Countdown, quick stats, highlight cards |
| Crew | `section-crew` | 3 family cards with member chips |
| Schedule | `section-schedule` | Day-by-day itinerary, accordion days, ship vs Ortiz toggle |
| Ports | `section-ports` | Port cards for Vancouver, Skagway, Juneau, Ketchikan, Tracy Arm |
| Alaska | `section-alaska` | Wildlife Bingo, Flashcards, History facts, Mad Libs |
| Plans | `section-plans` | Booked/maybe experiences by port, Packing list |
| Games | `section-games` | Photo Bingo (Wilderness + Ship boards), Port Missions |

## State management

`localStorage` keys:
- `ak26-bingo` — Wildlife Bingo spotted state (JSON object, keyed by animal ID)
- `ak26_pack` — Packing list checked state (JSON object, keyed by item ID)

Photo Bingo and Port Missions are session-only (no persistence).

## Key data structures

All data is hardcoded in the script block:

- **`ANIMAL_DATA`** — 24 animals for Wildlife Bingo, each with `emoji`, `name`, `facts[]`, `tip`
- **`BINGO_IDS`** — 25-element array mapping grid positions to animal IDs (index 12 is `null` = FREE space)
- **`BINGO_WINS`** — 12 winning line patterns (rows, columns, diagonals)
- **`FLASHCARDS`** — 37+ cards with `cat`, `q`, `a` fields; categories: Wildlife, Geography, Glaciers, History, Culture, Ship Life
- **`MADLIBS`** — story templates with word prompts and a `render(words[])` function
- Experience modal content — keyed objects in the `openModal()`/`closeModal()` flow

## Adding flashcards

`flashcard-ideas.md` is a staging file for new cards. When adding cards from it to the app, append to the `FLASHCARDS` array in the script, matching the `{ cat, q, a }` format. Update `flashcard-ideas.md` to move items from "Ideas to Add" to "Already in the App".

## Family color coding

Three families each have a consistent color throughout the app:
- **Ortiz** — glacier blue (`--glacier`, `.pill-o`, `.dot-o`, `.family-ortiz`)
- **Stallings** — forest green (`--forest-light`, `.pill-s`, `.dot-s`, `.family-stallings`)
- **Simmons** — gold (`--gold`, `.pill-sim`, `.dot-sim`, `.family-simmons`)

## Password screen

CSS is defined for `#pw-screen` and `.pw-*` classes (lines 177–224) but the HTML element and JS logic have not been implemented yet.

## Accordion pattern

Port cards and schedule days use a consistent accordion pattern: a trigger element with class `acc-trigger` contains an `.acc-chevron`, and its `nextElementSibling` is the `.acc-body`. Toggle via `toggleAcc(triggerEl)`. Collapsed state uses class `acc-body.collapsed` (max-height: 0).
