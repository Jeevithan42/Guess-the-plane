// Aircraft database for Planedle.
// Photos are not stored in this repo — `wiki` is the exact title of the plane's
// English Wikipedia article, and js/images.js resolves it to that article's lead
// photo at runtime. Titles must match Wikipedia exactly; redirects are followed.
// era: "WW2" | "Cold War" | "Modern"
// type: "Fighter" | "Bomber" | "Attack" | "Cargo" | "Reconnaissance" | "Tanker"

const AIRCRAFT = [
    // ============ WW2 ERA ============
    {
        id: "spitfire", name: "Supermarine Spitfire", manufacturer: "Supermarine", country: "United Kingdom", era: "WW2", type: "Fighter", firstFlight: 1936, wiki: "Supermarine Spitfire",
        description: "Britain's iconic WW2 fighter, famed for its elliptical wings and its starring role in the Battle of Britain."
    },
    {
        id: "hurricane", name: "Hawker Hurricane", manufacturer: "Hawker", country: "United Kingdom", era: "WW2", type: "Fighter", firstFlight: 1935, wiki: "Hawker Hurricane",
        description: "The RAF workhorse of the Battle of Britain, credited with more kills in that battle than the Spitfire."
    },
    {
        id: "p51-mustang", name: "P-51 Mustang", manufacturer: "North American", country: "United States", era: "WW2", type: "Fighter", firstFlight: 1940, wiki: "North American P-51 Mustang",
        description: "Long-range escort fighter that shepherded Allied bombers deep into Germany; one of the finest piston fighters ever built."
    },
    {
        id: "p47-thunderbolt", name: "P-47 Thunderbolt", manufacturer: "Republic", country: "United States", era: "WW2", type: "Fighter", firstFlight: 1941, wiki: "Republic P-47 Thunderbolt",
        description: "The rugged, heavily armed 'Jug', equally at home on high-altitude escort and low-level ground attack."
    },
    {
        id: "p38-lightning", name: "P-38 Lightning", manufacturer: "Lockheed", country: "United States", era: "WW2", type: "Fighter", firstFlight: 1939, wiki: "Lockheed P-38 Lightning",
        description: "Distinctive twin-boom fighter flown by America's two top-scoring aces in the Pacific."
    },
    {
        id: "f4u-corsair", name: "F4U Corsair", manufacturer: "Vought", country: "United States", era: "WW2", type: "Fighter", firstFlight: 1940, wiki: "Vought F4U Corsair",
        description: "Bent-wing carrier fighter with a fearsome kill ratio against Japanese aircraft in the Pacific."
    },
    {
        id: "f6f-hellcat", name: "F6F Hellcat", manufacturer: "Grumman", country: "United States", era: "WW2", type: "Fighter", firstFlight: 1942, wiki: "Grumman F6F Hellcat",
        description: "The US Navy's great carrier fighter, credited with over 5,000 aerial victories in just two years."
    },
    {
        id: "bf-109", name: "Bf 109", manufacturer: "Messerschmitt", country: "Germany", era: "WW2", type: "Fighter", firstFlight: 1935, wiki: "Messerschmitt Bf 109",
        description: "The Luftwaffe's backbone and the most-produced fighter aircraft in history, with nearly 34,000 built."
    },
    {
        id: "fw-190", name: "Fw 190", manufacturer: "Focke-Wulf", country: "Germany", era: "WW2", type: "Fighter", firstFlight: 1939, wiki: "Focke-Wulf Fw 190",
        description: "The 'Butcher Bird' — a formidable radial-engined fighter that shocked the RAF when it appeared in 1941."
    },
    {
        id: "a6m-zero", name: "A6M Zero", manufacturer: "Mitsubishi", country: "Japan", era: "WW2", type: "Fighter", firstFlight: 1939, wiki: "Mitsubishi A6M Zero",
        description: "Legendarily agile Japanese carrier fighter that dominated the skies in the early Pacific war."
    },
    {
        id: "yak-3", name: "Yak-3", manufacturer: "Yakovlev", country: "Soviet Union", era: "WW2", type: "Fighter", firstFlight: 1943, wiki: "Yakovlev Yak-3",
        description: "Lightweight, nimble Soviet dogfighter that Luftwaffe pilots were warned to avoid at low altitude."
    },
    {
        id: "me-262", name: "Me 262", manufacturer: "Messerschmitt", country: "Germany", era: "WW2", type: "Fighter", firstFlight: 1942, wiki: "Messerschmitt Me 262",
        description: "The world's first operational jet fighter — revolutionary, but too late to change the war."
    },
    {
        id: "b-17", name: "B-17 Flying Fortress", manufacturer: "Boeing", country: "United States", era: "WW2", type: "Bomber", firstFlight: 1935, wiki: "Boeing B-17 Flying Fortress",
        description: "The bristling heavy bomber at the heart of the American daylight bombing campaign over Europe."
    },
    {
        id: "b-24", name: "B-24 Liberator", manufacturer: "Consolidated", country: "United States", era: "WW2", type: "Bomber", firstFlight: 1939, wiki: "Consolidated B-24 Liberator",
        description: "The most-produced American military aircraft ever — a long-legged heavy bomber that served on every front."
    },
    {
        id: "b-25", name: "B-25 Mitchell", manufacturer: "North American", country: "United States", era: "WW2", type: "Bomber", firstFlight: 1940, wiki: "North American B-25 Mitchell",
        description: "Medium bomber made famous by the Doolittle Raid on Tokyo in 1942."
    },
    {
        id: "b-29", name: "B-29 Superfortress", manufacturer: "Boeing", country: "United States", era: "WW2", type: "Bomber", firstFlight: 1942, wiki: "Boeing B-29 Superfortress",
        description: "Pressurized long-range super bomber that ended WW2 by dropping the atomic bombs on Hiroshima and Nagasaki."
    },
    {
        id: "lancaster", name: "Avro Lancaster", manufacturer: "Avro", country: "United Kingdom", era: "WW2", type: "Bomber", firstFlight: 1941, wiki: "Avro Lancaster",
        description: "The RAF's great night bomber — deliverer of the Dambusters' bouncing bombs and the ten-ton Grand Slam."
    },
    {
        id: "mosquito", name: "de Havilland Mosquito", manufacturer: "de Havilland", country: "United Kingdom", era: "WW2", type: "Bomber", firstFlight: 1940, wiki: "de Havilland Mosquito",
        description: "The 'Wooden Wonder' — a plywood multirole bomber so fast it often flew without defensive guns."
    },
    {
        id: "ju-87", name: "Ju 87 Stuka", manufacturer: "Junkers", country: "Germany", era: "WW2", type: "Attack", firstFlight: 1935, wiki: "Junkers Ju 87",
        description: "The gull-winged dive bomber whose screaming sirens became the soundtrack of the Blitzkrieg."
    },
    {
        id: "he-111", name: "He 111", manufacturer: "Heinkel", country: "Germany", era: "WW2", type: "Bomber", firstFlight: 1935, wiki: "Heinkel He 111",
        description: "The Luftwaffe's principal medium bomber during the Battle of Britain and the Blitz."
    },
    {
        id: "il-2", name: "Il-2 Sturmovik", manufacturer: "Ilyushin", country: "Soviet Union", era: "WW2", type: "Attack", firstFlight: 1939, wiki: "Ilyushin Il-2",
        description: "The heavily armoured 'Flying Tank' — the most-produced military aircraft in history."
    },
    {
        id: "c-47", name: "C-47 Skytrain", manufacturer: "Douglas", country: "United States", era: "WW2", type: "Cargo", firstFlight: 1941, wiki: "Douglas C-47 Skytrain",
        description: "The military DC-3 that hauled troops and cargo everywhere, from the D-Day drops to the Berlin Airlift."
    },
    {
        id: "ju-52", name: "Ju 52", manufacturer: "Junkers", country: "Germany", era: "WW2", type: "Cargo", firstFlight: 1930, wiki: "Junkers Ju 52",
        description: "The corrugated-skin 'Tante Ju' trimotor, the Luftwaffe's standard transport of the war."
    },

    // ============ COLD WAR ERA ============
    {
        id: "f-86", name: "F-86 Sabre", manufacturer: "North American", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1947, wiki: "North American F-86 Sabre",
        description: "Swept-wing jet that duelled MiG-15s over Korea's 'MiG Alley' in the first great jet-vs-jet battles."
    },
    {
        id: "mig-15", name: "MiG-15", manufacturer: "Mikoyan-Gurevich", country: "Soviet Union", era: "Cold War", type: "Fighter", firstFlight: 1947, wiki: "Mikoyan-Gurevich MiG-15",
        description: "The Soviet swept-wing jet that stunned Western air forces when it appeared over Korea."
    },
    {
        id: "mig-21", name: "MiG-21", manufacturer: "Mikoyan-Gurevich", country: "Soviet Union", era: "Cold War", type: "Fighter", firstFlight: 1956, wiki: "Mikoyan-Gurevich MiG-21",
        description: "The delta-winged 'Fishbed' — the most-produced supersonic jet ever, flown by more than 50 nations."
    },
    {
        id: "f-4", name: "F-4 Phantom II", manufacturer: "McDonnell Douglas", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1958, wiki: "McDonnell Douglas F-4 Phantom II",
        description: "Big, brutish twin-engine fighter-bomber that served the US Navy, Marines and Air Force through Vietnam and far beyond."
    },
    {
        id: "mig-25", name: "MiG-25 Foxbat", manufacturer: "Mikoyan-Gurevich", country: "Soviet Union", era: "Cold War", type: "Fighter", firstFlight: 1964, wiki: "Mikoyan-Gurevich MiG-25",
        description: "Stainless-steel Mach 3 interceptor built to chase American spy planes and bombers."
    },
    {
        id: "f-104", name: "F-104 Starfighter", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1954, wiki: "Lockheed F-104 Starfighter",
        description: "'The missile with a man in it' — a razor-winged Mach 2 interceptor of the 1950s."
    },
    {
        id: "mirage-3", name: "Mirage III", manufacturer: "Dassault", country: "France", era: "Cold War", type: "Fighter", firstFlight: 1956, wiki: "Dassault Mirage III",
        description: "France's elegant delta fighter, which proved itself devastatingly effective in the 1967 Six-Day War."
    },
    {
        id: "ee-lightning", name: "English Electric Lightning", manufacturer: "English Electric", country: "United Kingdom", era: "Cold War", type: "Fighter", firstFlight: 1954, wiki: "English Electric Lightning",
        description: "Britain's stacked-twin-engine interceptor, famous for a climb rate that could match contemporary rockets."
    },
    {
        id: "harrier", name: "Harrier", manufacturer: "Hawker Siddeley", country: "United Kingdom", era: "Cold War", type: "Attack", firstFlight: 1967, wiki: "Hawker Siddeley Harrier",
        description: "The revolutionary jump jet — the first operational fighter capable of vertical takeoff and landing."
    },
    {
        id: "a-4", name: "A-4 Skyhawk", manufacturer: "Douglas", country: "United States", era: "Cold War", type: "Attack", firstFlight: 1954, wiki: "Douglas A-4 Skyhawk",
        description: "The compact 'Scooter' carrier attack jet, a workhorse from Vietnam to the Falklands."
    },
    {
        id: "a-6", name: "A-6 Intruder", manufacturer: "Grumman", country: "United States", era: "Cold War", type: "Attack", firstFlight: 1960, wiki: "Grumman A-6 Intruder",
        description: "All-weather carrier attack jet with an unmistakable tadpole shape and side-by-side cockpit."
    },
    {
        id: "su-25", name: "Su-25 Frogfoot", manufacturer: "Sukhoi", country: "Soviet Union", era: "Cold War", type: "Attack", firstFlight: 1975, wiki: "Sukhoi Su-25",
        description: "The Soviet Union's armoured close-support jet, still flying combat missions today."
    },
    {
        id: "a-10", name: "A-10 Thunderbolt II", manufacturer: "Fairchild Republic", country: "United States", era: "Cold War", type: "Attack", firstFlight: 1972, wiki: "Fairchild Republic A-10 Thunderbolt II",
        description: "The 'Warthog' — built around a 30 mm tank-killing cannon and legendary battlefield toughness."
    },
    {
        id: "b-52", name: "B-52 Stratofortress", manufacturer: "Boeing", country: "United States", era: "Cold War", type: "Bomber", firstFlight: 1952, wiki: "Boeing B-52 Stratofortress",
        description: "The eight-engined strategic bomber flying since 1952 — and expected to keep flying into the 2050s."
    },
    {
        id: "tu-95", name: "Tu-95 Bear", manufacturer: "Tupolev", country: "Soviet Union", era: "Cold War", type: "Bomber", firstFlight: 1952, wiki: "Tupolev Tu-95",
        description: "Swept-wing turboprop bomber whose contra-rotating propellers make it one of the loudest aircraft ever built."
    },
    {
        id: "vulcan", name: "Avro Vulcan", manufacturer: "Avro", country: "United Kingdom", era: "Cold War", type: "Bomber", firstFlight: 1952, wiki: "Avro Vulcan",
        description: "Britain's delta-winged V-bomber, star of the marathon Black Buck raids in the Falklands War."
    },
    {
        id: "b-1b", name: "B-1B Lancer", manufacturer: "Rockwell", country: "United States", era: "Cold War", type: "Bomber", firstFlight: 1974, wiki: "Rockwell B-1 Lancer",
        description: "The swing-wing supersonic 'Bone', which traded its nuclear role for conventional heavy strike."
    },
    {
        id: "tu-160", name: "Tu-160 Blackjack", manufacturer: "Tupolev", country: "Soviet Union", era: "Cold War", type: "Bomber", firstFlight: 1981, wiki: "Tupolev Tu-160",
        description: "The 'White Swan' — the heaviest and fastest combat aircraft in service, a swing-wing supersonic bomber."
    },
    {
        id: "sr-71", name: "SR-71 Blackbird", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Reconnaissance", firstFlight: 1964, wiki: "Lockheed SR-71 Blackbird",
        description: "The Mach 3+ reconnaissance legend that simply outran every missile ever fired at it."
    },
    {
        id: "u-2", name: "U-2 Dragon Lady", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Reconnaissance", firstFlight: 1955, wiki: "Lockheed U-2",
        description: "The glider-like spyplane cruising above 70,000 feet on missions since 1955."
    },
    {
        id: "c-130", name: "C-130 Hercules", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Cargo", firstFlight: 1954, wiki: "Lockheed C-130 Hercules",
        description: "The West's do-everything tactical airlifter, in continuous production for over 70 years."
    },
    {
        id: "c-141", name: "C-141 Starlifter", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Cargo", firstFlight: 1963, wiki: "Lockheed C-141 Starlifter",
        description: "The US Air Force's first purpose-built jet strategic airlifter."
    },
    {
        id: "c-5", name: "C-5 Galaxy", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Cargo", firstFlight: 1968, wiki: "Lockheed C-5 Galaxy",
        description: "One of the largest military aircraft in the world, able to swallow tanks and helicopters whole."
    },
    {
        id: "an-124", name: "An-124 Ruslan", manufacturer: "Antonov", country: "Soviet Union", era: "Cold War", type: "Cargo", firstFlight: 1982, wiki: "Antonov An-124 Ruslan",
        description: "The giant Soviet strategic airlifter — the largest military transport aircraft in service."
    },
    {
        id: "an-225", name: "An-225 Mriya", manufacturer: "Antonov", country: "Soviet Union", era: "Cold War", type: "Cargo", firstFlight: 1988, wiki: "Antonov An-225 Mriya",
        description: "The largest aircraft ever built. The sole example was destroyed at Hostomel in 2022."
    },
    {
        id: "il-76", name: "Il-76", manufacturer: "Ilyushin", country: "Soviet Union", era: "Cold War", type: "Cargo", firstFlight: 1971, wiki: "Ilyushin Il-76",
        description: "Rugged four-jet Soviet airlifter designed to operate from rough, unpaved strips."
    },
    {
        id: "kc-135", name: "KC-135 Stratotanker", manufacturer: "Boeing", country: "United States", era: "Cold War", type: "Tanker", firstFlight: 1956, wiki: "Boeing KC-135 Stratotanker",
        description: "The jet tanker that has fuelled the US Air Force for more than six decades."
    },
    {
        id: "f-14", name: "F-14 Tomcat", manufacturer: "Grumman", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1970, wiki: "Grumman F-14 Tomcat",
        description: "The swing-wing fleet defender of Top Gun fame — retired by the US Navy, still flown by Iran."
    },
    {
        id: "f-15", name: "F-15 Eagle", manufacturer: "McDonnell Douglas", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1972, wiki: "McDonnell Douglas F-15 Eagle",
        description: "The air-superiority heavyweight with a claimed air-to-air record of over 100 kills and zero losses."
    },
    {
        id: "f-16", name: "F-16 Fighting Falcon", manufacturer: "General Dynamics", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1974, wiki: "General Dynamics F-16 Fighting Falcon",
        description: "The agile lightweight multirole 'Viper' — the most numerous fighter in service today."
    },
    {
        id: "fa-18", name: "F/A-18 Hornet", manufacturer: "McDonnell Douglas", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1978, wiki: "McDonnell Douglas F/A-18 Hornet",
        description: "The US Navy's carrier multirole strike fighter and the mount of the Blue Angels."
    },
    {
        id: "mig-29", name: "MiG-29 Fulcrum", manufacturer: "Mikoyan", country: "Soviet Union", era: "Cold War", type: "Fighter", firstFlight: 1977, wiki: "Mikoyan MiG-29",
        description: "The agile Soviet frontline fighter developed to counter the F-16."
    },
    {
        id: "su-27", name: "Su-27 Flanker", manufacturer: "Sukhoi", country: "Soviet Union", era: "Cold War", type: "Fighter", firstFlight: 1977, wiki: "Sukhoi Su-27",
        description: "The big, super-manoeuvrable 'Flanker' that spawned an entire family of Russian fighters."
    },
    {
        id: "mig-31", name: "MiG-31 Foxhound", manufacturer: "Mikoyan", country: "Soviet Union", era: "Cold War", type: "Fighter", firstFlight: 1975, wiki: "Mikoyan MiG-31",
        description: "The Mach 2.8 heavy interceptor built to patrol the vast approaches to Soviet airspace."
    },
    {
        id: "f-5", name: "F-5 Tiger II", manufacturer: "Northrop", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1959, wiki: "Northrop F-5",
        description: "The small, cheap supersonic fighter exported worldwide and beloved as an aggressor trainer."
    },
    {
        id: "f-117", name: "F-117 Nighthawk", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Attack", firstFlight: 1981, wiki: "Lockheed F-117 Nighthawk",
        description: "The faceted 'stealth fighter' — actually an attack jet, and the first operational stealth aircraft."
    },
    {
        id: "mirage-2000", name: "Mirage 2000", manufacturer: "Dassault", country: "France", era: "Cold War", type: "Fighter", firstFlight: 1978, wiki: "Dassault Mirage 2000",
        description: "France's delta multirole fighter of the 1980s and 90s, exported across the globe."
    },
    {
        id: "tornado", name: "Panavia Tornado", manufacturer: "Panavia", country: "Multinational", era: "Cold War", type: "Attack", firstFlight: 1974, wiki: "Panavia Tornado",
        description: "The European swing-wing strike jet built for ultra-low-level penetration missions."
    },

    // ============ MODERN ERA ============
    {
        id: "b-2", name: "B-2 Spirit", manufacturer: "Northrop Grumman", country: "United States", era: "Modern", type: "Bomber", firstFlight: 1989, wiki: "Northrop B-2 Spirit",
        description: "The flying-wing stealth bomber, nearly invisible to radar and unmistakable in the sky."
    },
    {
        id: "f-22", name: "F-22 Raptor", manufacturer: "Lockheed Martin", country: "United States", era: "Modern", type: "Fighter", firstFlight: 1997, wiki: "Lockheed Martin F-22 Raptor",
        description: "The world's first fifth-generation fighter — stealth, supercruise and unmatched agility."
    },
    {
        id: "f-35", name: "F-35 Lightning II", manufacturer: "Lockheed Martin", country: "United States", era: "Modern", type: "Fighter", firstFlight: 2006, wiki: "Lockheed Martin F-35 Lightning II",
        description: "Stealth multirole fighter in three variants, born of the largest defence programme in history."
    },
    {
        id: "eurofighter", name: "Eurofighter Typhoon", manufacturer: "Eurofighter GmbH", country: "Multinational", era: "Modern", type: "Fighter", firstFlight: 1994, wiki: "Eurofighter Typhoon",
        description: "The four-nation canard-delta air-superiority fighter of Europe."
    },
    {
        id: "rafale", name: "Dassault Rafale", manufacturer: "Dassault", country: "France", era: "Modern", type: "Fighter", firstFlight: 1986, wiki: "Dassault Rafale",
        description: "France's 'omnirole' fighter, flying from both land bases and the carrier Charles de Gaulle."
    },
    {
        id: "gripen", name: "JAS 39 Gripen", manufacturer: "Saab", country: "Sweden", era: "Modern", type: "Fighter", firstFlight: 1988, wiki: "Saab JAS 39 Gripen",
        description: "Sweden's clever lightweight fighter, designed to operate from stretches of ordinary highway."
    },
    {
        id: "su-57", name: "Su-57 Felon", manufacturer: "Sukhoi", country: "Russia", era: "Modern", type: "Fighter", firstFlight: 2010, wiki: "Sukhoi Su-57",
        description: "Russia's first stealth fighter, blending low observability with Flanker-style agility."
    },
    {
        id: "j-20", name: "J-20 Mighty Dragon", manufacturer: "Chengdu", country: "China", era: "Modern", type: "Fighter", firstFlight: 2011, wiki: "Chengdu J-20",
        description: "China's first stealth air-superiority fighter, with distinctive canards and a long, blended fuselage."
    },
    {
        id: "su-35", name: "Su-35 Flanker-E", manufacturer: "Sukhoi", country: "Russia", era: "Modern", type: "Fighter", firstFlight: 2008, wiki: "Sukhoi Su-35",
        description: "The thrust-vectoring ultimate evolution of the Su-27 Flanker family."
    },
    {
        id: "c-17", name: "C-17 Globemaster III", manufacturer: "Boeing", country: "United States", era: "Modern", type: "Cargo", firstFlight: 1991, wiki: "Boeing C-17 Globemaster III",
        description: "The strategic airlifter with tactical, short-field manners — able to land 77 tonnes on a dirt strip."
    },
    {
        id: "a400m", name: "A400M Atlas", manufacturer: "Airbus", country: "Multinational", era: "Modern", type: "Cargo", firstFlight: 2009, wiki: "Airbus A400M Atlas",
        description: "Europe's big turboprop airlifter, bridging the gap between the C-130 and the C-17."
    },
    {
        id: "kc-390", name: "KC-390 Millennium", manufacturer: "Embraer", country: "Brazil", era: "Modern", type: "Cargo", firstFlight: 2015, wiki: "Embraer KC-390",
        description: "Brazil's jet-powered tactical transport — the fastest airlifter in its class."
    },
    {
        id: "b-21", name: "B-21 Raider", manufacturer: "Northrop Grumman", country: "United States", era: "Modern", type: "Bomber", firstFlight: 2023, wiki: "Northrop Grumman B-21 Raider",
        description: "America's next-generation stealth bomber, first flown in 2023 and shrouded in secrecy."
    },
];
