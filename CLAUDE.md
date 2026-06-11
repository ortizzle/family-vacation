# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

A PWA (Progressive Web App) trip companion for the Ortiz/Stallings/Simmons Alaska trip — Vancouver June 11–15, then Disney Wonder June 15–22, 2026. No build system, no dependencies beyond Google Fonts (CDN). Install via Add to Home Screen, or open directly in any browser. Live at the GitHub Pages URL; push via GitHub Desktop only (terminal is not authenticated).

## Files

| File | Purpose |
|------|---------|
| `splash.html` | Entry point — crest, countdown, "Begin" button → index.html |
| `index.html` | The entire app (~8,000 lines) — all CSS, HTML, and JS in one file |
| `manifest.json` | PWA manifest — app name, icon, theme color, standalone display |
| `sw.js` | Service worker — caches all assets + Google Fonts for offline use |
| `ortiz-crest*.png`, `apple-touch-icon.png`, `favicon.ico` | Crest art + icon set |
| `flashcard-ideas.md` | Staging file for new Alaska flashcard content |
| `.claude/launch.json` | Preview server config (`npx serve`) — use preview_start, navigate to `/` not `/index.html` (serve 301-redirects it) |

## Architecture

`index.html` is one `<style>` block, then `<body>` sections, then ONE `<script>` block at the bottom (no modules). Only one `.section` is visible at a time (`.active`).

### Navigation model

- **`showSection(name, btnEl)`** — switches the 5 bottom-nav tabs: `home`, `vancouver`, `cruise`, `alaska`, `games`. Requires the nav button element as 2nd arg (testing tip: click the nav DOM element instead of calling it).
- **`showPage(id)`** — full-screen pages with their own back button: `wonder`, `worldcup`, `emergency`, `keepsake`, `pack`.
- **`goToPhase(tab)`** — legacy helper: `'ortiz'` → vancouver section, anything else → cruise.

## Bottom-nav tabs

| Tab | Section ID | Key contents |
|-----|-----------|------|
| Home | `section-home` | Expedition poster: countdowns, **Today at a Glance** card, **Tonight strip**, crew banner, chapter cards (link to all other sections/pages) |
| Vancouver | `section-vancouver` | 5 day panels `van-d1`–`van-d5` (Jun 11–15), day-tab bar, swipe between days, transport accordions, "📅 Penciled In" tags |
| Cruise | `section-cruise` | 8 day panels `cruise-d1`–`cruise-d8` (Jun 15–22), day-tab bar, swipe, route map, pro tips |
| Alaska | `section-alaska` | Alaska Passport, Wildlife Bingo, Flashcards, History, Mad Libs |
| Games | `section-games` | 9 games: Photo Bingo, Missions, Anagram, Word Search, True/False, Alaska Trivia, Emoji Decoder, Would You Rather, Disney Trivia |

Day switching: `switchVanDay(id)` / `switchCruiseDay(id)`; swipe via `enableDaySwipe()`.

## "Today" logic (all date-driven features)

- **`tripNow()`** — single source of "now". Supports `?simdate=2026-06-17` URL param to preview any trip day (also drives countdowns). Use this for any new date logic; never `new Date()` directly, and never `toISOString()` for date-keying (UTC rolls over ~4 PM in Alaska — use `tripTodayStr()`).
- **`getTodayDayId(prefix, startDateStr, numDays)`** → `_vanTodayId` (Jun 11–15) / `_cruiseTodayId` (Jun 15–22). Vancouver wins on the Jun 15 overlap.
- **`markTodayTab()`** — "Today" badge + "Jump to Today" buttons on day-tab bars (Vancouver, Cruise, MVP journal).
- **`renderTodayGlance()`** — poster card showing today's day panel headline; hidden outside trip dates.
- **`renderTonightStrip()`** — poster card on cruise nights 1–7: tonight's dinner (respects overrides; taps into menu) + tonight's show. Re-rendered by `applyDinnerOverrides()`.
- Dining rotation "Tonight" badge: `#dn-1`–`#dn-7` via date map in the rotation tracker (section-wonder).

## Cruise schedule facts (2026 season)

- Family has **first (early) dining seating ~5:45 PM** → the **8:30 PM late show** is theirs (tagged "⭐ Your Show"). Early 6:15 PM shows were removed from the schedule entirely.
- **Frozen Night replaces Pirate Night** on Alaska sailings (Day 3 / Glacier Day): Anna's Frozen Fun Hunt (morning), Oaken's Maypole (afternoon), Frozen Sing-Along on deck (~3 PM).
- **Glacier day is Endicott Arm / Dawes Glacier** — Tracy Arm is closed all 2026 (Aug 2025 landslide/tsunami). Red warning callouts exist on Day 3 and the Glacier Explorer (DG01) modal.
- Dining rotation: AP → Triton's → Tiana's → AP → Triton's → Tiana's → AP. Night 3: adults at Palo 6:00–7:30, kids at Tiana's.
- Keep event lists chronological when inserting items.

## Dinner items + override system (phone-side editing)

Dinner event items carry `data-dinner-key` (`ap-1`…`ap-3`, `tr-1`, `tr-2`, `ti-1`, `ti-2`, `minami`, `van-dinner-sat`) and inner spans `.dinner-time-text`, `.dinner-name-text`, `.dinner-note-text`. They call **`openDinnerItem(key)`** (NOT `openDiningMenu` directly), which checks the override store first.

- Store: `ak26-dinner-overrides` — `{ key: { time, name, note, menuKey } }`. `menuKey` redirects which menu opens (`null` keep original, `'none'` no menu → opens editor).
- Edit UI: "✏️ Customize" button at the bottom of the dining menu modal → `#modal-dinner-edit` sheet (time/name/menu-picker/note, Save/Reset).
- `applyDinnerOverrides()` patches the DOM, adds "✏️ Edited" badges, and refreshes the Tonight strip. Runs on DOMContentLoaded and after every save/reset.
- `DINNER_DEFAULTS` holds original time/name per key (placeholder text + reset display).

## Key data structures (all hardcoded in the script)

| Object | Description |
|--------|-------------|
| `ANIMAL_DATA`, `BINGO_IDS`, `BINGO_WINS` | Wildlife Bingo (24 animals, 5×5 grid, win lines) |
| `PB_WINS`, `pbWon` | Photo Bingo win lines + per-board won-line sets (`wild`, `ship`) |
| `FLASHCARDS` | 44+ cards `{ cat, q, a }` — Wildlife, Geography, Glaciers, History, Culture, Ship Life |
| `MADLIBS` | Story templates with `render(words[])` |
| `EXP_DATA` | Excursion detail modals — `openExpDetail(key)` |
| `HIGHLIGHT_DATA` | Port highlight modals — `openHighlight(id)` |
| `DINING_MENUS` | Menus: 7 cruise nights + `minami` + `van-dinner-sat`. Optional `startersLabel`/`mainsLabel`/`dessertsLabel`/`footer` override the section headings (used by the Vancouver entries) |
| `POSTCARD_TYPES` | 3 postcard styles for the Keepsake builder (`showCrew` controls the family-names footer on export) |
| `TONIGHT_PLAN` | Night → dinner key + show line for the Tonight strip |

## State management (localStorage)

| Key | Contents |
|-----|---------|
| `ak26-bingo` | Wildlife Bingo spotted state |
| `ak26-photobingo` | Photo Bingo spotted cells (`"board-pbid": true`) |
| `ak26-missions` | Port Missions done state (keyed by item index) |
| `ak26_pack` | Packing list checked state |
| `ak26-passport` | Passport stamps (vancouver, skagway, juneau, ketchikan, openwater) |
| `ak26-mvp` | Daily MVP entries, 12 days Jun 11–22, `{ moment, meal, wildlife }` |
| `ak26-note` | Freeform keepsake note |
| `ak26-postcard-type` / `ak26-postcard-note` | Postcard builder selections |
| `ak26-dinner-overrides` | Phone-side dinner edits (see above) |

On-load restore for Photo Bingo records already-won lines silently (no confetti replay).

## Keepsake page (`section-keepsake`)

Rendered fresh via `renderKeepsake()`: trip stats, **Daily MVP journal** (12 day-tab panels, Jun 11–22), day-by-day memories, postcard builder (live preview + canvas PNG export via `savePostcard()`), freeform note, copy-to-clipboard.

## Modal patterns

Generic open/close pairs sharing `document.body.style.overflow` lock: `modal-exp`, `modal-highlight`, `modal-dining` (slots `dm-*`), `modal-dinner-edit` (slots `de-*`), `modal-animal`, plus `openModal(id)`/`closeModal(id)` for static modals (`palo`, `palo-dinner`, …).

## PWA / offline — IMPORTANT update behavior

`sw.js` is **cache-first for local assets including index.html**. Consequences:

1. **Bump the cache name (`ak26-vNN`) on every content change** — clients clear old caches on activate.
2. Phones need **two app opens** after a push to see new content (first open installs the new SW, second serves fresh files).
3. In the browser preview, unregister SWs + clear caches before verifying changes, or you'll screenshot stale HTML.

## Conventions

- Commit after completing changes without asking; push is done by Chris via GitHub Desktop.
- Family color coding: Ortiz `--glacier`/`.dot-o`, Stallings `--forest-light`/`.dot-s`, Simmons `--gold`/`.dot-sim`.
- Event item pattern: `.event-item [tappable] [milestone]` with `.event-time` + `.event-detail`; tags via `.ev-tag` (`.ev-tag-warn` for "📅 Penciled In").
- Accordions: `.acc-trigger` + `.acc-body.collapsed` via `toggleAcc(this)`; transport legs use `.transport-acc-trigger` + `toggleTransport(this)`.
- Timezone: family is Arizona (UTC-7, no DST); ship runs Alaska time.

## Known stubs

- **Password screen** — `.pw-*` CSS exists; HTML element and JS gate never implemented.
