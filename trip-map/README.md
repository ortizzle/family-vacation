# Trip Map — standard module for every trip app

Every trip app gets a **🗺️ Map tab** that works offline. It shows all the stops pinned on a
real base map. Tap two pins to get distance, drive time and a rideshare price estimate,
plus Uber and Google Maps buttons with both stops filled in.

**Reference implementation:** `kc-chiefs/index.html` (Red Weekend, Oct 2026). Search it for
`/* ═════════ Places + rides` and `/* ═════════ Map tab`. To add the map to a new app, copy
those two blocks plus the `/* ═══ Map ═══ */` CSS block, then restyle them to the app's theme.

## 1. Bake the base map (build time, once per trip)

```bash
python3 -I trip-map/make-map-geo.py --bbox W S E N --out /tmp/map-geo.js \
  --text "KANSAS@-94.76,39.0" "Missouri River@-94.60,39.135"
```

- **bbox:** pad about 3 miles past the outermost stop.
- **Output:** paste the result inline into the app's `<script>` as `const MAP_GEO = …`. Keep the
  app a single file; ~20 KB is normal.
- **Data source:** Natural Earth (public domain), downloaded from `raw.githubusercontent.com`.
  Map tile servers and routing APIs are blocked from the build sandbox, and they wouldn't work
  offline anyway.
- **Shields:** placed automatically. Check them in a screenshot and move or delete any that land
  somewhere odd.

## 2. Data each app provides

| Const | What | Rules |
|---|---|---|
| `PLACES` | `{ id: { e, n, lat, lon, q, eat?/poi?/doc? } }` | One per stop: lodging, airport, every anchor, every dining pick. `q` is the **full street address**; the Uber and Maps buttons use it, so a slightly-off pin never sends anyone to the wrong place. |
| `LEGS` | `{ 'a\|b': { mi, min } }` (ids sorted) | Researched distances for the key rides (airport↔lodging, lodging↔each anchor). Anything not listed is estimated as straight-line × 1.3. |
| `fare()` | rideshare estimate | **Calibrate it per city** to Uber's published averages for that metro (e.g. its "MCI → Overland Park $63" route page). Show a range (×0.85–×1.2) and label it "before surge and tip". |
| `MAP_VIEWS` | preset zoom chips | Always include "Whole trip", plus one chip per cluster of stops (downtown, stadium, lodging area…). |

## 3. Behavior (keep all of it)

- **Pins** stay the same size on screen at every zoom, with ≥48px tap targets.
  - **Whole-trip view:** crowded pins merge into a red cluster that zooms in when tapped.
  - **Zoomed views:** overlapping pins are nudged apart, with a thin line back to their true spot.
  - **Labels:** shown on the left for pins near the right edge.
- **A→B selection:** tap → A, tap → B, tap again → start over.
- **Route card:** distance, drive time, rideshare range, a surge warning for event venues, an
  🚕 Uber deep link (`m.uber.com/ul/?action=setPickup…`) and a 🧭 Google Maps directions link.
- **Live refinement when online:** the public OSRM router returns road distance and route
  geometry. Pad its drive time by 15%, since it has no live traffic. Cache results in
  `<prefix>-ui-routes` so they keep working offline. If the request fails, stay quiet and keep
  the estimate.
- **Ride chips:** every timeline item that is a rideshare leg gets `ride:['from','to',surge?]`,
  which renders a "🚕 Uber est. $X–$Y · mi · min" chip that opens the route on the map.
- **Shortcut buttons** under the map cover every rideshare leg of the trip.
- **The Stops list** under the map gives the name and address of each stop.
- **Credit line:** "Base map: Natural Earth (public domain). Pins are approximate…"

## 4. Research checklist additions

- Geocode every stop (lat/lon to 4 decimals). Where sources disagree, cross-check against the
  street grid or a news mention ("a mile from the stadium"). Pins are approximate; addresses are
  exact.
- Find the metro's published rideshare averages (Uber airport and route pages) and calibrate
  `fare()` to them.
- Note event-day surge and the official rideshare pickup zone for stadiums or venues.

## 5. Smoke test additions

- Map tab renders with no console errors at 390px, with no horizontal scroll.
- Tapping two pins shows the route card. Every preset chip and cluster zooms.
- Every ride chip opens the map with that route selected.
- Offline (airplane mode): the map, estimates and cached live routes all still work.
