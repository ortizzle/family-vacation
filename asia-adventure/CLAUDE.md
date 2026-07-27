# Asia Adventure — app notes

PWA trip companion for the May 18 – June 9, 2027 trip (Singapore → Disney Adventure cruise → Hong Kong → Shanghai → Tokyo → Kyoto → Oahu). Chris, Kat, Sedona (13), River (10). Android Pixel / Chrome is the target.

## Files

- `index.html` — shell, all CSS, all app JS (Passport & Stamps theme).
- `data/legs.js` — LEGS + DAYS (23 day objects, timeline events, forks, notes).
- `data/guides.js` — GUIDES (per-leg field guides) + PARKS (5 Disney strategy pages).
- `data/games.js` — TRIVIA (~55 Qs), QUESTS (per leg), BINGO (24), COACH (dated booking triggers), PACKING.
- `sw.js` — cache-first offline. **Bump `CACHE` ('aa27-vNN') on EVERY content change.** Phones need two opens after a push. In dev: unregister SW + clear caches before verifying, or you'll test stale files (this bit us during the build).
- `research/` — the source-of-truth research briefs (7 legs + 00-master-brief.md with the booking calendar and locked decisions).

## Date logic

- `?simdate=2027-05-25` previews any trip day.
- `currentDay()` is timezone-aware per leg (SGT/HKT/CST/JST/HST); June 7 exists twice (Kyoto morning + Honolulu morning) and is one panel under Oahu ('hi-d1'). Never use `toISOString()` for dates.

## localStorage (ns `aa27_`)

`quests` (id→bool) · `bingo` · `journal` (dayId→{m,e,s}) · `daynotes` (dayId→text, the plans-changed override; surfaces on Today at a Glance) · `pack` · `trivia_best` (deck→score) · `anthropic_key` (via Settings; app fully works without it) · `ui_*` (nav state).

## Conventions

createElement-only, no inline handlers, no alert/confirm/prompt (custom `showModal`), 44px targets, safe-area insets. Kat's activity picks slot in via day notes — no rebuild needed.
