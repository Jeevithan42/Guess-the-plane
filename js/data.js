// Aircraft database for Planedle.
// Every image is expected at images/<id>.jpg — full list in images/image-list.txt.
// era: "WW2" | "Cold War" | "Modern"
// type: "Fighter" | "Bomber" | "Attack" | "Cargo" | "Reconnaissance" | "Tanker"

const AIRCRAFT = [
    // ============ WW2 ERA ============
    {
        id: "spitfire", name: "Supermarine Spitfire", manufacturer: "Supermarine", country: "United Kingdom", era: "WW2", type: "Fighter", firstFlight: 1936, image: "images/spitfire.jpg",
        description: "Britain's iconic WW2 fighter, famed for its elliptical wings and its starring role in the Battle of Britain."
    },
    {
        id: "hurricane", name: "Hawker Hurricane", manufacturer: "Hawker", country: "United Kingdom", era: "WW2", type: "Fighter", firstFlight: 1935, image: "images/hurricane.jpg",
        description: "The RAF workhorse of the Battle of Britain, credited with more kills in that battle than the Spitfire."
    },
    {
        id: "p51-mustang", name: "P-51 Mustang", manufacturer: "North American", country: "United States", era: "WW2", type: "Fighter", firstFlight: 1940, image: "images/p51-mustang.jpg",
        description: "Long-range escort fighter that shepherded Allied bombers deep into Germany; one of the finest piston fighters ever built."
    },
    {
        id: "p47-thunderbolt", name: "P-47 Thunderbolt", manufacturer: "Republic", country: "United States", era: "WW2", type: "Fighter", firstFlight: 1941, image: "images/p47-thunderbolt.jpg",
        description: "The rugged, heavily armed 'Jug', equally at home on high-altitude escort and low-level ground attack."
    },
    {
        id: "p38-lightning", name: "P-38 Lightning", manufacturer: "Lockheed", country: "United States", era: "WW2", type: "Fighter", firstFlight: 1939, image: "images/p38-lightning.jpg",
        description: "Distinctive twin-boom fighter flown by America's two top-scoring aces in the Pacific."
    },
    {
        id: "f4u-corsair", name: "F4U Corsair", manufacturer: "Vought", country: "United States", era: "WW2", type: "Fighter", firstFlight: 1940, image: "images/f4u-corsair.jpg",
        description: "Bent-wing carrier fighter with a fearsome kill ratio against Japanese aircraft in the Pacific."
    },
    {
        id: "f6f-hellcat", name: "F6F Hellcat", manufacturer: "Grumman", country: "United States", era: "WW2", type: "Fighter", firstFlight: 1942, image: "images/f6f-hellcat.jpg",
        description: "The US Navy's great carrier fighter, credited with over 5,000 aerial victories in just two years."
    },
    {
        id: "bf-109", name: "Bf 109", manufacturer: "Messerschmitt", country: "Germany", era: "WW2", type: "Fighter", firstFlight: 1935, image: "images/bf-109.jpg",
        description: "The Luftwaffe's backbone and the most-produced fighter aircraft in history, with nearly 34,000 built."
    },
    {
        id: "fw-190", name: "Fw 190", manufacturer: "Focke-Wulf", country: "Germany", era: "WW2", type: "Fighter", firstFlight: 1939, image: "images/fw-190.jpg",
        description: "The 'Butcher Bird' — a formidable radial-engined fighter that shocked the RAF when it appeared in 1941."
    },
    {
        id: "a6m-zero", name: "A6M Zero", manufacturer: "Mitsubishi", country: "Japan", era: "WW2", type: "Fighter", firstFlight: 1939, image: "images/a6m-zero.jpg",
        description: "Legendarily agile Japanese carrier fighter that dominated the skies in the early Pacific war."
    },
    {
        id: "yak-3", name: "Yak-3", manufacturer: "Yakovlev", country: "Soviet Union", era: "WW2", type: "Fighter", firstFlight: 1943, image: "images/yak-3.jpg",
        description: "Lightweight, nimble Soviet dogfighter that Luftwaffe pilots were warned to avoid at low altitude."
    },
    {
        id: "me-262", name: "Me 262", manufacturer: "Messerschmitt", country: "Germany", era: "WW2", type: "Fighter", firstFlight: 1942, image: "images/me-262.jpg",
        description: "The world's first operational jet fighter — revolutionary, but too late to change the war."
    },
    {
        id: "b-17", name: "B-17 Flying Fortress", manufacturer: "Boeing", country: "United States", era: "WW2", type: "Bomber", firstFlight: 1935, image: "images/b-17.jpg",
        description: "The bristling heavy bomber at the heart of the American daylight bombing campaign over Europe."
    },
    {
        id: "b-24", name: "B-24 Liberator", manufacturer: "Consolidated", country: "United States", era: "WW2", type: "Bomber", firstFlight: 1939, image: "images/b-24.jpg",
        description: "The most-produced American military aircraft ever — a long-legged heavy bomber that served on every front."
    },
    {
        id: "b-25", name: "B-25 Mitchell", manufacturer: "North American", country: "United States", era: "WW2", type: "Bomber", firstFlight: 1940, image: "images/b-25.jpg",
        description: "Medium bomber made famous by the Doolittle Raid on Tokyo in 1942."
    },
    {
        id: "b-29", name: "B-29 Superfortress", manufacturer: "Boeing", country: "United States", era: "WW2", type: "Bomber", firstFlight: 1942, image: "images/b-29.jpg",
        description: "Pressurized long-range super bomber that ended WW2 by dropping the atomic bombs on Hiroshima and Nagasaki."
    },
    {
        id: "lancaster", name: "Avro Lancaster", manufacturer: "Avro", country: "United Kingdom", era: "WW2", type: "Bomber", firstFlight: 1941, image: "images/lancaster.jpg",
        description: "The RAF's great night bomber — deliverer of the Dambusters' bouncing bombs and the ten-ton Grand Slam."
    },
    {
        id: "mosquito", name: "de Havilland Mosquito", manufacturer: "de Havilland", country: "United Kingdom", era: "WW2", type: "Bomber", firstFlight: 1940, image: "images/mosquito.jpg",
        description: "The 'Wooden Wonder' — a plywood multirole bomber so fast it often flew without defensive guns."
    },
    {
        id: "ju-87", name: "Ju 87 Stuka", manufacturer: "Junkers", country: "Germany", era: "WW2", type: "Attack", firstFlight: 1935, image: "images/ju-87.jpg",
        description: "The gull-winged dive bomber whose screaming sirens became the soundtrack of the Blitzkrieg."
    },
    {
        id: "he-111", name: "He 111", manufacturer: "Heinkel", country: "Germany", era: "WW2", type: "Bomber", firstFlight: 1935, image: "images/he-111.jpg",
        description: "The Luftwaffe's principal medium bomber during the Battle of Britain and the Blitz."
    },
    {
        id: "il-2", name: "Il-2 Sturmovik", manufacturer: "Ilyushin", country: "Soviet Union", era: "WW2", type: "Attack", firstFlight: 1939, image: "images/il-2.jpg",
        description: "The heavily armoured 'Flying Tank' — the most-produced military aircraft in history."
    },
    {
        id: "c-47", name: "C-47 Skytrain", manufacturer: "Douglas", country: "United States", era: "WW2", type: "Cargo", firstFlight: 1941, image: "images/c-47.jpg",
        description: "The military DC-3 that hauled troops and cargo everywhere, from the D-Day drops to the Berlin Airlift."
    },
    {
        id: "ju-52", name: "Ju 52", manufacturer: "Junkers", country: "Germany", era: "WW2", type: "Cargo", firstFlight: 1930, image: "images/ju-52.jpg",
        description: "The corrugated-skin 'Tante Ju' trimotor, the Luftwaffe's standard transport of the war."
    },

    // ============ COLD WAR ERA ============
    {
        id: "f-86", name: "F-86 Sabre", manufacturer: "North American", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1947, image: "images/f-86.jpg",
        description: "Swept-wing jet that duelled MiG-15s over Korea's 'MiG Alley' in the first great jet-vs-jet battles."
    },
    {
        id: "mig-15", name: "MiG-15", manufacturer: "Mikoyan-Gurevich", country: "Soviet Union", era: "Cold War", type: "Fighter", firstFlight: 1947, image: "images/mig-15.jpg",
        description: "The Soviet swept-wing jet that stunned Western air forces when it appeared over Korea."
    },
    {
        id: "mig-21", name: "MiG-21", manufacturer: "Mikoyan-Gurevich", country: "Soviet Union", era: "Cold War", type: "Fighter", firstFlight: 1956, image: "images/mig-21.jpg",
        description: "The delta-winged 'Fishbed' — the most-produced supersonic jet ever, flown by more than 50 nations."
    },
    {
        id: "f-4", name: "F-4 Phantom II", manufacturer: "McDonnell Douglas", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1958, image: "images/f-4.jpg",
        description: "Big, brutish twin-engine fighter-bomber that served the US Navy, Marines and Air Force through Vietnam and far beyond."
    },
    {
        id: "mig-25", name: "MiG-25 Foxbat", manufacturer: "Mikoyan-Gurevich", country: "Soviet Union", era: "Cold War", type: "Fighter", firstFlight: 1964, image: "images/mig-25.jpg",
        description: "Stainless-steel Mach 3 interceptor built to chase American spy planes and bombers."
    },
    {
        id: "f-104", name: "F-104 Starfighter", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1954, image: "images/f-104.jpg",
        description: "'The missile with a man in it' — a razor-winged Mach 2 interceptor of the 1950s."
    },
    {
        id: "mirage-3", name: "Mirage III", manufacturer: "Dassault", country: "France", era: "Cold War", type: "Fighter", firstFlight: 1956, image: "images/mirage-3.jpg",
        description: "France's elegant delta fighter, which proved itself devastatingly effective in the 1967 Six-Day War."
    },
    {
        id: "ee-lightning", name: "English Electric Lightning", manufacturer: "English Electric", country: "United Kingdom", era: "Cold War", type: "Fighter", firstFlight: 1954, image: "images/ee-lightning.jpg",
        description: "Britain's stacked-twin-engine interceptor, famous for a climb rate that could match contemporary rockets."
    },
    {
        id: "harrier", name: "Harrier", manufacturer: "Hawker Siddeley", country: "United Kingdom", era: "Cold War", type: "Attack", firstFlight: 1967, image: "images/harrier.jpg",
        description: "The revolutionary jump jet — the first operational fighter capable of vertical takeoff and landing."
    },
    {
        id: "a-4", name: "A-4 Skyhawk", manufacturer: "Douglas", country: "United States", era: "Cold War", type: "Attack", firstFlight: 1954, image: "images/a-4.jpg",
        description: "The compact 'Scooter' carrier attack jet, a workhorse from Vietnam to the Falklands."
    },
    {
        id: "a-6", name: "A-6 Intruder", manufacturer: "Grumman", country: "United States", era: "Cold War", type: "Attack", firstFlight: 1960, image: "images/a-6.jpg",
        description: "All-weather carrier attack jet with an unmistakable tadpole shape and side-by-side cockpit."
    },
    {
        id: "su-25", name: "Su-25 Frogfoot", manufacturer: "Sukhoi", country: "Soviet Union", era: "Cold War", type: "Attack", firstFlight: 1975, image: "images/su-25.jpg",
        description: "The Soviet Union's armoured close-support jet, still flying combat missions today."
    },
    {
        id: "a-10", name: "A-10 Thunderbolt II", manufacturer: "Fairchild Republic", country: "United States", era: "Cold War", type: "Attack", firstFlight: 1972, image: "images/a-10.jpg",
        description: "The 'Warthog' — built around a 30 mm tank-killing cannon and legendary battlefield toughness."
    },
    {
        id: "b-52", name: "B-52 Stratofortress", manufacturer: "Boeing", country: "United States", era: "Cold War", type: "Bomber", firstFlight: 1952, image: "images/b-52.jpg",
        description: "The eight-engined strategic bomber flying since 1952 — and expected to keep flying into the 2050s."
    },
    {
        id: "tu-95", name: "Tu-95 Bear", manufacturer: "Tupolev", country: "Soviet Union", era: "Cold War", type: "Bomber", firstFlight: 1952, image: "images/tu-95.jpg",
        description: "Swept-wing turboprop bomber whose contra-rotating propellers make it one of the loudest aircraft ever built."
    },
    {
        id: "vulcan", name: "Avro Vulcan", manufacturer: "Avro", country: "United Kingdom", era: "Cold War", type: "Bomber", firstFlight: 1952, image: "images/vulcan.jpg",
        description: "Britain's delta-winged V-bomber, star of the marathon Black Buck raids in the Falklands War."
    },
    {
        id: "b-1b", name: "B-1B Lancer", manufacturer: "Rockwell", country: "United States", era: "Cold War", type: "Bomber", firstFlight: 1974, image: "images/b-1b.jpg",
        description: "The swing-wing supersonic 'Bone', which traded its nuclear role for conventional heavy strike."
    },
    {
        id: "tu-160", name: "Tu-160 Blackjack", manufacturer: "Tupolev", country: "Soviet Union", era: "Cold War", type: "Bomber", firstFlight: 1981, image: "images/tu-160.jpg",
        description: "The 'White Swan' — the heaviest and fastest combat aircraft in service, a swing-wing supersonic bomber."
    },
    {
        id: "sr-71", name: "SR-71 Blackbird", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Reconnaissance", firstFlight: 1964, image: "images/sr-71.jpg",
        description: "The Mach 3+ reconnaissance legend that simply outran every missile ever fired at it."
    },
    {
        id: "u-2", name: "U-2 Dragon Lady", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Reconnaissance", firstFlight: 1955, image: "images/u-2.jpg",
        description: "The glider-like spyplane cruising above 70,000 feet on missions since 1955."
    },
    {
        id: "c-130", name: "C-130 Hercules", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Cargo", firstFlight: 1954, image: "images/c-130.jpg",
        description: "The West's do-everything tactical airlifter, in continuous production for over 70 years."
    },
    {
        id: "c-141", name: "C-141 Starlifter", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Cargo", firstFlight: 1963, image: "images/c-141.jpg",
        description: "The US Air Force's first purpose-built jet strategic airlifter."
    },
    {
        id: "c-5", name: "C-5 Galaxy", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Cargo", firstFlight: 1968, image: "images/c-5.jpg",
        description: "One of the largest military aircraft in the world, able to swallow tanks and helicopters whole."
    },
    {
        id: "an-124", name: "An-124 Ruslan", manufacturer: "Antonov", country: "Soviet Union", era: "Cold War", type: "Cargo", firstFlight: 1982, image: "images/an-124.jpg",
        description: "The giant Soviet strategic airlifter — the largest military transport aircraft in service."
    },
    {
        id: "an-225", name: "An-225 Mriya", manufacturer: "Antonov", country: "Soviet Union", era: "Cold War", type: "Cargo", firstFlight: 1988, image: "images/an-225.jpg",
        description: "The largest aircraft ever built. The sole example was destroyed at Hostomel in 2022."
    },
    {
        id: "il-76", name: "Il-76", manufacturer: "Ilyushin", country: "Soviet Union", era: "Cold War", type: "Cargo", firstFlight: 1971, image: "images/il-76.jpg",
        description: "Rugged four-jet Soviet airlifter designed to operate from rough, unpaved strips."
    },
    {
        id: "kc-135", name: "KC-135 Stratotanker", manufacturer: "Boeing", country: "United States", era: "Cold War", type: "Tanker", firstFlight: 1956, image: "images/kc-135.jpg",
        description: "The jet tanker that has fuelled the US Air Force for more than six decades."
    },
    {
        id: "f-14", name: "F-14 Tomcat", manufacturer: "Grumman", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1970, image: "images/f-14.jpg",
        description: "The swing-wing fleet defender of Top Gun fame — retired by the US Navy, still flown by Iran."
    },
    {
        id: "f-15", name: "F-15 Eagle", manufacturer: "McDonnell Douglas", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1972, image: "images/f-15.jpg",
        description: "The air-superiority heavyweight with a claimed air-to-air record of over 100 kills and zero losses."
    },
    {
        id: "f-16", name: "F-16 Fighting Falcon", manufacturer: "General Dynamics", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1974, image: "images/f-16.jpg",
        description: "The agile lightweight multirole 'Viper' — the most numerous fighter in service today."
    },
    {
        id: "fa-18", name: "F/A-18 Hornet", manufacturer: "McDonnell Douglas", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1978, image: "images/fa-18.jpg",
        description: "The US Navy's carrier multirole strike fighter and the mount of the Blue Angels."
    },
    {
        id: "mig-29", name: "MiG-29 Fulcrum", manufacturer: "Mikoyan", country: "Soviet Union", era: "Cold War", type: "Fighter", firstFlight: 1977, image: "images/mig-29.jpg",
        description: "The agile Soviet frontline fighter developed to counter the F-16."
    },
    {
        id: "su-27", name: "Su-27 Flanker", manufacturer: "Sukhoi", country: "Soviet Union", era: "Cold War", type: "Fighter", firstFlight: 1977, image: "images/su-27.jpg",
        description: "The big, super-manoeuvrable 'Flanker' that spawned an entire family of Russian fighters."
    },
    {
        id: "mig-31", name: "MiG-31 Foxhound", manufacturer: "Mikoyan", country: "Soviet Union", era: "Cold War", type: "Fighter", firstFlight: 1975, image: "images/mig-31.jpg",
        description: "The Mach 2.8 heavy interceptor built to patrol the vast approaches to Soviet airspace."
    },
    {
        id: "f-5", name: "F-5 Tiger II", manufacturer: "Northrop", country: "United States", era: "Cold War", type: "Fighter", firstFlight: 1959, image: "images/f-5.jpg",
        description: "The small, cheap supersonic fighter exported worldwide and beloved as an aggressor trainer."
    },
    {
        id: "f-117", name: "F-117 Nighthawk", manufacturer: "Lockheed", country: "United States", era: "Cold War", type: "Attack", firstFlight: 1981, image: "images/f-117.jpg",
        description: "The faceted 'stealth fighter' — actually an attack jet, and the first operational stealth aircraft."
    },
    {
        id: "mirage-2000", name: "Mirage 2000", manufacturer: "Dassault", country: "France", era: "Cold War", type: "Fighter", firstFlight: 1978, image: "images/mirage-2000.jpg",
        description: "France's delta multirole fighter of the 1980s and 90s, exported across the globe."
    },
    {
        id: "tornado", name: "Panavia Tornado", manufacturer: "Panavia", country: "Multinational", era: "Cold War", type: "Attack", firstFlight: 1974, image: "images/tornado.jpg",
        description: "The European swing-wing strike jet built for ultra-low-level penetration missions."
    },

    // ============ MODERN ERA ============
    {
        id: "b-2", name: "B-2 Spirit", manufacturer: "Northrop Grumman", country: "United States", era: "Modern", type: "Bomber", firstFlight: 1989, image: "images/b-2.jpg",
        description: "The flying-wing stealth bomber, nearly invisible to radar and unmistakable in the sky."
    },
    {
        id: "f-22", name: "F-22 Raptor", manufacturer: "Lockheed Martin", country: "United States", era: "Modern", type: "Fighter", firstFlight: 1997, image: "images/f-22.jpg",
        description: "The world's first fifth-generation fighter — stealth, supercruise and unmatched agility."
    },
    {
        id: "f-35", name: "F-35 Lightning II", manufacturer: "Lockheed Martin", country: "United States", era: "Modern", type: "Fighter", firstFlight: 2006, image: "images/f-35.jpg",
        description: "Stealth multirole fighter in three variants, born of the largest defence programme in history."
    },
    {
        id: "eurofighter", name: "Eurofighter Typhoon", manufacturer: "Eurofighter GmbH", country: "Multinational", era: "Modern", type: "Fighter", firstFlight: 1994, image: "images/eurofighter.jpg",
        description: "The four-nation canard-delta air-superiority fighter of Europe."
    },
    {
        id: "rafale", name: "Dassault Rafale", manufacturer: "Dassault", country: "France", era: "Modern", type: "Fighter", firstFlight: 1986, image: "images/rafale.jpg",
        description: "France's 'omnirole' fighter, flying from both land bases and the carrier Charles de Gaulle."
    },
    {
        id: "gripen", name: "JAS 39 Gripen", manufacturer: "Saab", country: "Sweden", era: "Modern", type: "Fighter", firstFlight: 1988, image: "images/gripen.jpg",
        description: "Sweden's clever lightweight fighter, designed to operate from stretches of ordinary highway."
    },
    {
        id: "su-57", name: "Su-57 Felon", manufacturer: "Sukhoi", country: "Russia", era: "Modern", type: "Fighter", firstFlight: 2010, image: "images/su-57.jpg",
        description: "Russia's first stealth fighter, blending low observability with Flanker-style agility."
    },
    {
        id: "j-20", name: "J-20 Mighty Dragon", manufacturer: "Chengdu", country: "China", era: "Modern", type: "Fighter", firstFlight: 2011, image: "images/j-20.jpg",
        description: "China's first stealth air-superiority fighter, with distinctive canards and a long, blended fuselage."
    },
    {
        id: "su-35", name: "Su-35 Flanker-E", manufacturer: "Sukhoi", country: "Russia", era: "Modern", type: "Fighter", firstFlight: 2008, image: "images/su-35.jpg",
        description: "The thrust-vectoring ultimate evolution of the Su-27 Flanker family."
    },
    {
        id: "c-17", name: "C-17 Globemaster III", manufacturer: "Boeing", country: "United States", era: "Modern", type: "Cargo", firstFlight: 1991, image: "images/c-17.jpg",
        description: "The strategic airlifter with tactical, short-field manners — able to land 77 tonnes on a dirt strip."
    },
    {
        id: "a400m", name: "A400M Atlas", manufacturer: "Airbus", country: "Multinational", era: "Modern", type: "Cargo", firstFlight: 2009, image: "images/a400m.jpg",
        description: "Europe's big turboprop airlifter, bridging the gap between the C-130 and the C-17."
    },
    {
        id: "kc-390", name: "KC-390 Millennium", manufacturer: "Embraer", country: "Brazil", era: "Modern", type: "Cargo", firstFlight: 2015, image: "images/kc-390.jpg",
        description: "Brazil's jet-powered tactical transport — the fastest airlifter in its class."
    },
    {
        id: "b-21", name: "B-21 Raider", manufacturer: "Northrop Grumman", country: "United States", era: "Modern", type: "Bomber", firstFlight: 2023, image: "images/b-21.jpg",
        description: "America's next-generation stealth bomber, first flown in 2023 and shrouded in secrecy."
    },
];
