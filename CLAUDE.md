# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

A PWA (Progressive Web App) trip companion for the Ortiz/Stallings/Simmons Alaska cruise — Disney Wonder, June 15–22, 2026. No build system, no dependencies beyond Google Fonts (CDN). Install via Safari → Add to Home Screen, or open directly in any browser.

## Files

| File | Purpose |
|------|---------|
| `splash.html` | Entry point — crest, countdown, "Begin" button → index.html |
| `index.html` | The entire app (~4700 lines) — all CSS, HTML, and JS in one file |
| `manifest.json` | PWA manifest — app name, icon, theme color, standalone display |
| `sw.js` | Service worker — caches all assets + Google Fonts for offline use |
| `ortiz-crest.png` | Full-size family crest art (recolored navy→forest-green/gold), used in splash screen |
| `ortiz-crest-192.png` / `ortiz-crest-512.png` | Square PWA manifest icons (any + maskable), generated from the crest |
| `apple-touch-icon.png` | 180×180 iOS home-screen icon, generated from the crest |
| `favicon.ico` | Browser tab favicon (16/32/48px), generated from the crest |
| `flashcard-ideas.md` | Staging file for new Alaska flashcard content |

## Architecture

`index.html` is organized as:

1. **`<style>`** — CSS design tokens in `:root`, then component styles
2. **`<body>`** — nav sections + dedicated pages, only one visible at a time
3. **`<script>`** — all JS at the bottom, no modules

### Navigation model

Two navigation patterns coexist:

- **`showSection(name, btnEl)`** — switches between the 7 bottom-nav tabs (home, crew, schedule, ports, alaska, plans, games). Updates `.active` section and nav button state.
- **`showPage(id)`** — shows a dedicated full-screen page with its own back button (no bottom nav). Current pages: `wonder`, `worldcup`, `emergency`, `keepsake`.

## Sections (bottom nav tabs)

| Tab | Section ID | Key contents |
|-----|-----------|------|
| Home | `section-home` | Countdown, trip stats, rich gradient home cards |
| Crew | `section-crew` | 3 family cards with member chips |
| Schedule | `section-schedule` | Day-by-day itinerary with accordion days; Ortiz/Ship toggle |
| Ports | `section-ports` | Port cards (Vancouver, Skagway, Juneau, Ketchikan, Tracy Arm) with preview chips and highlight grids |
| Alaska | `section-alaska` | Alaska Passport, Wildlife Bingo, Flashcards, History facts, Mad Libs |
| Plans | `section-plans` | Booked/maybe experiences by port, Packing list |
| Games | `section-games` | Game picker (8 games), Daily MVP journal |

## Dedicated pages (no bottom nav)

| Page ID | Section ID | Access |
|---------|-----------|--------|
| `wonder` | `section-wonder` | Disney Wonder card on Home |
| `worldcup` | `section-worldcup` | FIFA card on Home |
| `emergency` | `section-emergency` | Emergency card on Home |
| `keepsake` | `section-keepsake` | Trip Keepsake card on Home |
| `pack` | `section-pack` | Packing List card on Home (formerly a pill-toggle tab inside Cruise) |

## Home cards (in order)

1. **Trip Schedule** (amber) → `showSection('plans')`
2. **FIFA World Cup** (green) → `showPage('worldcup')`
3. **Disney Wonder** (navy) → `showPage('wonder')`
4. **Alaska 101** (teal) → `showSection('alaska')`
5. **Games** (purple) → `showSection('games')`
6. **Emergency Info** (dark red) → `showPage('emergency')`
7. **Trip Keepsake** (dark gold) → `showPage('keepsake')`

## State management (localStorage)

| Key | Type | Contents |
|-----|------|---------|
| `ak26-bingo` | JSON object | Wildlife Bingo spotted state, keyed by animal ID |
| `ak26_pack` | JSON object | Packing list checked state, keyed by item ID |
| `ak26-passport` | JSON object | Alaska Passport stamps, keyed by port name |
| `ak26-mvp` | JSON object | Daily MVP entries keyed by date string ("Jun 15"), each `{ moment, meal, wildlife }` |
| `ak26-note` | string | Freeform keepsake note |

Photo Bingo and Port Missions are session-only (no localStorage).

## Key data structures (all hardcoded in `<script>`)

| Object | Description |
|--------|-------------|
| `ANIMAL_DATA` | 24 animals for Wildlife Bingo — `{ id, emoji, name, facts[], tip }` |
| `BINGO_IDS` | 25-element array mapping grid positions to animal IDs; index 12 = `null` (FREE) |
| `BINGO_WINS` | 12 winning line patterns (rows, cols, diagonals) |
| `FLASHCARDS` | 37+ cards — `{ cat, q, a }` — categories: Wildlife, Geography, Glaciers, History, Culture, Ship Life |
| `MADLIBS` | Story templates with word prompts and `render(words[])` function |
| `EXP_DATA` | Experience detail modals, keyed by excursion ID — opened via `openExpDetail(key)` |
| `HIGHLIGHT_DATA` | Port highlight modals (18 port highlights + `river-rock` hotel) — opened via `openHighlight(id)` |
| `DINING_MENUS` | 7-night dinner menus keyed by `'ap-1'` … `'ti-2'` — opened via `openDiningMenu(key)` |

## Modal patterns

Three generic modal systems share similar open/close patterns:

### Experience detail modal (`modal-exp`)
- Open: `openExpDetail(key)` — populates slots from `EXP_DATA[key]`
- Close: `closeExpDetail()`
- Slots: `exp-modal-port`, `exp-modal-title`, `exp-modal-subtitle`, `exp-modal-body`

### Highlight modal (`modal-highlight`)
- Open: `openHighlight(id)` — populates slots from `HIGHLIGHT_DATA[id]`
- Close: `closeHighlight()`
- Slots: `hl-port`, `hl-icon`, `hl-title`, `hl-booked`, `hl-body`, `hl-links`

### Dining menu modal (`modal-dining`)
- Open: `openDiningMenu(key)` — populates from `DINING_MENUS[key]`
- Close: `closeDiningMenu()`
- Slots: `dm-night`, `dm-icon`, `dm-title`, `dm-theme`, `dm-note`, `dm-body`

### Animal modal (`modal-animal`)
- Open: `openAnimalModal(id)` — populates from `ANIMAL_DATA`
- Close: `closeAnimalModal()`

All modals: set `document.body.style.overflow = 'hidden'` on open, restore on close.

## Component patterns

### Accordion
```html
<div class="acc-trigger" onclick="toggleAcc(this)">
  ...content...
  <span class="acc-chevron"></span>
</div>
<div class="acc-body collapsed">
  ...body...
</div>
```
`toggleAcc(triggerEl)` operates on `triggerEl.nextElementSibling`.

### Port preview chips (in collapsed port header)
```html
<span class="port-preview-chip">🌡 62–68°F</span>
```

### Event list items
```html
<div class="event-item [tappable] [milestone]" [onclick="..."]>
  <div class="event-time">4:00 PM</div>
  <div class="event-detail">
    <div class="event-name">Name <span class="ev-tag">Tag</span></div>
    <div class="event-dots-row">...</div>
  </div>
</div>
```

### Tip items, did-you-know, fact-cards
```html
<div class="tip-item"><span class="tip-icon">🧊</span><strong>Label:</strong> text</div>
<div class="did-you-know"><div class="dyk-label">Label</div>text</div>
```

### Map/link buttons
```html
<div class="map-link-row">
  <a class="map-link-btn" href="..." target="_blank">Label</a>
</div>
```

## Family color coding

| Family | Color token | CSS classes |
|--------|------------|-------------|
| Ortiz | `--glacier` (blue) | `.pill-o`, `.dot-o`, `.family-ortiz` |
| Stallings | `--forest-light` (green) | `.pill-s`, `.dot-s`, `.family-stallings` |
| Simmons | `--gold` (gold) | `.pill-sim`, `.dot-sim`, `.family-simmons` |

## Schedule structure

Each day is an accordion. Days include:
- A `port-day-badge` header with day number and date
- Ortiz-specific events (booked excursions, tastings, spa)
- Ship entertainment events (shows tagged `Ship Show`, deck parties tagged `Deck Party`)

**Show schedule by night:**

| Night | Show | Theater times |
|-------|------|--------------|
| 1 | Sail-Away Deck Party + Welcome Show | Evening |
| 2 | The Golden Mickeys | 6:15 PM / 8:30 PM |
| 3 | ❄️ Frozen Sing-Along (deck) + Comedy Act | 3:00 PM / 6:15 PM / 8:30 PM |
| 4 | Movie screening (Skagway port night) | Evening |
| 5 | ❄️ Frozen, A Musical Spectacular | 6:15 PM / 8:30 PM |
| 6 | Special Act: Comedian / Ventriloquist | 6:15 PM / 8:30 PM |
| 7 | Disney Dreams — An Enchanted Classic + 🏴‍☠️ Pirate Night | 6:15 PM / 8:30 PM / 9:45 PM |

Early dining (~5:45 PM) → attend late show. Late dining (~8:15 PM) → attend early show.

## Dining rotation tracker (in section-wonder)

7 rows, Night 1–7. Each row is tappable → `openDiningMenu(key)`. Keys:
- `ap-1`, `ap-2`, `ap-3` — Animator's Palate visits
- `tr-1`, `tr-2` — Triton's visits
- `ti-1`, `ti-2` — Tiana's Place visits

Night numbers map to dining dates via a JS lookup on page load that sets `display:''` on the matching `#dn-{1–7}` "Tonight" badge.

## Alaska Passport (in section-alaska)

5 circular stamp tiles — one per port (Vancouver, Skagway, Juneau, Ketchikan, Tracy Arm). `stampPort(port)` toggles `ak26-passport` in localStorage. Shows a completion banner when all 5 are stamped.

## Daily MVP (in section-games, below game picker)

8 accordion days (Jun 15–22). Each day has 3 textarea inputs: moment, meal, wildlife. `saveMvp(el)` saves to `ak26-mvp` on input.

## Keepsake page (section-keepsake)

Rendered fresh on every open via `renderKeepsake()`. Pulls from:
- `ak26-mvp` → day-by-day memory cards
- `ak26-bingo` → wildlife spotted chips
- `ak26-passport` → ports stamped count
- `ak26-note` → freeform note (auto-saved via `saveKeepsakeNote(el)`)

"Copy to Clipboard" builds a plain-text summary and calls `navigator.clipboard.writeText()`.

## PWA / offline

- `manifest.json` — `start_url: /splash.html`, `display: standalone`, Ortiz crest icon
- `sw.js` — cache name `ak26-v2`, caches all local files (incl. icon set) + Google Fonts on install. Cache-first strategy for local/font assets; network pass-through for external links (maps, FIFA, etc.). Bump the cache name (`v2` → `v3`...) whenever the asset list changes so clients pick up the update.
- Both `splash.html` and `index.html` register the service worker and include all Apple PWA meta tags

## Adding flashcards

Append to `FLASHCARDS` array in the script: `{ cat: 'Category', q: 'Question?', a: 'Answer.' }`. Categories: Wildlife, Geography, Glaciers, History, Culture, Ship Life. Move the item from "Ideas to Add" to "Already in the App" in `flashcard-ideas.md`.

## Known stubs

- **Password screen** — CSS classes `.pw-*` and `#pw-screen` are defined but the HTML element and JS gate have not been implemented.
