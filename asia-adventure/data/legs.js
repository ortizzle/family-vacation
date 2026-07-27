'use strict';
/* Asia Adventure 2027 — itinerary data. All content sourced from research/ briefs.
   Times are local to each leg. tags: [cssClass, label]. fork: evening decision presented, never auto-picked. */

const LEGS = [
  {id:'sg',  em:'🦁', name:'Singapore', ink:'--stamp-sg',  tz:'Asia/Singapore',    start:'2027-05-18', end:'2027-05-19', port:'SIN'},
  {id:'sea', em:'🚢', name:'At Sea',    ink:'--stamp-sea', tz:'Asia/Singapore',    start:'2027-05-20', end:'2027-05-23', port:'DCL'},
  {id:'hk',  em:'🐉', name:'Hong Kong', ink:'--stamp-hk',  tz:'Asia/Hong_Kong',    start:'2027-05-24', end:'2027-05-26', port:'HKG'},
  {id:'sh',  em:'🏮', name:'Shanghai',  ink:'--stamp-cn',  tz:'Asia/Shanghai',     start:'2027-05-27', end:'2027-05-29', port:'PVG'},
  {id:'tyo', em:'🗼', name:'Tokyo',     ink:'--stamp-jp',  tz:'Asia/Tokyo',        start:'2027-05-30', end:'2027-06-03', port:'TYO'},
  {id:'kyo', em:'⛩', name:'Kyoto',     ink:'--stamp-ky',  tz:'Asia/Tokyo',        start:'2027-06-04', end:'2027-06-07', port:'KYO'},
  {id:'hi',  em:'🌺', name:'Oahu',      ink:'--stamp-hi',  tz:'Pacific/Honolulu',  start:'2027-06-07', end:'2027-06-09', port:'HNL'},
];

const DAYS = [
/* ---------------- SINGAPORE ---------------- */
{id:'sg-d1', leg:'sg', date:'2027-05-18', dow:'Tue', dnum:'18', short:'Arrive',
 title:'Touchdown — The Adventure Begins', sub:'Jet-lagged soft landing · Marina Bay hotel (booked)',
 stamp:{arr:'Admitted · Republic of Singapore', name:'Singapore', wing:'🦁'},
 events:[
  {t:'EVENING', n:'Land at Changi Airport', d:'Immigration, bags, deep breath. You made it across the Pacific.', tags:[]},
  {t:'+30 MIN', n:'Jewel Rain Vortex — if legs allow', d:'World’s tallest indoor waterfall (40m), inside your arrival airport, light shows hourly 7:30–10:30 PM. This is the ONLY window — you leave Singapore by ship, not plane. 30–45 min max; skip guilt-free if anyone is melting down.', tags:[['tag-tip','Only chance']], milestone:true},
  {t:'NEXT', n:'Grab to Marina Bay hotel', d:'~20 min at night, ~S$25–45. Skip the MRT tonight — four people, luggage, jet lag.', tags:[['tag-leave','Grab, not train']]},
  {t:'DINNER', n:'Rasapura Masters food court', d:'Inside The Shoppes at MBS, open 24/7 — the jet-lag-proof dinner. Everyone picks their own stall.', tags:[['tag-food','Kid-safe']]},
  {t:'CRASH', n:'Sleep. Tomorrow is the one full Singapore day.', d:'Kids wide awake at 5 AM is likely (Arizona is 15h behind) — that’s fine, the outdoor gardens open at 5 AM.', tags:[]},
 ],
 note:'Watch Crazy Rich Asians on the plane — tomorrow you walk through its filming locations.'},

{id:'sg-d2', leg:'sg', date:'2027-05-19', dow:'Wed', dnum:'19', short:'Marina Bay',
 title:'The Marina Bay Loop', sub:'Everything today is inside a one-mile waterfront circle',
 events:[
  {t:'8:00 AM', n:'Kaya toast breakfast — Ya Kun', d:'The national breakfast: coconut-jam toast dipped in soft eggs + Milo/kopi. Under ~S$8 each. Quest: pronounce “kaya.”', tags:[['tag-food','🥇 Local icon'],['tag-quest','🎖 Quest']]},
  {t:'9:00 AM', n:'Merlion Park + bay loop walk', d:'The 8.6m half-lion half-fish, spouting at Marina Bay Sands. Do the forced-perspective “drinking the spout” photo; find the 2m Merlion cub behind it.', tags:[['tag-quest','🎖 Trophy shot']]},
  {t:'11:30 AM', n:'Cloud Forest + Flower Dome', d:'Air-conditioned Avatar-world with a 35m indoor waterfall — timed to dodge the 1 PM heat and thunderstorm window. 2.5–3 hrs both domes. Timed tickets booked a day or two ahead.', tags:[['tag-tip','A/C strategy']], milestone:true},
  {t:'3:00 PM', n:'Hotel pool / rest block', d:'Non-negotiable on day 1 of a 23-day trip. Pace beats pace-counting.', tags:[]},
  {t:'6:00 PM', n:'Dinner — pick your fork', d:'Splurge: Jumbo Seafood chili crab at Riverside Point (reserved ahead; fried mantou for dunking). Easy: Satay by the Bay inside the Gardens — dinner flows straight into the light show.', tags:[['tag-food','Fork']]},
  {t:'7:45 PM', n:'Garden Rhapsody under the Supertrees', d:'Free light-and-sound show — lie on the ground under the 50m trees. Count the Grove’s 12 Supertrees (18 exist in the Gardens — where are the others?).', tags:[['tag-show','⭐ Free spectacular']], milestone:true},
  {t:'9:00 PM', n:'Spectra water show — the ambitious add-on', d:'Free 15-min laser/fountain show at MBS Event Plaza. Doable after Rhapsody: 7:45 show → 15-min walk over. Skip if the girls are fading — tomorrow is embark day.', tags:[['tag-show','Optional']]},
 ],
 fork:{title:'Stay late or head home?', a:'Rhapsody 7:45 + Spectra 9:00 = the full Marina Bay night. In bed ~10:15.', b:'Rhapsody only — in bed by 9. Tomorrow the ship won’t care, but Day 3 legs might.'},
 note:'MRT quest today: each girl taps her own card, no eating aboard — S$500 fine adds drama. Chope a hawker table with a tissue packet like a local.'},

/* ---------------- DISNEY ADVENTURE ---------------- */
{id:'sea-d1', leg:'sea', date:'2027-05-20', dow:'Thu', dnum:'20', short:'Embark',
 title:'Embark Day — Disney Adventure', sub:'Vesak Day in Singapore · the biggest ship in Disney’s fleet',
 stamp:{arr:'Boarded · Marina Bay Cruise Centre', name:'Disney Adventure', wing:'⚓'},
 events:[
  {t:'MORNING', n:'Slow breakfast + checkout', d:'It’s Vesak Day (public holiday) — breakfast spots run holiday hours; roads are calm.', tags:[]},
  {t:'PAT −30', n:'Grab to Marina Bay Cruise Centre', d:'Only ~2 miles / 5–10 min. Leave 30 min before your assigned Port Arrival Time. Luggage tags come at the terminal (not mailed) — bags reach the stateroom in ~30 min.', tags:[['tag-leave','⏱ Timed to PAT']]},
  {t:'ON BOARD', n:'⚡ FIRST MOVE: open the DCL app', d:'Book Ironcycle Test Run (first roller coaster at sea, 820+ ft) THE MINUTE you board — slots vanish instantly. Then grab the Dazzle & Delight fireworks dessert package if wanted. These are the two day-one sellouts.', tags:[['tag-leave','⚡ Do this first']], milestone:true},
  {t:'AFTERNOON', n:'Explore the 7 zones', d:'Imagination Garden (first Disney castle at sea), Marvel Landing, San Fransokyo Street (best-executed zone — Edge & Vibe clubs hide here), Toy Story Place pools, Wayfinder Bay, Town Square, Discovery Reef.', tags:[]},
  {t:'EVENING', n:'First rotation dinner + theatre', d:'Two rotation tracks exist (you’re assigned one — 3 of 6 restaurants). Mickey & friends appear at the “Club” restaurants. Arrive 30 min early for theatre seats.', tags:[['tag-food','Rotation 1/4']]},
 ],
 note:'Platinum perk already used: Palo Trattoria + Mike & Sulley’s were booked at the 120-day window. Free boba at Bewitching Boba is the family currency this week.'},

{id:'sea-d2', leg:'sea', date:'2027-05-21', dow:'Fri', dnum:'21', short:'Sea Day',
 title:'Sea Day I — Ride Day', sub:'All at sea · the ship IS the destination',
 events:[
  {t:'MORNING', n:'Marvel Landing at opening', d:'Ironcycle (if reserved), Pym Quantum Racers, Groot Galaxy Spin — shortest lines of the day. Pools before the equatorial noon heat.', tags:[['tag-tip','Beat the heat']]},
  {t:'MIDDAY', n:'Indoor block — San Fransokyo', d:'Big Hero Arcade, Baymax Cinemas, Alley Cat Café. Shade is scarce on deck; the ship’s A/C interior is the afternoon play.', tags:[]},
  {t:'AFTERNOON', n:'Kids-club split', d:'Sedona: Edge (11–14, self check-out). River: Oceaneer Club (she’s at the top of the 3–10 band — Imagineering Lab + Marvel WEB Workshop). Ask about sibling open-house hours so they can visit each other’s space.', tags:[]},
  {t:'EVENING', n:'Theatre: “Remember”', d:'The Adventure-exclusive WALL-E & EVE musical — the emotional flagship. Shows run ~30 min; go early for seats.', tags:[['tag-show','⭐ Ship exclusive']], milestone:true},
 ],
 note:'Garden Stage shows (Avengers Assemble! has Deadpool’s DCL debut) get crowded with bad sightlines — stake out early or catch a repeat.'},

{id:'sea-d3', leg:'sea', date:'2027-05-22', dow:'Sat', dnum:'22', short:'Sea Day',
 title:'Sea Day II — Fireworks Night?', sub:'Check the app: Lion King fireworks sail on select evenings',
 events:[
  {t:'MORNING', n:'Slides + splash — Toy Story Place', d:'Woody and Jessie’s Wild Slides, Sunnyside pool, jumbo screens. Morning = pre-heat, pre-crowd.', tags:[]},
  {t:'AFTERNOON', n:'Family competition block', d:'Duffy Discovery Quest scavenger activity, trivia, karaoke room (book early — high demand), Hiro Training Zone.', tags:[['tag-quest','🎖 Family points']]},
  {t:'DINNER', n:'Adults’ night option', d:'If Palo/Mike & Sulley’s landed tonight: girls eat with their clubs, parents get teppanyaki or Italian. Reviewers call both the ship’s best value.', tags:[['tag-food','Splurge']]},
  {t:'NIGHT', n:'“The Lion King: Celebration in the Sky”', d:'Fireworks at sea, narrated by Shah Rukh Khan, ranked among Disney’s best anywhere. Confirm which night in the app on day 1 and anchor the evening around it.', tags:[['tag-show','⭐ THE night']], milestone:true},
 ],
 note:'Quick-service is genuinely good (Mowgli’s Indian, Gramma Tala’s Pacific) — lunch there beats the buffet crush. Seating is tight at peak; eat at 11:30 or 1:30.'},

{id:'sea-d4', leg:'sea', date:'2027-05-23', dow:'Sun', dnum:'23', short:'Sea Day',
 title:'Sea Day III — Last Full Day', sub:'Re-rides, re-boba, pack tonight',
 events:[
  {t:'MORNING', n:'Everyone’s one-more-time list', d:'Re-ride favorites at opening; last pool block before the pack-up.', tags:[]},
  {t:'AFTERNOON', n:'Merch + Duffy economics', d:'First at-sea World of Disney + National Geographic store. Duffy & Friends merch here previews the Hong Kong obsession to come.', tags:[]},
  {t:'EVENING', n:'Final rotation + “Disney Seas the Adventure”', d:'Second theatre production if not yet seen.', tags:[['tag-show','Theatre']]},
  {t:'NIGHT', n:'Bags out + debark plan', d:'Express walk-off with own bags = earliest exit tomorrow. Target: off ship 7:30–8:30 AM, Grab to Changi (~25 min), noon-ish flight to Hong Kong.', tags:[['tag-leave','Pack tonight']]},
 ],
 note:'Journal night: four sea days, four favorite-moment entries. The Keepsake tab is waiting.'},

/* ---------------- HONG KONG ---------------- */
{id:'hk-d1', leg:'hk', date:'2027-05-24', dow:'Mon', dnum:'24', short:'Arrive',
 title:'Ship → Plane → Lantau', sub:'Debark 7:30 AM · SIN→HKG ~4 hrs · sleep at Explorers Lodge',
 stamp:{arr:'Admitted · Hong Kong SAR', name:'Hong Kong', wing:'🐉'},
 events:[
  {t:'7:30 AM', n:'Express walk-off, Changi-bound', d:'DCL rule honored at booking: flight departs after ~noon. SIN→HKG ≈ 3h45m.', tags:[['tag-leave','⏱ Travel day']]},
  {t:'~4:30 PM', n:'Land HKG → taxi to Disneyland Resort', d:'The genius of staying on Lantau: the park hotel is ~15 min from the airport (~HK$150). No cross-city schlep on a travel day.', tags:[['tag-tip','15-min transfer']]},
  {t:'5:30 PM', n:'Check in — Disney Explorers Lodge', d:'Home for 3 nights. Pool if energy allows; Momentous fireworks are visible from the grounds.', tags:[]},
  {t:'EVENING', n:'Easy resort dinner + early night', d:'Tomorrow is the headliner park day and gates reward the early. Dragon Wind or World of Color options at the Lodge.', tags:[['tag-food','Low-effort']]},
 ],
 note:'Get Octopus cards sorted tonight (mobile Octopus works instantly; child version for River has kid fares). City day uses them everywhere.'},

{id:'hk-d2', leg:'hk', date:'2027-05-25', dow:'Tue', dnum:'25', short:'Disney',
 title:'HKDL Park Day 1 — The Headliner Day', sub:'Low-crowd Tuesday · staged rope-drop plan in effect',
 events:[
  {t:'7:00 AM', n:'Big breakfast at the Lodge', d:'Lunch will be late. Fill water bottles — refill stations exist in-park.', tags:[]},
  {t:'8:30 AM', n:'Walk to the gates — priority entry lane', d:'HKDL opens in stages: Main Street + World of Frozen first, Tomorrowland/Adventureland at official open, Mystic Point/Grizzly/Toy Story +30 min.', tags:[['tag-leave','⏱ Leave by 8:30']]},
  {t:'OPEN', n:'Rope drop: World of Frozen', d:'Frozen Ever After → straight onto Wandering Oaken’s Sliding Sleighs. Both done in ~30 min at open; they hold the park’s longest lines all day.', tags:[['tag-tip','Strategy']], milestone:true},
  {t:'+75 MIN', n:'Mystic Manor ×2', d:'Exists nowhere else on Earth. Hit it ~1 hr after Mystic Point opens when the rope-drop wave has passed — walk-on. Ride twice; hunt the music-box-room Hidden Mickey.', tags:[['tag-quest','🎖 Hidden Mickey']], milestone:true},
  {t:'NEXT', n:'Big Grizzly Mountain', d:'Runaway mine coaster, single-digit May-Tuesday waits. River’s speed test.', tags:[]},
  {t:'12:30 PM', n:'Dim sum at Plaza Inn', d:'Duffy & Friends egg tarts in paper boats for dessert — 7 character colors. Claim yours.', tags:[['tag-food','🥟 Icon']]},
  {t:'2:00 PM', n:'A/C recharge: PhilharMagic + Fairy Tale Forest', d:'88°F and humid says slow down. Fairy Tale Forest’s dioramas are the park’s underrated gem.', tags:[['tag-tip','Heat plan']]},
  {t:'6:30 PM', n:'Dinner in park', d:'Explorer’s Club semi-buffet includes reserved Momentous viewing — decide by lunch.', tags:[['tag-food','Fork']]},
  {t:'8:00 PM', n:'Momentous', d:'Fireworks + drones + castle projections on the only castle honoring 13 princesses at once. Stake mid-Main-Street 30–40 min early.', tags:[['tag-show','⭐ Spectacular']], milestone:true},
 ],
 note:'Skip the Premier Access bundle — May Tuesdays run walk-on. If Frozen spikes, buy that single ride in-app and nothing else.'},

{id:'hk-d3', leg:'hk', date:'2027-05-26', dow:'Wed', dnum:'26', short:'Disney+City',
 title:'HKDL Half Day + Kowloon Night', sub:'Morning re-rides · afternoon across the harbor',
 events:[
  {t:'OPEN', n:'Frozen re-ride + character morning', d:'LinaBell and the Duffy universe are an HK phenomenon — meet lines are long but interactions run warmer and longer than US parks. Finish the Duffy Census quest.', tags:[['tag-quest','🎖 Duffy Census']]},
  {t:'11:00 AM', n:'Sword in the Stone, merch pass, last snacks', d:'Duffy popcorn bucket, LinaBell ice-cream bar. HKDL exclusives barely exist in US parks — this is the buy window.', tags:[]},
  {t:'1:00 PM', n:'MTR to Tsim Sha Tsui', d:'Disneyland Resort Line (Mickey windows + Mickey grab-handles) → Sunny Bay → TST, ~45 min. Bags stay at the Lodge — you’re back tonight.', tags:[['tag-leave','⏱ Depart 1:00']]},
  {t:'2:00 PM', n:'Star Ferry + your city fork', d:'Cross the harbor on the 1888 ferry (costs less than a gumball). Then EITHER Peak Tram (book online, right side up) OR — if it’s crystal clear — save the Peak and do the TST museums/promenade slow.', tags:[['tag-tip','Weather call']]},
  {t:'5:30 PM', n:'Egg waffles at Mammy Pancake', d:'Michelin street-food list six years running, ~HK$20.', tags:[['tag-food','🧇 Icon']]},
  {t:'6:30 PM', n:'Avenue of Stars at dusk', d:'Bruce Lee statue + handprints + the skyline igniting across the water. The nightly Symphony of Lights show is retiring, but this view needs no soundtrack.', tags:[['tag-show','Golden hour']], milestone:true},
  {t:'7:30 PM', n:'Temple Street Night Market', d:'Curry fish balls, dragon-beard candy, lantern photo ops, fortune tellers. Teen energy, one MTR stop.', tags:[['tag-food','Graze dinner']]},
  {t:'9:00 PM', n:'MTR home to the Lodge', d:'~45 min back to Lantau. Pack tonight — Shanghai flight tomorrow.', tags:[['tag-leave','⏱ Last call 9:00']]},
 ],
 fork:{title:'The Peak or the promenade?', a:'Peak Tram + Sky Terrace: THE view, 2.5 hrs, weather-dependent, pre-book.', b:'Skip the Peak: slow TST — Kowloon Park flamingos, M+ museum roof, longer market time. Zero risk of clouds eating the view.'},
 note:'Dim Sum Passport quest runs all day: 6 different items tried across the trip, each girl orders one herself.'},

/* ---------------- SHANGHAI ---------------- */
{id:'sh-d1', leg:'sh', date:'2027-05-27', dow:'Thu', dnum:'27', short:'Arrive',
 title:'Into the Mainland — Maglev Day', sub:'240-hour visa-free transit · Toy Story Hotel · Bund at night',
 stamp:{arr:'Admitted · 240-hr Transit · PRC', name:'Shanghai', wing:'🏮'},
 events:[
  {t:'MORNING', n:'Fly HKG → Shanghai (~2.5 hr)', d:'Carry the printed 240-hour transit policy + Tokyo onward itinerary for check-in. At arrival use the dedicated transit-visa lane — budget 30–60 min of paperwork.', tags:[['tag-leave','📄 Documents ready']]},
  {t:'ARRIVAL', n:'If PVG: ride the Maglev', d:'8 minutes at up to 300 km/h — photograph the speedometer. The fastest airport train on Earth, and River’s favorite “ride” that isn’t at Disney.', tags:[['tag-quest','🎖 Speedometer']], milestone:true},
  {t:'3:00 PM', n:'Check in — Toy Story Hotel', d:'Official Disney, Andy’s-room theming, Line 11 + shuttle to the gates. Home for 3 nights.', tags:[]},
  {t:'5:00 PM', n:'Metro to the Bund', d:'The skyline reveal: name all three giants — the Bottle Opener, the Twisty One, the Pearl. Lights until 10 PM.', tags:[['tag-show','⭐ Skyline']], milestone:true},
  {t:'6:30 PM', n:'Dinner — Lost Heaven on the Bund', d:'Yunnan folk cuisine in a gorgeous room; Dali chicken and banana-leaf cod have broad kid appeal. Booked ahead. Walk the lit Bund after.', tags:[['tag-food','Splurge']]},
 ],
 note:'Phones ready before landing: travel eSIM ON (bypasses the firewall), Alipay verified, Didi installed, SDL app logged in. Google is dark here without the eSIM.'},

{id:'sh-d2', leg:'sh', date:'2027-05-28', dow:'Fri', dnum:'28', short:'Disney',
 title:'SDL Park Day 1 — The Unique-to-Earth Day', sub:'Friday · rope-drop discipline · no bundle needed today',
 events:[
  {t:'7:00 AM', n:'Early start — security is slow', d:'Arrive 60–75 min before open; every guest gets bag X-ray. Passports required at the gate (real-name tickets).', tags:[['tag-leave','⏱ Gates −75 min']]},
  {t:'OPEN', n:'Zootopia: Hot Pursuit first', d:'World’s only Zootopia land; trackless dark ride; the park’s longest line. If it’s running Standby Pass, grab that in-app at rope drop instead.', tags:[['tag-tip','Strategy']], milestone:true},
  {t:'NEXT', n:'TRON Lightcycle Power Run', d:'The original, faster than Florida’s. You’ll ride it again at night — different ride entirely.', tags:[], milestone:true},
  {t:'THEN', n:'Pirates: Battle for the Sunken Treasure', d:'Widely called the best dark ride Disney has built anywhere. Massive capacity keeps waits moderate. Do NOT “we have Pirates at home” this — you don’t.', tags:[['tag-tip','Must-ride']], milestone:true},
  {t:'12:00 PM', n:'Lunch + the hoisin turkey leg line', d:'The famous glazed turkey leg (2-per-person limit). Mickey pizza at Pinocchio Village Kitchen as the kid-certain backup.', tags:[['tag-food','🍗 Icon']]},
  {t:'2:30 PM', n:'Camp Discovery Challenge Trails', d:'Harnessed ropes course over Adventure Isle — unique to Shanghai, low waits, both girls clear the height bar. Budget an hour of triumph.', tags:[['tag-quest','🎖 Ropes course']]},
  {t:'5:00 PM', n:'Enchanted Storybook Castle', d:'The biggest Disney castle ever — walkthrough + Voyage to the Crystal Grotto boat beneath it.', tags:[]},
  {t:'NIGHT', n:'ILLUMINATE + TRON in the dark', d:'Castle show, then one last Lightcycle run. Line 11 last train ~10:30 PM; the hotel shuttle is closer.', tags:[['tag-show','⭐ Spectacular']]},
 ],
 note:'Queue culture is real: guard your spot politely, hold hands at rope drop, personal space runs smaller. Portable battery mandatory — the app eats phones.'},

{id:'sh-d3', leg:'sh', date:'2027-05-29', dow:'Sat', dnum:'29', short:'Disney',
 title:'SDL Park Day 2 — Saturday, Armed with DPA', sub:'Premier Access bundle bought ~10 days ago · Early Park Entry',
 events:[
  {t:'EARLY', n:'Early Park Entry pass', d:'In one hour before official open — Saturday is the busiest day (120–150 min headliner waits later). The bundle + early entry turns it into a victory lap.', tags:[['tag-leave','⏱ Early entry']]},
  {t:'MORNING', n:'DPA sweep of yesterday’s favorites', d:'Soaring Over the Horizon (the queue itself is art), Peter Pan upgraded, Roaring Rapids (ponchos — you WILL be soaked).', tags:[['tag-tip','Bundle day']]},
  {t:'MIDDAY', n:'Character meal — Lumière’s Kitchen', d:'Book via app. Food is cheap by US Disney standards; popcorn flavors here get weird (steak!) — collect a bucket.', tags:[['tag-food','Characters']]},
  {t:'AFTERNOON', n:'Yu Garden run — the escape hatch', d:'OPTIONAL fork: if the park is conquered by 3 PM, Line 11→10 to Yu Garden (Ming dynasty, 400+ years) + Nanxiang soup buns — the giant crab-soup bun with a straw is a spectacle. Back for fireworks or stay city-side for the river cruise.', tags:[['tag-tip','Fork']]},
  {t:'EVENING', n:'Xiaolongbao showdown, round 2', d:'Quest: rate SDL’s in-park xiaolongbao vs the city’s. Which soup wins?', tags:[['tag-quest','🎖 Dumpling Detective'],['tag-food','🥟']]},
  {t:'NIGHT', n:'Pack + set the Tokyo alarm', d:'Sunday: PVG exit lines run long — leave the hotel 3.5 hrs before the flight.', tags:[['tag-leave','Pack tonight']]},
 ],
 fork:{title:'Full park day or Yu Garden escape?', a:'Stay: re-rides with DPA, ILLUMINATE again, zero transit.', b:'Escape at 3 PM: Yu Garden + Nanxiang buns + Bund river cruise (~¥120, 50 min) — the city’s greatest hour, back late.'},
 note:'Duoyun Books — the world’s highest bookstore, floor 52 of Shanghai Tower — needs a free reservation days ahead. If the girls earned a book, this is where it’s bought.'},

/* ---------------- TOKYO ---------------- */
{id:'tyo-d1', leg:'tyo', date:'2027-05-30', dow:'Sun', dnum:'30', short:'Arrive',
 title:'Konnichiwa Tokyo — Maihama Base', sub:'PVG → HND ~3 hrs · Disney hotel nights begin',
 stamp:{arr:'Admitted · Japan', name:'Tokyo', wing:'🗼'},
 events:[
  {t:'MORNING', n:'PVG exit + fly to Haneda', d:'Leave hotel 3.5 hrs early — transit-visa exit lines run long Sunday mornings. HND lands you 30–40 min from everything; NRT would cost an hour more.', tags:[['tag-leave','⏱ PVG buffer']]},
  {t:'ARRIVAL', n:'Suica setup + Limousine Bus to Maihama', d:'Mobile Suica for three phones; physical child-fare card for River at the JR East counter. Then the direct bus to the Disney hotels (¥1,000/500, ~35 min, last bus ~7 PM).', tags:[['tag-tip','IC cards']]},
  {t:'LATE PM', n:'Check in — Maihama Disney hotel', d:'Three nights beside the parks. Ikspiari mall next door for dinner + tomorrow’s konbini breakfast run.', tags:[]},
  {t:'EVENING', n:'Konbini Breakfast Draft — round 1 purchase', d:'7-Eleven: tomorrow’s gate-line breakfast. Tamago sando is a rite of passage. Early night — DisneySea opens early and so do you.', tags:[['tag-food','🎖 Draft'],['tag-quest','Quest']]},
 ],
 note:'App check tonight: park tickets loaded (bought at the 60-day window), Disney account logged in, payment card attached for the morning DPA race.'},

{id:'tyo-d2', leg:'tyo', date:'2027-05-31', dow:'Mon', dnum:'31', short:'DisneySea',
 title:'DisneySea Day 1 — Fantasy Springs', sub:'The world’s most beautiful park · low-season Monday',
 events:[
  {t:'7:45 AM', n:'Gates 60+ min before posted open', d:'Posted 9:00 often really opens 8:15–8:45. One parent’s phone buys DPA at open (party grouped in app); the other leads the walk.', tags:[['tag-leave','⏱ Gates −60']]},
  {t:'OPEN', n:'Anna & Elsa’s Frozen Journey — standby', d:'Fantasy Springs is now walk-in (no entry lottery). Rope-drop Frozen standby; buy DPA for Rapunzel’s Lantern Festival (¥2,000) as insurance.', tags:[['tag-tip','Strategy']], milestone:true},
  {t:'NEXT', n:'Rapunzel + Peter Pan’s Never Land', d:'The lantern boat ride is the gorgeous one; Peter Pan is the 3D epic. Tinker Bell’s Busy Buggies is skippable kiddie fare.', tags:[]},
  {t:'12:30 PM', n:'Gyoza Dog at Mysterious Island', d:'THE DisneySea snack icon. Popcorn Passport quest opens: flavors rotate by cart — soy-sauce butter, curry, garlic shrimp, matcha-white-choc…', tags:[['tag-food','🥟 Icon'],['tag-quest','🎖 Popcorn']]},
  {t:'AFTERNOON', n:'Journey to the Center of the Earth + Tower of Terror', d:'TDS’s signature drop-dark-ride under the volcano, and the unique “Hightower” Tower story. Sindbad’s Storybook Voyage = the walk-on sleeper hit.', tags:[], milestone:true},
  {t:'EVENING', n:'Believe! Sea of Dreams', d:'Harbor spectacular starring Peter Pan, Moana, Rapunzel, Elsa. Stake harbor spots 60–90 min early or DPA viewing (¥2,500).', tags:[['tag-show','⭐ Spectacular']], milestone:true},
 ],
 note:'#1 community mistake: underestimating TDS’s size. Plan geographically, don’t criss-cross. Duffy is FROM here — the plush budget activates today.'},

{id:'tyo-d3', leg:'tyo', date:'2027-06-01', dow:'Tue', dnum:'1', short:'Disneyland',
 title:'Tokyo Disneyland Day', sub:'Pooh’s Hunny Hunt · Beauty and the Beast · Electrical Parade',
 events:[
  {t:'8:00 AM', n:'Gates 45–60 early', d:'Space Mountain is mid-rebuild (assume closed) and Buzz is gone — one low-crowd day covers TDL’s unique bests comfortably.', tags:[['tag-leave','⏱ Gates −45']]},
  {t:'OPEN', n:'Pooh’s Hunny Hunt first', d:'Trackless, best-in-class, NOT on Premier Access — rope-drop it or eat the line. Then Enchanted Tale of Beauty and the Beast (DPA-worthy if waits spike).', tags:[['tag-tip','Strategy']], milestone:true},
  {t:'MIDDAY', n:'Baymax Happy Ride + Little Green Men mochi', d:'The dango icon. World Bazaar’s free-roaming characters at open beat any queue.', tags:[['tag-food','🍡 Icon']]},
  {t:'AFTERNOON', n:'Big Band Beat lottery + castle', d:'The TDS/TDL stage shows out-class US parks; check Entry Request in-app. Cinderella’s castle walkthrough on a low day.', tags:[]},
  {t:'8:00 PM', n:'Electrical Parade Dreamlights', d:'Nightly, and rain simply cancels it (its rain-backup retired) — clear-sky night = go. Fireworks after.', tags:[['tag-show','⭐ Parade']], milestone:true},
 ],
 note:'Snack tour: teriyaki chicken leg, flavored churros, Mike Melon Bread. Merch is cheaper than US parks; Bon Voyage at Maihama Station is the last-chance megastore.'},

{id:'tyo-d4', leg:'tyo', date:'2027-06-02', dow:'Wed', dnum:'2', short:'DisneySea',
 title:'DisneySea Day 2 → City Move', sub:'Morning victory lap · afternoon hotel switch to Tokyo Station',
 events:[
  {t:'OPEN', n:'Soaring: Fantastic Flight + favorites', d:'The superior Soarin’ (that preshow!). Re-ride the family’s podium picks; finish the Duffy Detective quest at Village Greeting Place.', tags:[['tag-quest','🎖 Duffy finale']], milestone:true},
  {t:'1:00 PM', n:'Exit + luggage move to Mimaru Tokyo Station', d:'Keiyo Line ~15 min. Apartment hotel built for families of four. (Pro move: forward big bags by takkyubin and carry daypacks.)', tags:[['tag-leave','⏱ Move day']]},
  {t:'4:00 PM', n:'Character Street, Tokyo Station', d:'Underground alley of character shops — the Ghibli merch fix at Donguri Kyowakoku (museum skipped by choice, zero regrets).', tags:[]},
  {t:'6:00 PM', n:'Dinner — Kura Sushi Global Flagship', d:'Conveyor sushi where every 5 plates triggers the Bikkura-Pon gacha game. Dinner IS the game.', tags:[['tag-food','🍣 Kid heaven']]},
 ],
 note:'Tonight’s homework: confirm Shibuya Sky tickets for tomorrow (bought at the 14-day drop), charge everything, journal the park scores.'},

{id:'tyo-d5', leg:'tyo', date:'2027-06-03', dow:'Thu', dnum:'3', short:'Shibuya',
 title:'Shibuya–Harajuku — The Kawaii Day', sub:'Shrine calm → Takeshita chaos → sunset above the Scramble',
 events:[
  {t:'9:00 AM', n:'Meiji Shrine', d:'Forest silence in the city’s heart: giant torii, sake barrels, temple-manners practice for Kyoto. 45 min.', tags:[]},
  {t:'10:30 AM', n:'Takeshita Street, Harajuku', d:'Crepes, purikura photo booths, kawaii everything — peak 13-year-old territory. Quest: shrine photo + crepe-chaos photo within 90 minutes.', tags:[['tag-quest','🎖 Torii→Takeshita']], milestone:true},
  {t:'12:30 PM', n:'AFURI yuzu ramen', d:'Citrus-bright broth ideal for kid palates; ticket-machine ordering is the ritual. Off-peak beats the line.', tags:[['tag-food','🍜 Icon']]},
  {t:'2:00 PM', n:'Cat Street walk → Shibuya PARCO 6F', d:'One floor holds Nintendo TOKYO + Pokémon Center + Capcom Store + Jump Shop. The entire anime/game pilgrimage, one elevator.', tags:[['tag-tip','One floor']]},
  {t:'4:30 PM', n:'Scramble Crossing + Hachiko', d:'Cross with 3,000 friends; find the loyal dog. Purikura booth: most absurd auto-beautified result becomes the group-chat icon.', tags:[['tag-quest','🎖 Purikura']]},
  {t:'SUNSET', n:'Shibuya Sky', d:'Open-air rooftop above it all — the ticket bought exactly 14 days ago. Golden hour → city lights.', tags:[['tag-show','⭐ Sunset']], milestone:true},
  {t:'8:00 PM', n:'Dinner fork', d:'Splurge night: Ginza no Steak wagyu teppanyaki (kids welcome). Easy night: Ichiran solo-booth ramen — the booth IS the experience.', tags:[['tag-food','Fork']]},
 ],
 fork:{title:'Wagyu splurge or Ichiran fun?', a:'Ginza no Steak: A5 wagyu theater, the trip’s Tokyo splurge (~¥15,000/adult).', b:'Ichiran: ¥1,500 bowls in personal concentration booths, endlessly retellable.'},
 note:'Gacha Quest runs today: ¥1,000 each in ¥100 coins, weirdest capsule wins. Kura plates from last night count double.'},

/* ---------------- KYOTO ---------------- */
{id:'kyo-d1', leg:'kyo', date:'2027-06-04', dow:'Fri', dnum:'4', short:'Arrive',
 title:'Shinkansen → The Old Capital', sub:'Ekiben past Fuji · Nishiki Market · manga heaven',
 stamp:{arr:'Admitted · Heian-kyō', name:'Kyoto', wing:'⛩'},
 events:[
  {t:'10:00 AM', n:'teamLab Planets, Toyosu', d:'Barefoot through water and mirror-infinity rooms — the timed tickets from mid-May. Out by noon, bags already forwarded to Kyoto.', tags:[['tag-tip','Timed entry']], milestone:true},
  {t:'1:00 PM', n:'Ekiben ritual at Tokyo Station', d:'Four bento from Ekibenya Matsuri (200+ kinds) + Nozomi reserved seats, E-side for Mt. Fuji ~40 min in. Eating on the Shinkansen isn’t just allowed — it’s the point.', tags:[['tag-food','🍱 Icon'],['tag-leave','⏱ Nozomi 1:30']]},
  {t:'3:45 PM', n:'Arrive Kyoto → downtown hotel', d:'Kawaramachi base for 3 nights: walkable to Nishiki, Gion, and dinner.', tags:[]},
  {t:'4:30 PM', n:'Nishiki Market graze', d:'Tamagoyaki on a stick, strawberry mochi, tako-tamago dares, a chopstick shop. Rule: eat standing at the stall, never walking.', tags:[['tag-food','Market']]},
  {t:'EVENING', n:'Kyoto International Manga Museum OR Gion stroll', d:'50,000 manga on open shelves (open till 5 — museum may need to slot tomorrow; check energy) → dusk lanterns at Yasaka Shrine, Shirakawa canal. Photography rules in Gion are serious: public streets only, never photograph geiko without permission.', tags:[]},
  {t:'8:15 PM', n:'First firefly watch', d:'Early June is hotaru season — willows along the Shirakawa canal after dark. Free, wild, unforgettable. No flash, no catching.', tags:[['tag-show','✨ Fireflies']], milestone:true},
 ],
 note:'Dinner easy tonight: Musashi conveyor sushi. The kaiseki splurge is booked for Sunday.'},

{id:'kyo-d2', leg:'kyo', date:'2027-06-05', dow:'Sat', dnum:'5', short:'Arashiyama',
 title:'Arashiyama — Bamboo, Monkeys, Movie Sets', sub:'West Kyoto · the kid-win day',
 events:[
  {t:'8:00 AM', n:'Bamboo Grove before the crowds', d:'Before 9 it’s magic; by 10 it’s a conga line. Listen — the grove’s creak-and-knock is one of Japan’s official “100 Soundscapes.”', tags:[['tag-leave','⏱ JR 7:40']], milestone:true},
  {t:'9:30 AM', n:'Iwatayama Monkey Park', d:'20-min uphill hike to ~120 wild macaques above the city. ¥800/¥400 CASH ONLY. Monkey rules: no eye contact, no touching, feed only inside the hut.', tags:[['tag-quest','🎖 Monkey Keeper']], milestone:true},
  {t:'12:00 PM', n:'Riverside lunch + Togetsukyo Bridge', d:'Street snacks along the Katsura river; boats if the day is lazy.', tags:[['tag-food','Casual']]},
  {t:'2:00 PM', n:'Toei Kyoto Studio Park', d:'A working samurai-film studio: Edo-period sets, live sword-fight shows, ninja house, costume rental. For two movie fans this beats every ninja museum in town.', tags:[['tag-tip','Movie magic']], milestone:true},
  {t:'6:00 PM', n:'Dinner — Kyoto Ramen Koji', d:'Eight regional ramen shops on Kyoto Station’s 10th floor. Everyone picks a region; compare notes.', tags:[['tag-food','🍜']]},
 ],
 note:'Rain plan (tsuyu can start ~Jun 6): Manga Museum, Railway Museum, and Toei’s covered sets absorb a wet day gracefully — temples in rain mean empty paths and glowing moss.'},

{id:'kyo-d3', leg:'kyo', date:'2027-06-06', dow:'Sun', dnum:'6', short:'Higashiyama',
 title:'Higashiyama — The Postcard Day', sub:'Temple dawn · kimono · tea ceremony · kaiseki night',
 events:[
  {t:'8:00 AM', n:'Kiyomizu-dera at opening', d:'The wooden stage over the valley. Otowa waterfall: drink from ONE stream — school, love, or long life. All three = greedy. Kids pick carefully.', tags:[['tag-quest','🎖 One stream']], milestone:true},
  {t:'9:00 AM', n:'Kimono rental + Sannenzaka walk', d:'Yukata for the walk down Sannenzaka → Ninenzaka → Yasaka Pagoda. Renting is welcomed and normal here — locals do it too. Walk slowly; nothing drippy in rented sleeves.', tags:[['tag-tip','Photo hour']], milestone:true},
  {t:'12:00 PM', n:'Yudofu lunch near Nanzen-ji', d:'Okutan (est. 1635): tofu hot-pot in a garden. The 400-year-old restaurant is itself the field trip.', tags:[['tag-food','🍲 Icon']]},
  {t:'2:30 PM', n:'Family tea ceremony', d:'Camellia Flower Teahouse (Ninenzaka): whisk your own usucha. Matcha Meter quest — this is tasting #1 of 3.', tags:[['tag-quest','🎖 Matcha 1/3']], milestone:true},
  {t:'4:30 PM', n:'Philosopher’s Path north + Ginkaku-ji', d:'The canal walk; return at dusk for firefly round two if Thursday’s got rained out.', tags:[]},
  {t:'7:00 PM', n:'THE SPLURGE — kaiseki at Gion Karyo', d:'Multi-course Kyoto artistry that genuinely welcomes kids 10+ — both girls clear the bar. Booked weeks ago. Wear the day’s best.', tags:[['tag-food','⭐ Splurge']], milestone:true},
 ],
 note:'Shrine ritual badge: temizuya purification, ¥5 coin, two bows–two claps–one bow, unprompted. Tomorrow starts at 6:40 AM — worth it.'},

/* ---------------- OAHU (Jun 7 = the day that happens twice) ---------------- */
{id:'hi-d1', leg:'hi', date:'2027-06-07', dow:'Mon', dnum:'7', short:'Longest Day',
 title:'The Day That Happens Twice', sub:'Fushimi Inari at dawn (JST) → land in Honolulu before you left (HST)',
 stamp:{arr:'Admitted · USA · Aloha', name:'O‘ahu', wing:'🌺'},
 events:[
  {t:'7:00 AM JST', n:'Fushimi Inari — 10,000 torii at dawn', d:'Beat the 9 AM crush. Hike to the Yotsutsuji viewpoint (~45 min round). Find: a donor’s name on a gate, a fox holding a key, a mini offering torii.', tags:[['tag-quest','🎖 Torii Hunter']], milestone:true},
  {t:'10:30 AM', n:'Wagashi-making at Kanshundo', d:'75 minutes shaping seasonal sweets near Kyoto Station, then eat one with matcha (Matcha Meter #3?). The perfect final-morning slot.', tags:[['tag-quest','🎖 Artisan']]},
  {t:'1:00 PM', n:'Lunch + bags + Haruka to KIX', d:'Collect luggage by 3:30, Haruka express ~4:45 (~80 min; watch for the Hello Kitty livery). KIX T1 by 6:15 for a ~9 PM departure.', tags:[['tag-leave','⏱ Haruka 4:45']]},
  {t:'9:00 PM JST', n:'Wheels up — fly east through the date line', d:'Quiz the girls BEFORE landing: 8-hour flight departing 9 PM June 7… when do we land?', tags:[['tag-quest','🎖 Predict it']]},
  {t:'9:30 AM HST', n:'Land Honolulu — same morning, June 7', d:'You arrive 11.5 hours before you took off. The lost day from May 17 comes home. Aloha.', tags:[['tag-show','🌀 Time travel']], milestone:true},
  {t:'11:00 AM', n:'Waikiki — beach mode immediately', d:'Rooms likely not ready; beach bag packed on top. Sand, ocean, nothing scheduled.', tags:[]},
  {t:'3:00 PM', n:'Shave ice — Waiola', d:'Cloud-fine ice since 1940 (Island Vintage in Waikiki as walkable fallback). Rate it against every dessert from Asia.', tags:[['tag-food','🍧 Icon']]},
  {t:'6:00 PM', n:'Easy dinner + collapse', d:'Maguro Brothers poke (ex-Tsukiji fishmongers — a Japan callback) or hotel-simple. Everyone’s body thinks it’s tomorrow. Let it.', tags:[['tag-food','Easy']]},
 ],
 note:'Jet lag now works FOR you: everyone wakes at 5 AM, and tomorrow’s Diamond Head slot is 6 AM. Genius, or luck — take both.'},

{id:'hi-d2', leg:'hi', date:'2027-06-08', dow:'Tue', dnum:'8', short:'Diamond Head',
 title:'Sunrise Summit + Decompression', sub:'The only full Hawai‘i day — kept deliberately gentle',
 events:[
  {t:'5:30 AM', n:'Rise (effortlessly) → Diamond Head', d:'Reserved 6 AM entry (booked at the window). 1.5–2 hr round trip, kid-easy, crater views forever. Summit selfie before 8 AM.', tags:[['tag-quest','🎖 Summit'],['tag-leave','⏱ Gate 6:00']], milestone:true},
  {t:'9:00 AM', n:'Big breakfast + pool/beach block', d:'Nothing scheduled until the afternoon. That’s the feature, not a gap.', tags:[]},
  {t:'2:00 PM', n:'Waikiki Aquarium', d:'$12/$5, one gentle hour, walkable at the Diamond Head end. The jellyfish room is River-bait. Honu-spotting from the seawall after — 10 feet of distance, it’s the law.', tags:[['tag-quest','🎖 Spot a honu']]},
  {t:'5:30 PM', n:'Sunset dinner — Duke’s Waikiki', d:'Beachfront, live Hawaiian music, hula pie, kids’ menu. Early seating booked — jet lag makes 5:30 feel like a late dinner anyway.', tags:[['tag-food','⭐ Finale dinner']], milestone:true},
  {t:'7:00 PM', n:'Kuhio Beach hula show + golden hour', d:'Free torch-lighting hula most evenings. The last chapter-cover photo: Waikiki sand, Diamond Head in frame.', tags:[['tag-show','Golden hour'],['tag-quest','🎖 Last shot']]},
 ],
 note:'Learn and use: aloha, mahalo, honu. Pearl Harbor was deliberately saved for a future trip — decompression means decompression.'},

{id:'hi-d3', leg:'hi', date:'2027-06-09', dow:'Wed', dnum:'9', short:'Home',
 title:'Homeward', sub:'Morning flight · Phoenix by dinner · 23 days, 7 stamps',
 events:[
  {t:'MORNING', n:'Last beach hour + pack-out', d:'Morning HNL→PHX (~6 hrs, lands early evening Phoenix time — 3 hours ahead of Hawai‘i).', tags:[['tag-leave','⏱ To HNL']]},
  {t:'IN FLIGHT', n:'The Family Awards', d:'Best day, best meal, best ride, biggest surprise, funniest moment — vote on all of it. The Keepsake tab has the ballots.', tags:[['tag-quest','🎖 Awards']],  milestone:true},
  {t:'EVENING', n:'Home', d:'Passport full. Trip of a lifetime, stamped and sealed.', tags:[]},
 ],
 note:'When you’re ready: the journal export in Keepsake compiles every entry, quest, and score into one shareable text.'},
];

const DAY_BY_ID = {};
DAYS.forEach(d => DAY_BY_ID[d.id] = d);
const DAY_BY_DATE = {};
DAYS.forEach(d => DAY_BY_DATE[d.date] = d);
