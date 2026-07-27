'use strict';
/* Field Guides (per leg) + Disney park strategy pages. Sourced from research/ briefs. */

const GUIDES = {
sg: {
 dining:[
  {n:'Lau Pa Sat + Satay Street', c:'Hawker · satay', p:'$', w:'Charcoal satay eaten on a closed-off street inside a Victorian market (stalls 7–8). Satay Street fires up 7 PM weekdays.'},
  {n:'Jumbo Seafood, Riverside Point', c:'Chili crab', p:'$$$$', w:'THE national-dish splurge — chili crab + fried mantou for dunking. Reserve online ahead.'},
  {n:'Din Tai Fung, MBS', c:'Dumplings', p:'$$', w:'18-fold xiaolongbao behind glass — the guaranteed kid-win, steps from the hotel.'},
  {n:'Satay by the Bay', c:'Hawker', p:'$', w:'Inside Gardens by the Bay — dinner flows straight into the 7:45 light show.'},
  {n:'Ya Kun Kaya Toast', c:'Breakfast', p:'$', w:'Heritage kaya toast set since 1944 — dip the toast in the soft eggs. Under S$8.'},
  {n:'Rasapura Masters', c:'Food court', p:'$', w:'24/7 inside The Shoppes — the jet-lag safety net.'},
 ],
 logistics:[
  'Changi→Marina Bay: Grab ~20 min, S$25–45 at night. MRT later for the experience (tap any contactless card; each rider needs their own).',
  'Cruise transfer May 20: ~2 miles, 5–10 min Grab; leave 30 min before your Port Arrival Time.',
  'Cash S$50–100 for hawker stalls; contactless everywhere else. No tipping — it’s in the bill.',
  'Weather: 90°F, 82% humidity, storms most likely 12–4 PM. Outdoors early + late, domes midday; rain passes fast — shelter, don’t cancel.',
 ],
 etiquette:[
  'No eating/drinking on the MRT (S$500 fine).','Return your own hawker tray (required).','A tissue packet on a table means it’s taken (“chope”).','Queues are sacred; escalators stand-left.',
 ],
 flags:['Cloud Forest/Flower Dome: timed tickets 1–2 days ahead; check the monthly maintenance-closure calendar for May 19.','Jumbo: reserve ahead.','Vesak Day (May 20) = public holiday hours.']},

sea: {
 dining:[
  {n:'Rotation restaurants (3 of 6)', c:'Assigned track', p:'incl.', w:'Navigator’s Club / Animator’s Palate / Pixar Market — or — Hollywood Spotlight / Animator’s Table / Enchanted Summer. Mickey & friends appear at the “Club” rooms.'},
  {n:'Palo Trattoria', c:'Adults-only Italian', p:'$$$', w:'Reviewers’ best-value splurge aboard. Booked at the Platinum 120-day window.'},
  {n:'Mike & Sulley’s — Flavors of Asia', c:'Teppanyaki/omakase', p:'$$$$', w:'Monsters-Inc premium Asian — nothing like it on other DCL ships.'},
  {n:'Quick service', c:'Included', p:'incl.', w:'Mowgli’s (Indian) and Gramma Tala’s (Pacific) are genuinely good. Bewitching Boba = free bubble tea.'},
 ],
 logistics:[
  'Online check-in at 30 days: grab the earliest Port Arrival Time.','Luggage tags issued at the terminal (not mailed).','Room service now carries a US$5 fee + 18% tip; the breakfast door-hanger is exempt.','Debark: express walk-off ~7:30 AM; DCL rule — no flights before 11:15 AM.',
 ],
 etiquette:['It’s 100% sea days — pace like a resort, not a port sprint.','Theatre fills 30 min early.','Deck shade is scarce; equatorial sun is serious.'],
 flags:['Ironcycle reservation opens in-app at boarding — minute one.','Fireworks sail select nights only — confirm which night on day 1.','Height requirements for Marvel Landing rides: check for River at the kiosk.']},

hk: {
 dining:[
  {n:'City Hall Maxim’s Palace', c:'Cart dim sum', p:'$$', w:'THE trolley experience — kids pick from passing carts. No reservations; arrive before noon.'},
  {n:'Tim Ho Wan', c:'Dim sum', p:'$', w:'Cheapest Michelin star ever; baked char siu bao with the sugary crust = kid win.'},
  {n:'Mammy Pancake', c:'Egg waffles', p:'$', w:'Michelin street-food list six years running (~HK$20).'},
  {n:'Hutong', c:'Northern Chinese', p:'$$$$', w:'Peking duck 18 floors above the skyline — the HK splurge. Window table ~7:30, booked well ahead.'},
  {n:'Temple Street stalls', c:'Street food', p:'$', w:'Curry fish balls + dragon-beard candy crawl, open till ~11 PM.'},
  {n:'Crystal Lotus', c:'Character dim sum', p:'$$$', w:'Mickey-face buns at the Disneyland Hotel — pre-book the Disney Friends set (do it for the memory).'},
 ],
 logistics:[
  'HKG→Explorers Lodge: taxi ~15 min (~HK$150). US passports: 90 days visa-free.',
  'Octopus on phones for everyone (child version for River — kid fares). Works on MTR, ferries, trams, 7-Eleven.',
  'To the park: hotel shuttle/walk. To the city: MTR via Sunny Bay ~45 min.',
  'Weather 80s°F + humid + showers; every interior is arctic-A/C.',
  'May 27: fly to Shanghai (~2.5 hr) — the once-daily train takes 8 hours; skip it.',
 ],
 etiquette:['Stand right on escalators.','Teapot lid ajar = refill please; tap two fingers to thank the pourer.','Chopsticks never upright in rice.'],
 flags:['CHINA TRANSIT: carry printed 240-hr visa-free policy + Tokyo itinerary for the HKG check-in desk.','Symphony of Lights retiring — verify status; skyline unaffected.','Peak Tram: book online ≤30 days out; skip in clouds/high wind.']},

sh: {
 dining:[
  {n:'Jia Jia Tang Bao', c:'Xiaolongbao', p:'$', w:'Cult-favorite soup dumplings near People’s Square — go before 11 AM, they sell out.'},
  {n:'Nanxiang Mantou Dian', c:'Soup buns', p:'$', w:'Historic (1900), at Yu Garden — the giant crab-soup bun with a straw is the spectacle. Eat upstairs, skip the takeout line.'},
  {n:'Lost Heaven on the Bund', c:'Yunnan', p:'$$$', w:'The family splurge: gorgeous room, mild-spice folk dishes kids actually eat, Bund lights after.'},
  {n:'Waipo Jia', c:'Homestyle', p:'$', w:'Sweet-savory braised pork + fried rice; ~$40 feeds four.'},
  {n:'In-park', c:'Disney', p:'$$', w:'Hoisin turkey leg (2/person limit), Mickey pizza, surprisingly good xiaolongbao, steak popcorn. Cheap by US-Disney standards.'},
 ],
 logistics:[
  'TRANSIT VISA: dedicated lane at arrival, 30–60 min of paperwork; onward Tokyo ticket in hand. Uses ~72 of 240 allowed hours.',
  'Payments: Alipay (linked cards, verified BEFORE the trip) + ¥500–1,000 backup cash. Foreign cards work only at hotels/Disney/upscale.',
  'Connectivity: roaming travel eSIM = Google/Gmail/Maps work; without it they don’t. Install before landing.',
  'Maglev PVG↔Longyang: ¥50, 8 min, 300 km/h. Metro ¥3–9 with security bag-scans. Didi = Uber (English mode).',
  'May 30 exit: leave 3.5 hrs before the Tokyo flight — Sunday transit-lane queues.',
 ],
 etiquette:['Queue-guarding is normal — hold your ground politely.','No tipping anywhere.','Carry tissues; squat toilets outside malls/hotels (Disney is Western).','Hot water is the default drink.'],
 flags:['Re-verify 240-hr policy ~Feb 2027 (trip’s #1 verify item).','SDL tickets are real-name: passports at the gate.','DPA bundle drops ~10 days out — buy for Saturday immediately.','Duoyun Books needs a free reservation (WeChat) days ahead.']},

tyo: {
 dining:[
  {n:'Kura Sushi Global Flagship', c:'Conveyor sushi', p:'$', w:'Every 5 plates = a Bikkura-Pon gacha spin. Dinner is literally a game.'},
  {n:'AFURI', c:'Yuzu ramen', p:'$', w:'Citrus-bright shio broth — the kid-friendliest great ramen in town. Ticket machine ordering.'},
  {n:'Ginza no Steak', c:'Wagyu teppanyaki', p:'$$$$', w:'A5 wagyu theater; kids 6+ welcome. Lunch course halves the price.'},
  {n:'Ichiran', c:'Tonkotsu ramen', p:'$', w:'Solo “concentration booths” — the ordering experience the girls will retell forever.'},
  {n:'Ekibenya Matsuri', c:'Bento', p:'$', w:'200+ ekiben at Tokyo Station — buy four, eat them passing Mt. Fuji.'},
  {n:'Konbini breakfasts', c:'7-Eleven/Lawson', p:'$', w:'Tamago sando, onigiri, strawberry sandwiches. The daily draft ritual.'},
  {n:'Gyoza Dog + park snacks', c:'TDS icons', p:'$', w:'Mysterious Island’s gyoza sausage bun; Little Green Men mochi; rotating popcorn flavors.'},
 ],
 logistics:[
  'Arrive HND (not NRT): Limousine Bus direct to Disney hotels ¥1,000/¥500, ~35 min, last ~7 PM.',
  'Suica in phone wallets (adult); physical child-fare card for River from JR East. Works nationwide incl. Kyoto.',
  'No JR Pass — it lost the math in 2023. Buy the one Shinkansen leg via SmartEX.',
  'Shinkansen Jun 4: Nozomi ~2h15m; big bags need the free-but-limited oversized-baggage seats OR takkyubin forwarding (~¥2,000/bag, drop by Jun 3 morning).',
  'Rush hour 7:30–9:00 AM: avoid with kids. Google Maps is excellent here.',
 ],
 etiquette:['Trains are silent — no calls, no eating (Shinkansen excepted, where eating is the tradition).','Stand LEFT on Tokyo escalators.','No public trash cans — carry a bag.','No tipping, ever.'],
 flags:['Park tickets: 60-day drop (~Apr 1–3) — app + account + card ready.','Pokémon Café: 31-day 6 PM JST drop, gone in seconds.','Shibuya Sky sunset: exactly 14 days out, midnight JST.','Fantasy Springs is walk-in now; Priority Pass is dead — budget DPA ¥1,500–2,000/ride.','Space Mountain: assume closed (2027 rebuild).']},

kyo: {
 dining:[
  {n:'Gion Karyo', c:'Kaiseki', p:'$$$$', w:'The trip’s splurge — family-welcoming kaiseki, kids 10+ admitted. Book weeks ahead.'},
  {n:'Okutan Nanzenji', c:'Yudofu', p:'$$$', w:'Tofu hot-pot in a garden, serving since 1635.'},
  {n:'Musashi Sushi', c:'Conveyor', p:'$', w:'The first-night decompress and any-night kid backup.'},
  {n:'Kyoto Ramen Koji', c:'Ramen hall', p:'$', w:'Eight regional ramen shops, Kyoto Station 10F — rain-proof.'},
  {n:'Saryo Tsujiri', c:'Matcha parfaits', p:'$', w:'THE Gion matcha parfait; off-peak beats the 30-min line.'},
  {n:'Nishiki Market', c:'Graze', p:'$', w:'Tamagoyaki skewers, mochi, tako-tamago dares. Eat at the stall, not walking.'},
 ],
 logistics:[
  'Skip city buses (tourist crush) — subway + JR + Keihan + taxis. A cab for 4 often beats 4 bus fares.',
  'Fushimi Inari: JR Nara Line, 2 stops, 5 min. Arashiyama: JR Sagano ~15 min.',
  'Cash ¥20,000–30,000: monkey park and small shops are cash-only.',
  'Jun 7 exit: bags by 3:30 PM → Haruka ~4:45 (¥3,570 reserved) → KIX by 6:15 → ~9 PM flight to Honolulu.',
  'Tsuyu (rainy season) statistically starts ~Jun 6–7: compact umbrellas, quick-dry shoes, indoor list ready.',
 ],
 etiquette:['Shrines: purify at the temizuya, ¥5 coin, two bows–two claps–one bow (no claps at Buddhist temples).','Shoes off where marked — wear slip-ons.','Gion: public streets only; never photograph geiko/maiko without permission (posted fines).','Quiet voices in halls; path edges on crowded stretches.'],
 flags:['Gion Karyo + tea ceremony + wagashi class + kimono rental all need advance booking (2–4 weeks).','Firefly walks are weather-dependent — two evening windows built in.','Check JMA forecast ~1 week out to pick the indoor-swap day.']},

hi: {
 dining:[
  {n:'Waiola Shave Ice', c:'Shave ice', p:'$', w:'Cloud-fine ice since 1940 — the locals’ pick (Island Vintage = walkable fallback).'},
  {n:'Maguro Brothers', c:'Poke', p:'$$', w:'Ex-Tsukiji fishmongers picking fish at the Honolulu auction — the perfect Japan callback.'},
  {n:'Waikiki Garlic Shack', c:'Garlic shrimp', p:'$$', w:'North-Shore-style shrimp plates without leaving Waikiki.'},
  {n:'Duke’s Waikiki', c:'Beachfront American', p:'$$$', w:'ON the sand, live music at sunset, hula pie. Reserve early seating well ahead.'},
 ],
 logistics:[
  'HNL→Waikiki: XL rideshare or flat-rate taxi (~$30–45 for 4 + luggage). NO rental car — everything is walkable or a cheap Uber; parking runs $40–60/night.',
  'Diamond Head: out-of-state visitors MUST reserve timed entry ($5/pp); 6 AM slots sell out in minutes when the window opens.',
  'Jun 9: HNL→PHX ~6 hrs; Phoenix is 3 hours ahead. Morning departure lands by dinner.',
  'Reef-safe sunscreen only — Hawai‘i law.',
 ],
 etiquette:['Honu (sea turtles): 10 feet minimum — it’s the law.','Aloha and mahalo are used, not decorative.'],
 flags:['Diamond Head booking window: 14 vs 30 days conflicting — check dlnr.hawaii.gov in May.','Duke’s dinner: reserve when flights firm.','King Kamehameha events land Jun 11–12 — just after departure; verify spring 2027.']},
};

/* ---------------- Disney strategy pages ---------------- */
const PARKS = [
{id:'adv', em:'🚢', short:'The Ship', name:'Disney Adventure', where:'Sails from Singapore', days:'May 20–24 · 4 nights at sea',
 verdict:'The ship IS the destination — zero ports. Pace like a resort.',
 access:{label:'What to book & when', body:'Platinum 120-day window (~Jan 20): Palo, Mike & Sulley’s, Bibbidi Bobbidi, Royal Tea. At 30 days: check-in + earliest Port Arrival Time. The MINUTE you board: Ironcycle reservation in-app, then the fireworks dessert package.'},
 rope:['Board at your PAT (early as possible) — not hours before.','App the second you’re aboard: Ironcycle → fireworks package → karaoke slots.','Rides at Marvel Landing at opening; indoor afternoons (equatorial heat).','Theatre 30 min early; Garden Stage even earlier or catch a repeat.'],
 must:['Ironcycle Test Run — first coaster at sea','“The Lion King: Celebration in the Sky” fireworks','“Remember” (WALL-E & EVE musical)','San Fransokyo Street + free boba','Mickey & friends at the Club restaurants'],
 skip:['Room service (now $5 + 18% — the door-hanger breakfast is still free)','Chasing every Garden Stage show from bad sightlines','Arriving at the port hours early'],
 eats:['Mowgli’s Eatery (Indian) + Gramma Tala’s (Pacific) — best quick service','Bewitching Boba — free bubble tea','Palo = best-value splurge aboard'],
 facts:['Began life as the Global Dream; Disney bought the unfinished hull in 2022','~208,000 tons — 2.5× the Wonder','Fireworks narrated by Shah Rukh Khan','First Disney “castle” at sea · Deadpool’s only DCL show appearance']},

{id:'hkdl', em:'🏰', short:'Hong Kong', name:'Hong Kong Disneyland', where:'Lantau Island', days:'May 25–26 · 1.5 park days',
 verdict:'Smallest castle park, biggest character warmth. Shows are the differentiator — don’t skip them for re-rides.',
 access:{label:'Premier Access verdict', body:'SKIP the bundle — late-May weekdays are the year’s quietest. If Frozen Ever After spikes, buy that single ride in-app (HK$89–129) and nothing else.'},
 rope:['Staged opening: Main St + World of Frozen first → Tomorrowland/Adventureland at official open → Mystic Point/Grizzly/Toy Story +30 min.','Frozen Ever After → Oaken’s Sleighs in the first 30 min.','Let the third-drop crowd rush Grizzly; take Mystic Manor ~1 hr after its land opens (walk-on), ride twice.','Momentous: mid-Main-Street, 30–40 min early.'],
 must:['Mystic Manor — exists nowhere else on Earth','World of Frozen','Momentous nighttime spectacular','Fairy Tale Forest (underrated gem)','Duffy & Friends egg tarts + LinaBell culture'],
 skip:['Premier Access bundle (this week)','The turkey leg (skippable)','Midday It’s a Small World queue'],
 eats:['Plaza Inn dim sum','Duffy egg tarts in paper boats (7 colors)','Crystal Lotus character dim sum (hotel, pre-booked)','Explorer’s Club semi-buffet = reserved Momentous viewing'],
 facts:['Castle of Magical Dreams honors 13 princesses — the only one','Mystic Manor has no track and no seatbelt-drop — trackless magic','The resort MTR line has Mickey-shaped windows']},

{id:'shdl', em:'🐭', short:'Shanghai', name:'Shanghai Disneyland', where:'Pudong', days:'May 28–29 · 2 park days',
 verdict:'Home of Disney’s best dark ride (Pirates), the original TRON, and the world’s only Zootopia land.',
 access:{label:'Premier Access verdict', body:'Friday: rope-drop + at most one single DPA. Saturday: BUY THE BUNDLE (¥890–1,400/person, drops ~10 days out, sells out) + Early Park Entry passes. Real-name tickets — passports at the gate.'},
 rope:['Arrive 60–75 min early — security X-rays every bag.','Zootopia first (or grab its Standby Pass in-app at open) → TRON → Soaring → Pirates before lunch.','Camp Discovery ropes course mid-afternoon (low waits).','TRON again after dark — a different ride at night.'],
 must:['Pirates: Battle for the Sunken Treasure','TRON Lightcycle (original, at night)','Zootopia: Hot Pursuit','Camp Discovery Challenge Trails','Enchanted Storybook Castle + ILLUMINATE'],
 skip:['Dumbo-tier carnival rides (identical everywhere)','Once Upon a Time walkthrough if time-pressed','“We have Pirates at home” thinking — you don’t'],
 eats:['Hoisin turkey leg (2-per-person limit — the longest snack line)','Mickey pizza at Pinocchio Village Kitchen','In-park xiaolongbao (surprisingly good)','Steak popcorn + collectible bucket'],
 facts:['The castle is the biggest ever built — and represents ALL the princesses','TRON here was the first (2016); Florida copied it','Zootopia land exists only here (2023)']},

{id:'tdl', em:'🎠', short:'Disneyland', name:'Tokyo Disneyland', where:'Maihama', days:'June 1 · 1 park day',
 verdict:'One low-crowd day covers TDL’s unique bests — Space Mountain is mid-rebuild and Buzz is gone.',
 access:{label:'Premier Access verdict', body:'Free Priority Pass died Aug 2026. Rope-drop Pooh’s Hunny Hunt (NOT on DPA), then buy DPA for Beauty and the Beast (¥2,000) if waits spike. Tickets are date-specific, app-only, 60-day drop.'},
 rope:['Gates 45–60 min before posted open (they often open early).','Pooh’s Hunny Hunt first — trackless, best-in-class, no paid skip exists.','Enchanted Tale of Beauty and the Beast second (or DPA it).','Electrical Parade Dreamlights at night — rain cancels it outright, so clear night = priority.'],
 must:['Pooh’s Hunny Hunt','Enchanted Tale of Beauty and the Beast','Electrical Parade Dreamlights','Baymax Happy Ride (the vibes)','Little Green Men mochi'],
 skip:['Space Mountain (closed, 2027 rebuild)','Monsters Inc if lines spike (clone-adjacent)','US-clone coasters over Japan-exclusives'],
 eats:['Little Green Men mochi','Teriyaki chicken leg','Mike Melon Bread','Popcorn flavors + collectible buckets'],
 facts:['Tokyo’s parks aren’t owned by Disney — Oriental Land Company licenses them (and spends MORE)','The Shinkansen-grade cleanliness is real: staff sweep with dustpans mid-parade','Popcorn flavors rotate by cart location — collecting is the game']},

{id:'tds', em:'🌋', short:'DisneySea', name:'Tokyo DisneySea', where:'Maihama', days:'May 31 + June 2 · 2 park days',
 verdict:'The consensus best Disney park on Earth. Its size is the trap — plan geographically.',
 access:{label:'Premier Access verdict', body:'Fantasy Springs is now free walk-in — rope-drop Frozen Journey standby, DPA Rapunzel (¥2,000) as insurance. Believe! viewing DPA (¥2,500) beats a 90-min ground stake if the budget allows. Total family DPA budget ~¥16–24k across 3 park days transforms the trip.'},
 rope:['Gates 60+ min before posted open — this park’s lines form earliest.','Day 1: Fantasy Springs sweep (Frozen → Rapunzel → Peter Pan).','Day 2: Soaring: Fantastic Flight at open, then favorites.','One parent buys DPA in-app at open while the other walks the family to ride #1.'],
 must:['Anna & Elsa’s Frozen Journey','Journey to the Center of the Earth','Soaring: Fantastic Flight (that preshow)','Tower of Terror (unique Hightower story)','Believe! Sea of Dreams','Sindbad’s Storybook Voyage (walk-on sleeper hit)'],
 skip:['Toy Story Mania unless short (US clone)','Tinker Bell’s Busy Buggies (kiddie)','Criss-crossing the park — it’s enormous'],
 eats:['Gyoza Dog at Mysterious Island — THE icon','Ukiwa Bun (shrimp)','Little Green Men mochi','Popcorn Passport: 5 flavors across 3 days'],
 facts:['Built around myths of the sea — its icon is a volcano that erupts','Duffy was BORN at TDS; the Duffy universe is Japan’s park religion','Fantasy Springs (2024) was the biggest park expansion in TDR history']},
];
