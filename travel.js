 // ============================================================
        //  MOCK DATA — Kenyan destinations, priced in KES
        // ============================================================
        const destinations = {
            nairobi: {
                name: 'Nairobi', county: 'Nairobi County', emoji: '🏙️', tileColor: 'linear-gradient(135deg,#0B6E4F,#1487A8)',
                coords: { lat: -1.2864, lng: 36.8172 },
                essentials: { bestTime: 'June – October (dry season, cool evenings) and January – February', visa: 'eVisa required for most nationalities — apply online before you travel', currency: 'Kenyan Shilling (KSh); cards widely accepted, carry cash for matatus and boda bodas', tipping: '10% at sit-down restaurants; round up for boda boda and taxi rides', safety: "Keep valuables out of sight in the CBD at night; use Uber/Bolt after dark rather than hailing on the street" },
                weather: { temp: 22, condition: 'Partly Cloudy', humidity: 58, wind: '14 km/h', icon: 'fa-cloud-sun' },
                hotels: [
                    { name: 'Villa Rosa Kempinski', stars: 5, pricePerNight: 45000, rating: 4.7, reviews: 69, amenities: ['Pool', 'Spa', 'Rooftop Bar'], img: '🏨', type: 'City' },
                    { name: 'Sarova Stanley', stars: 5, pricePerNight: 28000, rating: 4.7, reviews: 370, amenities: ['Historic', 'Free WiFi', 'Restaurant'], img: '🏛️', type: 'City' },
                    { name: 'Nairobi Serena Hotel', stars: 4, pricePerNight: 26000, rating: 4.3, reviews: 609, amenities: ['Gardens', 'Gym', 'Spa'], img: '🌳', type: 'City' },
                    { name: 'Wildebeest Eco Camp', stars: 3, pricePerNight: 6500, rating: 4.2, reviews: 452, amenities: ['Garden Tents', 'Free WiFi', 'Bar'], img: '⛺', type: 'Budget' },
                ],
                restaurants: [
                    { name: 'Carnivore Restaurant', cuisine: 'Nyama Choma', priceBand: 'KSh 3,500 pp', price: 3500, rating: 4.2, reviews: 448, emoji: '🍖' },
                    { name: 'Talisman Restaurant', cuisine: 'Fusion', priceBand: 'KSh 2,800 pp', price: 2800, rating: 4.9, reviews: 447, emoji: '🍽️' },
                    { name: 'Mama Oliech', cuisine: 'Fish & Local', priceBand: 'KSh 1,200 pp', price: 1200, rating: 4.8, reviews: 68, emoji: '🐟' },
                    { name: 'Java House', cuisine: 'Coffee & Casual', priceBand: 'KSh 900 pp', price: 900, rating: 4.5, reviews: 135, emoji: '☕' },
                ],
                transport: [
                    { type: 'SGR Madaraka Express', icon: 'train', desc: 'Standard Gauge Railway to Mombasa', time: '6h', badge: 'Scenic', price: 'KSh 1,500', priceAvg: 1500 },
                    { type: 'Matatu', icon: 'bus', desc: 'Iconic shared minibuses around the city', time: '10–40 min', badge: 'Cheap', price: 'KSh 30–100', priceAvg: 65 },
                    { type: 'Boda Boda', icon: 'moto', desc: 'Motorbike taxi for short hops', time: '5–20 min', badge: 'Fast', price: 'KSh 100–300', priceAvg: 200 },
                    { type: 'Uber / Bolt', icon: 'car', desc: 'App-hailed taxis, 24/7', time: '10–30 min', badge: 'Convenient', price: 'KSh 300–900', priceAvg: 600 },
                ],
                activities: [
                    { name: 'Nairobi National Park Safari', price: 4300, duration: '3h', rating: 4.9, reviews: 113, icon: '🦁' },
                    { name: 'Giraffe Centre Feeding', price: 1500, duration: '1h', rating: 4.8, reviews: 409, icon: '🦒' },
                    { name: 'David Sheldrick Elephant Orphanage', price: 1000, duration: '1h', rating: 4.5, reviews: 252, icon: '🐘' },
                    { name: 'Karen Blixen Museum', price: 1200, duration: '1.5h', rating: 4.3, reviews: 548, icon: '🏡' },
                ]
            },
            'maasai mara': {
                name: 'Maasai Mara', county: 'Narok County', emoji: '🦁', tileColor: 'linear-gradient(135deg,#D6871B,#C81D25)',
                coords: { lat: -1.4061, lng: 35.0117 },
                essentials: { bestTime: 'July – October for the Great Migration; January – February for calving season', visa: 'eVisa required; a separate conservancy/park entry fee is paid on arrival', currency: 'KSh cash useful for tips and curio shops; most lodges accept card for the bill', tipping: 'KSh 1,500–2,500 per guest per day for your driver-guide is customary', safety: "Never leave the vehicle during game drives; follow your guide's instructions around wildlife at all times" },
                weather: { temp: 26, condition: 'Sunny', humidity: 46, wind: '11 km/h', icon: 'fa-sun' },
                hotels: [
                    { name: 'Fairmont Mara Safari Club', stars: 5, pricePerNight: 65000, rating: 4.9, reviews: 423, amenities: ['River View', 'Spa', 'Full Board'], img: '🏕️', type: 'Luxury' },
                    { name: 'Mara Serena Safari Lodge', stars: 5, pricePerNight: 48000, rating: 4.5, reviews: 412, amenities: ['Hilltop View', 'Pool', 'Guided Drives'], img: '🦓', type: 'Luxury' },
                    { name: 'Ashnil Mara Camp', stars: 4, pricePerNight: 30000, rating: 4.3, reviews: 838, amenities: ['Riverside Tents', 'Full Board'], img: '⛺', type: 'Tented Camp' },
                    { name: 'Mara Explorer Camp', stars: 3, pricePerNight: 15000, rating: 4.4, reviews: 934, amenities: ['Budget Tents', 'Bush Meals'], img: '🎪', type: 'Budget' },
                ],
                restaurants: [
                    { name: 'Mara Bush Dinner', cuisine: 'Open-Air Grill', priceBand: 'KSh 4,000 pp', price: 4000, rating: 4.9, reviews: 924, emoji: '🔥' },
                    { name: 'Sundowner Cocktail Point', cuisine: 'Drinks & Snacks', priceBand: 'KSh 1,800 pp', price: 1800, rating: 4.5, reviews: 948, emoji: '🍹' },
                    { name: 'Lodge Dining Hall', cuisine: 'Buffet, Full Board', priceBand: 'Included', price: 0, rating: 4.5, reviews: 524, emoji: '🍛' },
                    { name: 'Mara Picnic Lunch', cuisine: 'Packed Safari Lunch', priceBand: 'KSh 1,500 pp', price: 1500, rating: 4.4, reviews: 213, emoji: '🧺' },
                ],
                transport: [
                    { type: '4x4 Land Cruiser Safari', icon: 'car', desc: 'Pop-top game-viewing vehicle with driver-guide', time: 'Full day', badge: 'Essential', price: 'KSh 12,000/day', priceAvg: 12000 },
                    { type: 'Chartered Bush Flight', icon: 'plane', desc: 'Nairobi Wilson Airport to Mara airstrips', time: '45 min', badge: 'Fast', price: 'KSh 18,000', priceAvg: 18000 },
                    { type: 'Shared Safari Shuttle', icon: 'bus', desc: 'Road transfer from Nairobi', time: '5–6h', badge: 'Budget', price: 'KSh 3,500', priceAvg: 3500 },
                    { type: 'Guided Walking Safari', icon: 'walk', desc: 'Ranger-led bush walk near camp', time: '1–2h', badge: 'Immersive', price: 'KSh 2,500', priceAvg: 2500 },
                ],
                activities: [
                    { name: 'Big Five Game Drive', price: 6000, duration: '4h', rating: 4.9, reviews: 671, icon: '🐆' },
                    { name: 'Hot Air Balloon Safari', price: 55000, duration: '3h', rating: 4.6, reviews: 202, icon: '🎈' },
                    { name: 'Maasai Village Visit', price: 2000, duration: '1.5h', rating: 4.3, reviews: 380, icon: '🛡️' },
                    { name: 'Great Migration River Crossing', price: 8500, duration: '5h', rating: 4.9, reviews: 926, icon: '🐃' },
                ]
            },
            diani: {
                name: 'Diani Beach', county: 'Kwale County', emoji: '🏝️', tileColor: 'linear-gradient(135deg,#1487A8,#0F8C64)',
                coords: { lat: -4.3167, lng: 39.5667 },
                essentials: { bestTime: 'December – March (hot & dry) or July – September (cooler, less humid)', visa: 'eVisa required for most nationalities', currency: 'KSh for tuk-tuks and beach vendors; resorts accept cards', tipping: '10% at restaurants; small tips appreciated by beach boys and tour guides', safety: "Use reef shoes when swimming over coral; agree tuk-tuk fares before you set off" },
                weather: { temp: 31, condition: 'Sunny & Humid', humidity: 74, wind: '16 km/h', icon: 'fa-sun' },
                hotels: [
                    { name: 'Baobab Beach Resort & Spa', stars: 5, pricePerNight: 32000, rating: 4.8, reviews: 370, amenities: ['Beachfront', 'Pool', 'Spa'], img: '🌴', type: 'Beach Resort' },
                    { name: 'Sarova Whitesands', stars: 5, pricePerNight: 30000, rating: 4.7, reviews: 101, amenities: ['Beachfront', 'Water Sports'], img: '🏖️', type: 'Beach Resort' },
                    { name: 'Diani Reef Beach Resort', stars: 4, pricePerNight: 21000, rating: 4.2, reviews: 352, amenities: ['Casino', 'Pool', 'Spa'], img: '🐚', type: 'Beach Resort' },
                    { name: 'Distant Relatives Backpackers', stars: 3, pricePerNight: 3500, rating: 4.2, reviews: 255, amenities: ['Dorms', 'Beach Bar', 'Garden'], img: '🎒', type: 'Budget' },
                ],
                restaurants: [
                    { name: "Ali Barbour's Cave Restaurant", cuisine: 'Seafood, Coral Cave', priceBand: 'KSh 3,200 pp', price: 3200, rating: 4.6, reviews: 423, emoji: '🦞' },
                    { name: 'Nomad Beach Bar', cuisine: 'Grill & Cocktails', priceBand: 'KSh 2,000 pp', price: 2000, rating: 4.7, reviews: 572, emoji: '🍤' },
                    { name: 'Forty Thieves Beach Bar', cuisine: 'Swahili & Grill', priceBand: 'KSh 1,800 pp', price: 1800, rating: 4.7, reviews: 568, emoji: '🦐' },
                    { name: 'Swahili Plate', cuisine: 'Local Coastal', priceBand: 'KSh 1,000 pp', price: 1000, rating: 4.2, reviews: 463, emoji: '🍚' },
                ],
                transport: [
                    { type: 'Tuk-Tuk', icon: 'tuktuk', desc: 'Three-wheeler taxi along the beach road', time: '5–20 min', badge: 'Fun', price: 'KSh 150–400', priceAvg: 275 },
                    { type: 'Likoni Ferry', icon: 'boat', desc: 'Free ferry linking Mombasa Island to the South Coast', time: '5 min', badge: 'Free', price: 'Free', priceAvg: 0 },
                    { type: 'Boda Boda', icon: 'moto', desc: 'Motorbike taxi for quick trips', time: '5–15 min', badge: 'Fast', price: 'KSh 100–250', priceAvg: 175 },
                    { type: 'SGR + Taxi Transfer', icon: 'train', desc: 'Train from Nairobi, then road to Diani', time: '6-71/2h total', badge: 'Scenic', price: 'KSh 2,000+', priceAvg: 2000 },
                ],
                activities: [
                    { name: 'Coral Reef Snorkeling', price: 3000, duration: '2h', rating: 4.7, reviews: 160, icon: '🤿' },
                    { name: 'Wasini Island Dolphin Tour', price: 6500, duration: '6h', rating: 4.8, reviews: 814, icon: '🐬' },
                    { name: 'Kite Surfing Lesson', price: 5500, duration: '2h', rating: 4.6, reviews: 582, icon: '🏄' },
                    { name: 'Shimba Hills Day Trip', price: 4000, duration: '5h', rating: 4.7, reviews: 51, icon: '🌲' },
                ]
            },
            naivasha: {
                name: 'Naivasha', county: 'Nakuru County', emoji: '🦩', tileColor: 'linear-gradient(135deg,#0F8C64,#F2A93B)',
                coords: { lat: -0.7172, lng: 36.431 },
                essentials: { bestTime: 'June – September and January – February for clear skies over the lake', visa: 'eVisa required for most nationalities', currency: 'KSh cash recommended for boat rides and park fees', tipping: "KSh 500–1,000 for boat operators and cycling guides at Hell's Gate", safety: "Keep a safe distance from hippos and buffalo along the lakeshore, especially at dusk" },
                weather: { temp: 24, condition: 'Sunny', humidity: 52, wind: '13 km/h', icon: 'fa-sun' },
                hotels: [
                    { name: 'Lake Naivasha Sopa Resort', stars: 5, pricePerNight: 24000, rating: 4.8, reviews: 770, amenities: ['Lake View', 'Pool', 'Gardens'], img: '🦩', type: 'Resort' },
                    { name: 'Enashipai Resort & Spa', stars: 5, pricePerNight: 22000, rating: 4.7, reviews: 964, amenities: ['Spa', 'Pool', 'Golf'], img: '🌺', type: 'Resort' },
                    { name: 'Chester Safari Club', stars: 4, pricePerNight: 14000, rating: 4.4, reviews: 415, amenities: ['Lake Access', 'Restaurant'], img: '🚤', type: 'Lodge' },
                    { name: "Fisherman's Camp", stars: 3, pricePerNight: 3000, rating: 4.7, reviews: 394, amenities: ['Camping', 'Cottages', 'Lake Access'], img: '⛺', type: 'Budget' },
                    { name: 'Great Rift Valley Lodge & Golf Resort', stars: 5, pricePerNight: 28000, rating: 4.6, reviews: 512, amenities: ['Golf Course', 'Spa', 'Rift Valley View'], img: '⛳', type: 'Resort' },
                    { name: 'Elsamere Conservation Centre', stars: 3, pricePerNight: 9000, rating: 4.5, reviews: 268, amenities: ['Lakefront', 'Museum', 'Nature Trails'], img: '🦁', type: 'Lodge' },
                ],
                restaurants: [
                    { name: 'La Belle Inn', cuisine: 'Continental & Local', priceBand: 'KSh 1,800 pp', price: 1800, rating: 4.6, reviews: 177, emoji: '🍝' },
                    { name: 'Cooker\'s Restaurant', cuisine: 'Nyama Choma', priceBand: 'KSh 1,500 pp', price: 1500, rating: 4.8, reviews: 833, emoji: '🍖' },
                    { name: 'Naivasha Sailing Club', cuisine: 'Grill & Lake View', priceBand: 'KSh 2,200 pp', price: 2200, rating: 4.9, reviews: 778, emoji: '⛵' },
                    { name: 'Lake View Restaurant', cuisine: 'Local & Fish', priceBand: 'KSh 1,200 pp', price: 1200, rating: 4.5, reviews: 467, emoji: '🐟' },
                    { name: 'Elsamere Dining Room', cuisine: 'Afternoon Tea & Lunch', priceBand: 'KSh 1,600 pp', price: 1600, rating: 4.4, reviews: 189, emoji: '🍰' },
                    { name: 'Kongoni Camp Restaurant', cuisine: 'Grill & Local', priceBand: 'KSh 1,400 pp', price: 1400, rating: 4.3, reviews: 156, emoji: '🍢' },
                ],
                transport: [
                    { type: 'Matatu', icon: 'bus', desc: 'Frequent minibuses from Nairobi', time: '1h 30m', badge: 'Cheap', price: 'KSh 300', priceAvg: 300 },
                    { type: 'Private Car Hire', icon: 'car', desc: 'Self-drive or chauffeured car', time: 'Flexible', badge: 'Comfort', price: 'KSh 6,000/day', priceAvg: 6000 },
                    { type: 'Boda Boda', icon: 'moto', desc: 'Motorbike taxi around town', time: '5–15 min', badge: 'Fast', price: 'KSh 100–200', priceAvg: 150 },
                    { type: 'Bicycle Rental', icon: 'bike', desc: 'Pedal through Hell\'s Gate National Park', time: '2–4h', badge: 'Eco', price: 'KSh 500/day', priceAvg: 500 },
                ],
                activities: [
                    { name: 'Lake Naivasha Boat Ride', price: 2500, duration: '1.5h', rating: 4.9, reviews: 657, icon: '🛶' },
                    { name: 'Hell\'s Gate Cycling Safari', price: 3200, duration: '3h', rating: 4.9, reviews: 542, icon: '🚴' },
                    { name: 'Crescent Island Walking Safari', price: 3000, duration: '2h', rating: 4.7, reviews: 912, icon: '🦓' },
                    { name: 'Mount Longonot Hike', price: 2200, duration: '4h', rating: 4.5, reviews: 276, icon: '🥾' },
                    { name: 'Elsamere Nature Walk & Colobus Monkeys', price: 1000, duration: '1.5h', rating: 4.4, reviews: 143, icon: '🐒' },
                    { name: 'Great Rift Valley Viewpoint Stop', price: 0, duration: '30 min', rating: 4.6, reviews: 389, icon: '🏞️' },
                ]
            },
            nanyuki: {
                name: 'Nanyuki', county: 'Laikipia County', emoji: '🏔️', tileColor: 'linear-gradient(135deg,#1487A8,#0B6E4F)',
                coords: { lat: 0.0167, lng: 37.0667 },
                essentials: { bestTime: 'June – October (clear mountain views) and January – February', visa: 'eVisa required for most nationalities', currency: 'KSh cash useful in Nanyuki town; conservancies and lodges accept cards', tipping: 'KSh 1,000–2,000 per day for rhino-tracking rangers and drivers', safety: "Evenings get cold — pack warm layers; altitude sickness is possible on Mount Kenya hikes" },
                weather: { temp: 19, condition: 'Cool & Clear', humidity: 60, wind: '9 km/h', icon: 'fa-cloud' },
                hotels: [
                    { name: 'Fairmont Mount Kenya Safari Club', stars: 5, pricePerNight: 42000, rating: 4.5, reviews: 680, amenities: ['Mountain View', 'Golf', 'Spa'], img: '🏔️', type: 'Luxury' },
                    { name: 'Ol Pejeta Bush Camp', stars: 5, pricePerNight: 38000, rating: 4.4, reviews: 333, amenities: ['Conservancy Access', 'Full Board'], img: '🦏', type: 'Tented Camp' },
                    { name: 'Sportsman\'s Arms Hotel', stars: 4, pricePerNight: 12000, rating: 4.6, reviews: 574, amenities: ['Gardens', 'Restaurant'], img: '🏡', type: 'Hotel' },
                    { name: 'Trout Tree Lodge', stars: 3, pricePerNight: 8500, rating: 4.5, reviews: 908, amenities: ['Treehouse Dining', 'River View'], img: '🌳', type: 'Lodge' },
                    { name: 'Borana Lodge', stars: 5, pricePerNight: 55000, rating: 4.9, reviews: 297, amenities: ['Horseback Safaris', 'Infinity Pool', 'Full Board'], img: '🐎', type: 'Luxury' },
                    { name: 'Ibis Hotel Nanyuki', stars: 3, pricePerNight: 7000, rating: 4.3, reviews: 421, amenities: ['Free WiFi', 'Restaurant', 'Garden'], img: '🏨', type: 'Hotel' },
                ],
                restaurants: [
                    { name: 'Cape Chestnut Restaurant', cuisine: 'Farm-to-Table', priceBand: 'KSh 2,200 pp', price: 2200, rating: 4.3, reviews: 142, emoji: '🥗' },
                    { name: 'Trout Tree Restaurant', cuisine: 'Fresh Trout', priceBand: 'KSh 1,900 pp', price: 1900, rating: 4.7, reviews: 375, emoji: '🐟' },
                    { name: 'Marina Grill', cuisine: 'Nyama Choma', priceBand: 'KSh 1,600 pp', price: 1600, rating: 4.5, reviews: 739, emoji: '🍖' },
                    { name: 'Nanyuki Sports Club', cuisine: 'Casual & Bar', priceBand: 'KSh 1,300 pp', price: 1300, rating: 4.5, reviews: 324, emoji: '🍺' },
                    { name: 'Le Rustique', cuisine: 'French-Kenyan Fusion', priceBand: 'KSh 2,000 pp', price: 2000, rating: 4.7, reviews: 261, emoji: '🍷' },
                    { name: "Barney's Restaurant", cuisine: 'Casual, Airstrip Café', priceBand: 'KSh 1,400 pp', price: 1400, rating: 4.4, reviews: 198, emoji: '☕' },
                ],
                transport: [
                    { type: 'Matatu', icon: 'bus', desc: 'Direct routes from Nairobi via Nyeri', time: '3h', badge: 'Cheap', price: 'KSh 600', priceAvg: 600 },
                    { type: '4x4 Hire', icon: 'car', desc: 'Essential for conservancy game drives', time: 'Full day', badge: 'Essential', price: 'KSh 9,000/day', priceAvg: 9000 },
                    { type: 'Boda Boda', icon: 'moto', desc: 'Around Nanyuki town', time: '5–15 min', badge: 'Fast', price: 'KSh 100–250', priceAvg: 175 },
                    { type: 'Shuttle Bus', icon: 'bus', desc: 'Scheduled shuttle from Nairobi CBD', time: '3h 30m', badge: 'Reliable', price: 'KSh 800', priceAvg: 800 },
                ],
                activities: [
                    { name: 'Ol Pejeta Chimpanzee Sanctuary', price: 2500, duration: '2h', rating: 4.5, reviews: 887, icon: '🐵' },
                    { name: 'Rhino Tracking on Foot', price: 4500, duration: '2h', rating: 4.8, reviews: 411, icon: '🦏' },
                    { name: 'Equator Line Photo Stop', price: 0, duration: '20 min', rating: 4.5, reviews: 716, icon: '🌍' },
                    { name: 'Mount Kenya Day Hike', price: 5000, duration: '6h', rating: 4.5, reviews: 650, icon: '🥾' },
                    { name: 'Horseback Safari at Borana', price: 6000, duration: '2h', rating: 4.8, reviews: 205, icon: '🐎' },
                    { name: 'Nanyuki Spinners & Weavers Visit', price: 800, duration: '1h', rating: 4.4, reviews: 97, icon: '🧶' },
                ]
            },
            lamu: {
                name: 'Lamu', county: 'Lamu County', emoji: '⛵', tileColor: 'linear-gradient(135deg,#C81D25,#F2A93B)',
                coords: { lat: -2.2717, lng: 40.902 },
                essentials: { bestTime: 'July – October and December – March, avoiding the April – May long rains', visa: 'eVisa required for most nationalities', currency: 'KSh cash essential — cars are banned in Old Town and few vendors take cards', tipping: '10% at restaurants; small tips for dhow captains are customary', safety: "Dress modestly in Lamu Old Town out of respect for local Swahili culture; confirm dhow safety gear before sailing" },
                weather: { temp: 30, condition: 'Sunny & Humid', humidity: 71, wind: '17 km/h', icon: 'fa-sun' },
                hotels: [
                    { name: 'Peponi Hotel', stars: 5, pricePerNight: 34000, rating: 4.8, reviews: 502, amenities: ['Beachfront', 'Dhow Trips', 'Bar'], img: '🏖️', type: 'Boutique' },
                    { name: 'Lamu House Hotel', stars: 4, pricePerNight: 18000, rating: 4.7, reviews: 754, amenities: ['Rooftop', 'Old Town Views'], img: '🕌', type: 'Boutique' },
                    { name: 'Kijani House Hotel', stars: 4, pricePerNight: 16000, rating: 4.9, reviews: 985, amenities: ['Garden', 'Pool'], img: '🌿', type: 'Boutique' },
                    { name: 'Shela Beach House', stars: 3, pricePerNight: 7000, rating: 4.7, reviews: 367, amenities: ['Beach Access', 'Self-Catering'], img: '🏠', type: 'Budget' },
                ],
                restaurants: [
                    { name: 'Whispers Coffee House', cuisine: 'Cafe & Bakery', priceBand: 'KSh 1,000 pp', price: 1000, rating: 4.9, reviews: 298, emoji: '☕' },
                    { name: 'Bush Gardens', cuisine: 'Seafood & Swahili', priceBand: 'KSh 1,800 pp', price: 1800, rating: 4.4, reviews: 525, emoji: '🦑' },
                    { name: 'Yumbe House', cuisine: 'Traditional Swahili', priceBand: 'KSh 1,500 pp', price: 1500, rating: 4.6, reviews: 890, emoji: '🍛' },
                    { name: 'Olympic Restaurant', cuisine: 'Local Grill', priceBand: 'KSh 900 pp', price: 900, rating: 4.3, reviews: 666, emoji: '🍢' },
                ],
                transport: [
                    { type: 'Dhow Sailing Boat', icon: 'boat', desc: 'Traditional wooden sailboat, the island\'s icon', time: '30 min – 2h', badge: 'Iconic', price: 'KSh 1,500', priceAvg: 1500 },
                    { type: 'Donkey', icon: 'donkey', desc: 'Cars are banned in Lamu Old Town — donkeys rule', time: 'Local', badge: 'Traditional', price: 'Free / Tip', priceAvg: 0 },
                    { type: 'Speed Boat Taxi', icon: 'boat', desc: 'Quick transfer between islands', time: '10–20 min', badge: 'Fast', price: 'KSh 500–1,500', priceAvg: 1000 },
                    { type: 'Water Taxi', icon: 'boat', desc: 'Shared boat to Shela and Manda', time: '15 min', badge: 'Scenic', price: 'KSh 300', priceAvg: 300 },
                ],
                activities: [
                    { name: 'Lamu Old Town Walking Tour', price: 1500, duration: '2h', rating: 4.3, reviews: 670, icon: '🕌' },
                    { name: 'Dhow Sunset Cruise', price: 2500, duration: '2h', rating: 4.3, reviews: 748, icon: '⛵' },
                    { name: 'Shela Beach Day', price: 0, duration: 'Half day', rating: 4.2, reviews: 517, icon: '🏝️' },
                    { name: 'Lamu Museum Visit', price: 500, duration: '1h', rating: 4.5, reviews: 618, icon: '🖼️' },
                ]
            }
        };
        Object.keys(destinations).forEach(k => { destinations[k].__key = k; });

        let currentDestination = 'nairobi';
        let travelerCount = 2;
        let tripNights = 3;
        let currentCurrency = 'KES';       // 'KES' or 'USD'
        const USD_RATE = 129;              // approx KSh per $1, for reference only
        let budgetCap = 70000;             // per-traveler daily budget in KSh; 70000 = "no limit"
        const BUDGET_MAX = 70000;
        let tripPlan = [];                 // { id, name, emoji, category, priceKES, nights }
        let packingChecked = new Set();
        let faqOpen = new Set();

        // TripAdvisor-style chip filters (reset whenever destination changes)
        let hotelFilters = { stars: new Set(), amenities: new Set(), topRated: false };
        let restoFilters = { cuisines: new Set(), topRated: false };
        let actFilters = { free: false, topRated: false, duration: null };

        function resetSectionFilters() {
            hotelFilters = { stars: new Set(), amenities: new Set(), topRated: false };
            restoFilters = { cuisines: new Set(), topRated: false };
            actFilters = { free: false, topRated: false, duration: null };
        }

        // ============================================================
        //  DOM REFS
        // ============================================================
        const searchInput = document.getElementById('searchInput');
        const travelerCountEl = document.getElementById('travelerCount');
        const headerTravelerCount = document.getElementById('headerTravelerCount');

        const statWeather = document.getElementById('statWeather');
        const statHotels = document.getElementById('statHotels');
        const statTransport = document.getElementById('statTransport');
        const statActivities = document.getElementById('statActivities');

        const weatherLocation = document.getElementById('weatherLocation');
        const weatherTemp = document.getElementById('weatherTemp');
        const weatherCity = document.getElementById('weatherCity');
        const weatherCondition = document.getElementById('weatherCondition');
        const weatherHumidity = document.getElementById('weatherHumidity');
        const weatherConditionLabel = document.getElementById('weatherConditionLabel');
        const weatherHumidityVal = document.getElementById('weatherHumidityVal');
        const weatherWind = document.getElementById('weatherWind');

        const hotelsGrid = document.getElementById('hotelsGrid');
        const hotelSub = document.getElementById('hotelSub');
        const restaurantsGrid = document.getElementById('restaurantsGrid');
        const restaurantSub = document.getElementById('restaurantSub');
        const transportGrid = document.getElementById('transportGrid');
        const activitiesGrid = document.getElementById('activitiesGrid');
        const activitySub = document.getElementById('activitySub');
        const destPicker = document.getElementById('destPicker');

        // ============================================================
        //  NAV / PAGE SWITCHING
        // ============================================================
        function showPage(page) {
            document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
            document.getElementById('page-' + page).classList.add('active');
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.page === page));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // ============================================================
        //  HELPERS
        // ============================================================
        function getDestination(query) {
            const key = query.toLowerCase().trim();
            if (destinations[key]) return key;
            const keys = Object.keys(destinations);
            for (const k of keys) {
                if (k.includes(key) || destinations[k].name.toLowerCase().includes(key)) return k;
            }
            return null;
        }

        function formatKES(priceKES, travelers) {
            const totalKES = priceKES * travelers;
            if (currentCurrency === 'USD') {
                const usd = totalKES / USD_RATE;
                return `$${usd.toLocaleString('en-US', { maximumFractionDigits: usd < 100 ? 2 : 0 })}`;
            }
            return `KSh ${totalKES.toLocaleString('en-KE')}`;
        }

        function starsHTML(count) {
            return '★'.repeat(count) + '☆'.repeat(5 - count);
        }

        function isNoLimit() {
            return budgetCap >= BUDGET_MAX;
        }

        function withinBudget(perTravelerPriceKES) {
            if (isNoLimit()) return true;
            return perTravelerPriceKES <= budgetCap;
        }

        // ============================================================
        //  CURRENCY TOGGLE
        // ============================================================
        function toggleCurrency() {
            currentCurrency = currentCurrency === 'KES' ? 'USD' : 'KES';
            document.getElementById('currencyLabel').textContent = currentCurrency;
            if (currentDestination && destinations[currentDestination]) renderAll(currentDestination);
            renderTripDrawer();
            showToast(currentCurrency === 'USD'
                ? 'Showing approximate USD prices (KSh 129 ≈ $1)'
                : 'Showing prices in Kenya Shillings (KSh)');
        }

        // ============================================================
        //  BUDGET PLANNER
        // ============================================================
        const BUDGET_PRESETS = [
            { daily: 2500, icon: 'fa-backpack', name: 'Shoestring', desc: 'Hostels & budget camps, street food, matatus' },
            { daily: 8000, icon: 'fa-suitcase', name: 'Mid-range', desc: '3–4 star hotels, casual restaurants, one activity a day' },
            { daily: 20000, icon: 'fa-champagne-glasses', name: 'Comfort', desc: '4–5 star hotels & lodges, sit-down dining, guided activities' },
            { daily: 70000, icon: 'fa-gem', name: 'Luxury / No limit', desc: 'Five-star lodges & resorts, fine dining, private guides' },
        ];

        function renderBudgetPresets() {
            document.getElementById('budgetPresets').innerHTML = BUDGET_PRESETS.map(p => {
                const total = p.daily * tripNights;
                const active = budgetCap === p.daily;
                return `<button data-val="${p.daily}" title="${p.desc}" class="${active ? 'active' : ''}" onclick="setBudgetPreset(${p.daily})"><i class="fas ${p.icon}"></i> ${p.name} · ${formatKES(total, 1)}</button>`;
            }).join('');
        }

        function updateBudgetLabel() {
            document.getElementById('budgetNightsInline').textContent = tripNights;
            const label = document.getElementById('budgetValueLabel');
            const sub = document.getElementById('budgetValueSub');
            if (isNoLimit()) {
                label.textContent = 'No limit';
                sub.textContent = `for your ${tripNights}-night trip`;
            } else {
                label.textContent = formatKES(budgetCap * tripNights, 1);
                sub.textContent = `≈ ${formatKES(budgetCap, 1)}/day × ${tripNights} nights`;
            }
            renderBudgetPresets();
            updateBudgetGuidance();
        }

        function toggleBudgetInfo() {
            const box = document.getElementById('budgetInfoBox');
            box.style.display = box.style.display === 'none' ? 'block' : 'none';
        }

        function updateBudgetGuidance() {
            const el = document.getElementById('budgetGuidance');
            if (isNoLimit()) {
                el.textContent = 'No limit set — every stay, restaurant, transport option and activity will be shown, from budget to five-star.';
                return;
            }
            const total = budgetCap * tripNights;
            let tier;
            if (budgetCap <= 3000) tier = "hostels & budget camps, street food and self-guided activities";
            else if (budgetCap <= 10000) tier = "3–4 star hotels, casual sit-down restaurants and one paid activity a day";
            else if (budgetCap <= 30000) tier = "4–5 star hotels & lodges, proper restaurant dining and guided activities";
            else tier = "almost everything, including five-star lodges and premium safaris";
            el.textContent = `${formatKES(total, 1)} total for your ${tripNights}-night trip (≈ ${formatKES(budgetCap, 1)}/day) gets you ${tier}.`;
        }

        function onBudgetChange() {
            budgetCap = parseInt(document.getElementById('budgetSlider').value, 10);
            updateBudgetLabel();
            if (currentDestination && destinations[currentDestination]) renderAll(currentDestination);
        }

        function setBudgetPreset(val) {
            budgetCap = val;
            document.getElementById('budgetSlider').value = val;
            updateBudgetLabel();
            if (currentDestination && destinations[currentDestination]) renderAll(currentDestination);
        }

        function updateBudgetSnapshot(data) {
            const snapshot = document.getElementById('budgetSnapshot');
            if (!data) { snapshot.innerHTML = ''; return; }
            const cheapestHotel = [...data.hotels].sort((a, b) => a.pricePerNight - b.pricePerNight)[0];
            const cheapestMeal = [...data.restaurants].sort((a, b) => a.price - b.price)[0];
            const cheapestActivity = [...data.activities].sort((a, b) => a.price - b.price)[0];
            const estDaily = cheapestHotel.pricePerNight + (cheapestMeal.price * 3) + cheapestActivity.price;
            const estTrip = (cheapestHotel.pricePerNight * tripNights) + (cheapestMeal.price * 3 * tripNights) + cheapestActivity.price;
            const totalBudget = budgetCap * tripNights;
            const fits = isNoLimit() || estTrip <= totalBudget;
            snapshot.innerHTML = `
                <span class="snap-item"><i class="fas fa-bed"></i> Cheapest stay: ${formatKES(cheapestHotel.pricePerNight, 1)}/night</span>
                <span class="snap-item"><i class="fas fa-utensils"></i> ~3 meals: ${formatKES(cheapestMeal.price * 3, 1)}/day</span>
                <span class="snap-item"><i class="fas fa-hiking"></i> 1 activity: ${cheapestActivity.price === 0 ? 'Free' : formatKES(cheapestActivity.price, 1)}</span>
                <span class="snap-item ${fits ? 'ok' : 'warn'}"><i class="fas fa-${fits ? 'circle-check' : 'triangle-exclamation'}"></i> Leanest ${tripNights}-night trip: ${formatKES(estTrip, 1)}${fits ? ' — fits your budget' : ' — above your budget'}</span>
            `;
        }

        // ============================================================
        //  TRIP PLAN (session-based, resets on reload)
        //  category format: "Stay · DestName" / "Dining · DestName" / "Activity · DestName"
        // ============================================================
        function addToTrip(id, name, emoji, category, priceKES) {
            const exists = tripPlan.find(t => t.id === id);
            if (exists) {
                tripPlan = tripPlan.filter(t => t.id !== id);
                showToast(`Removed "${name}" from your trip plan`);
            } else {
                const isStay = category.startsWith('Stay');
                tripPlan.push({ id, name, emoji, category, priceKES, nights: isStay ? tripNights : null });
                showToast(`Added "${name}" to your trip plan!`);
            }
            updateTripCount();
            renderTripDrawer();
            if (currentDestination && destinations[currentDestination]) renderAll(currentDestination);
        }

        function removeFromTrip(id) {
            tripPlan = tripPlan.filter(t => t.id !== id);
            updateTripCount();
            renderTripDrawer();
            if (currentDestination && destinations[currentDestination]) renderAll(currentDestination);
        }

        function changeItemNights(id, delta) {
            const item = tripPlan.find(t => t.id === id);
            if (!item) return;
            const newVal = (item.nights || 1) + delta;
            if (newVal < 1 || newVal > 30) return;
            item.nights = newVal;
            renderTripDrawer();
        }

        function updateTripCount() {
            document.getElementById('tripCount').textContent = tripPlan.length;
        }

        function toggleDrawer(open) {
            document.getElementById('tripDrawer').classList.toggle('show', open);
            document.getElementById('drawerOverlay').classList.toggle('show', open);
        }

        function itemTotalKES(t) {
            const mult = t.category.startsWith('Stay') ? (t.nights || 1) : 1;
            return t.priceKES * travelerCount * mult;
        }

        function renderTripDrawer() {
            const summaryEl = document.getElementById('itinerarySummary');
            const listEl = document.getElementById('tripItemsList');
            const totalEl = document.getElementById('tripTotal');

            if (tripPlan.length === 0) {
                summaryEl.innerHTML = '';
                listEl.innerHTML = `<div class="trip-empty"><i class="fas fa-suitcase-rolling"></i><h3 style="font-family:var(--font-display);">Your trip is empty</h3><p>Tap "Add to Trip" or the ♥ on hotels, restaurants, or activities to build your itinerary here.</p></div>`;
                totalEl.textContent = formatKES(0, 1);
                return;
            }

            // Group by destination (parsed from "Type · Destination")
            const groups = {};
            tripPlan.forEach(t => {
                const destName = t.category.split(' · ')[1] || 'Other';
                if (!groups[destName]) groups[destName] = [];
                groups[destName].push(t);
            });

            const destCount = Object.keys(groups).length;
            const totalNights = Object.values(groups).reduce((sum, items) => {
                const stay = items.find(i => i.category.startsWith('Stay'));
                return sum + (stay ? stay.nights : 0);
            }, 0);
            const grandTotal = tripPlan.reduce((sum, t) => sum + itemTotalKES(t), 0);

            summaryEl.innerHTML = `
                <div class="itinerary-summary">
                    <div class="isum-item"><div class="num">${destCount}</div><div class="lbl">Destinations</div></div>
                    <div class="isum-item"><div class="num">${totalNights}</div><div class="lbl">Total Nights</div></div>
                    <div class="isum-item"><div class="num">${tripPlan.length}</div><div class="lbl">Items</div></div>
                </div>
            `;

            listEl.innerHTML = Object.keys(groups).map(destName => `
                <div class="trip-dest-group">
                    <h4><i class="fas fa-location-dot" style="color:var(--gold-dark);"></i> ${destName}</h4>
                    ${groups[destName].map(t => `
                        <div class="trip-item">
                            <span class="ti-emoji">${t.emoji}</span>
                            <div class="ti-info">
                                <h5>${t.name}</h5>
                                <span>${t.category.split(' · ')[0]} · ${t.priceKES === 0 ? 'Free' : formatKES(itemTotalKES(t), 1)}</span>
                            </div>
                            ${t.category.startsWith('Stay') ? `
                                <div class="nights-mini">
                                    <button onclick="changeItemNights('${t.id}', -1)">−</button>
                                    <span>${t.nights}n</span>
                                    <button onclick="changeItemNights('${t.id}', 1)">+</button>
                                </div>
                            ` : ''}
                            <button class="ti-remove" onclick="removeFromTrip('${t.id}')"><i class="fas fa-trash"></i></button>
                        </div>
                    `).join('')}
                </div>
            `).join('');

            totalEl.textContent = formatKES(grandTotal, 1);
        }

        // ============================================================
        //  RENDER: DESTINATION PICKER
        // ============================================================
        function renderDestPicker() {
            destPicker.innerHTML = Object.keys(destinations).map(key => {
                const d = destinations[key];
                return `
                    <div class="dest-tile fade-up" style="background:${d.tileColor};" onclick="quickSearch('${key}')">
                        <span class="tile-emoji">${d.emoji}</span>
                        <h4>${d.name}</h4>
                        <span>${d.county}</span>
                    </div>
                `;
            }).join('');
        }

        // ============================================================
        //  RENDER FUNCTIONS
        // ============================================================
        function slug(str) {
            return str.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        }

        function inTrip(id) {
            return tripPlan.some(t => t.id === id);
        }

        // ============================================================
        //  FILTER CHIPS — hotels
        // ============================================================
        function renderHotelFilterChips(data) {
            const starsAvailable = [...new Set(data.hotels.map(h => h.stars))].sort((a, b) => b - a);
            const amenityCounts = {};
            data.hotels.forEach(h => h.amenities.forEach(a => { amenityCounts[a] = (amenityCounts[a] || 0) + 1; }));
            const topAmenities = Object.keys(amenityCounts).sort((a, b) => amenityCounts[b] - amenityCounts[a]).slice(0, 5);

            const chips = [];
            chips.push(`<button class="filter-chip ${hotelFilters.topRated ? 'active' : ''}" onclick="toggleHotelTopRated()"><i class="fas fa-star"></i> 4.5+ Rated</button>`);
            starsAvailable.forEach(s => {
                chips.push(`<button class="filter-chip ${hotelFilters.stars.has(s) ? 'active' : ''}" onclick="toggleHotelStarFilter(${s})">${s}★ Class</button>`);
            });
            topAmenities.forEach(a => {
                chips.push(`<button class="filter-chip ${hotelFilters.amenities.has(a) ? 'active' : ''}" onclick="toggleHotelAmenityFilter('${a.replace(/'/g, "\\'")}')">${a}</button>`);
            });
            if (hotelFilters.topRated || hotelFilters.stars.size > 0 || hotelFilters.amenities.size > 0) {
                chips.push(`<button class="filter-chip-clear" onclick="clearHotelFilters()"><i class="fas fa-xmark"></i> Clear</button>`);
            }
            document.getElementById('hotelFilterChips').innerHTML = chips.join('');
        }

        function toggleHotelTopRated() { hotelFilters.topRated = !hotelFilters.topRated; renderAll(currentDestination); }
        function toggleHotelStarFilter(s) { hotelFilters.stars.has(s) ? hotelFilters.stars.delete(s) : hotelFilters.stars.add(s); renderAll(currentDestination); }
        function toggleHotelAmenityFilter(a) { hotelFilters.amenities.has(a) ? hotelFilters.amenities.delete(a) : hotelFilters.amenities.add(a); renderAll(currentDestination); }
        function clearHotelFilters() { hotelFilters = { stars: new Set(), amenities: new Set(), topRated: false }; renderAll(currentDestination); }

        function matchesHotelFilters(h) {
            if (hotelFilters.topRated && h.rating < 4.5) return false;
            if (hotelFilters.stars.size > 0 && !hotelFilters.stars.has(h.stars)) return false;
            for (const a of hotelFilters.amenities) if (!h.amenities.includes(a)) return false;
            return true;
        }

        // ============================================================
        //  FILTER CHIPS — restaurants
        // ============================================================
        function renderRestaurantFilterChips(data) {
            const cuisines = [...new Set(data.restaurants.map(r => r.cuisine))];
            const chips = [];
            chips.push(`<button class="filter-chip ${restoFilters.topRated ? 'active' : ''}" onclick="toggleRestoTopRated()"><i class="fas fa-star"></i> 4.5+ Rated</button>`);
            cuisines.forEach(c => {
                chips.push(`<button class="filter-chip ${restoFilters.cuisines.has(c) ? 'active' : ''}" onclick="toggleRestoCuisine('${c.replace(/'/g, "\\'")}')">${c}</button>`);
            });
            if (restoFilters.topRated || restoFilters.cuisines.size > 0) {
                chips.push(`<button class="filter-chip-clear" onclick="clearRestoFilters()"><i class="fas fa-xmark"></i> Clear</button>`);
            }
            document.getElementById('restaurantFilterChips').innerHTML = chips.join('');
        }

        function toggleRestoTopRated() { restoFilters.topRated = !restoFilters.topRated; renderAll(currentDestination); }
        function toggleRestoCuisine(c) { restoFilters.cuisines.has(c) ? restoFilters.cuisines.delete(c) : restoFilters.cuisines.add(c); renderAll(currentDestination); }
        function clearRestoFilters() { restoFilters = { cuisines: new Set(), topRated: false }; renderAll(currentDestination); }

        function matchesRestoFilters(r) {
            if (restoFilters.topRated && r.rating < 4.5) return false;
            if (restoFilters.cuisines.size > 0 && !restoFilters.cuisines.has(r.cuisine)) return false;
            return true;
        }

        // ============================================================
        //  FILTER CHIPS — activities
        // ============================================================
        function renderActivityFilterChips(data) {
            const chips = [];
            chips.push(`<button class="filter-chip ${actFilters.free ? 'active' : ''}" onclick="toggleActFree()"><i class="fas fa-sack-dollar"></i> Free</button>`);
            chips.push(`<button class="filter-chip ${actFilters.topRated ? 'active' : ''}" onclick="toggleActTopRated()"><i class="fas fa-star"></i> 4.5+ Rated</button>`);
            chips.push(`<button class="filter-chip ${actFilters.duration === 'quick' ? 'active' : ''}" onclick="setActDuration('quick')"><i class="fas fa-bolt"></i> Quick (under 2h)</button>`);
            chips.push(`<button class="filter-chip ${actFilters.duration === 'half' ? 'active' : ''}" onclick="setActDuration('half')"><i class="fas fa-sun"></i> Half-day (2–4h)</button>`);
            chips.push(`<button class="filter-chip ${actFilters.duration === 'full' ? 'active' : ''}" onclick="setActDuration('full')"><i class="fas fa-campground"></i> Full-day (5h+)</button>`);
            if (actFilters.free || actFilters.topRated || actFilters.duration) {
                chips.push(`<button class="filter-chip-clear" onclick="clearActFilters()"><i class="fas fa-xmark"></i> Clear</button>`);
            }
            document.getElementById('activityFilterChips').innerHTML = chips.join('');
        }

        function toggleActFree() { actFilters.free = !actFilters.free; renderAll(currentDestination); }
        function toggleActTopRated() { actFilters.topRated = !actFilters.topRated; renderAll(currentDestination); }
        function setActDuration(d) { actFilters.duration = actFilters.duration === d ? null : d; renderAll(currentDestination); }
        function clearActFilters() { actFilters = { free: false, topRated: false, duration: null }; renderAll(currentDestination); }

        function activityDurationHours(str) {
            if (/half/i.test(str)) return 4;
            if (/full/i.test(str)) return 8;
            if (/min/i.test(str)) return parseFloat(str) / 60;
            const n = parseFloat(str);
            return isNaN(n) ? 2 : n;
        }

        function matchesActFilters(a) {
            if (actFilters.free && a.price !== 0) return false;
            if (actFilters.topRated && a.rating < 4.5) return false;
            if (actFilters.duration) {
                const h = activityDurationHours(a.duration);
                if (actFilters.duration === 'quick' && !(h < 2)) return false;
                if (actFilters.duration === 'half' && !(h >= 2 && h <= 4)) return false;
                if (actFilters.duration === 'full' && !(h > 4)) return false;
            }
            return true;
        }

        function renderAll(destKey) {
            const data = destinations[destKey];
            updateBudgetLabel();

            if (!data) {
                hotelsGrid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><i class="fas fa-magnifying-glass-location"></i><h3>Hakuna — no destination found</h3><p>Try Nairobi, Maasai Mara, Diani, Naivasha, Nanyuki, or Lamu.</p></div>`;
                restaurantsGrid.innerHTML = '';
                transportGrid.innerHTML = '';
                activitiesGrid.innerHTML = '';
                document.getElementById('hotelFilterChips').innerHTML = '';
                document.getElementById('restaurantFilterChips').innerHTML = '';
                document.getElementById('activityFilterChips').innerHTML = '';
                statHotels.textContent = '0';
                statTransport.textContent = '0';
                statActivities.textContent = '0';
                statWeather.textContent = '—';
                weatherCity.textContent = 'Not found';
                weatherTemp.textContent = '—';
                weatherLocation.textContent = '—';
                updateBudgetSnapshot(null);
                return;
            }

            const travelers = travelerCount;
            updateBudgetSnapshot(data);

            // --- Weather ---
            const w = data.weather;
            statWeather.textContent = `${w.temp}°C`;
            weatherLocation.textContent = `${data.name}, ${data.county}`;
            weatherTemp.innerHTML = `${w.temp}<sup>°C</sup>`;
            weatherCity.textContent = data.name;
            weatherCondition.textContent = w.condition;
            weatherHumidity.textContent = `${w.humidity}%`;
            weatherConditionLabel.textContent = w.condition;
            weatherHumidityVal.textContent = `${w.humidity}%`;
            weatherWind.textContent = w.wind;
            const iconEl = document.querySelector('.weather-icon-big i');
            if (iconEl) iconEl.className = `fas ${w.icon}`;

            // --- Hotels (budget filtered + sortable) ---
            const cheapestHotelPrice = Math.min(...data.hotels.map(h => h.pricePerNight));
            let hotelsSorted = [...data.hotels];
            const sortMode = document.getElementById('hotelSort') ? document.getElementById('hotelSort').value : 'default';
            if (sortMode === 'price-asc') hotelsSorted.sort((a, b) => a.pricePerNight - b.pricePerNight);
            else if (sortMode === 'price-desc') hotelsSorted.sort((a, b) => b.pricePerNight - a.pricePerNight);
            else if (sortMode === 'stars-desc') hotelsSorted.sort((a, b) => b.stars - a.stars);

            renderHotelFilterChips(data);
            const visibleHotels = hotelsSorted.filter(h => withinBudget(h.pricePerNight) && matchesHotelFilters(h));
            statHotels.textContent = visibleHotels.length;
            hotelSub.textContent = isNoLimit()
                ? `${data.hotels.length} properties · ${travelers} traveler${travelers > 1 ? 's' : ''}`
                : `${visibleHotels.length} of ${data.hotels.length} match your budget & filters · ${travelers} traveler${travelers > 1 ? 's' : ''}`;

            if (visibleHotels.length === 0) {
                hotelsGrid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><i class="fas fa-wallet"></i><h3>No stays match yet</h3><p>Try raising your daily budget or clearing a filter chip above — the cheapest option here is ${formatKES(cheapestHotelPrice, 1)}/night.</p></div>`;
            } else {
                hotelsGrid.innerHTML = visibleHotels.map(h => {
                    const id = `hotel-${destKey}-${slug(h.name)}`;
                    const isCheapest = h.pricePerNight === cheapestHotelPrice;
                    return `
                    <div class="card hotel-card fade-up">
                        <div class="hotel-img">
                            <span class="type-tag">${h.type}</span>
                            ${isCheapest ? `<span class="value-badge"><i class="fas fa-star"></i> Best value</span>` : ''}
                            <span style="font-size:48px;">${h.img}</span>
                            <span class="price-tag">${formatKES(h.pricePerNight, travelers)}</span>
                        </div>
                        <div class="hotel-info">
                            <h4>${h.name}</h4>
                            <div class="stars">${starsHTML(h.stars)}</div>
                            <div class="rating-row"><span class="stars-num"><i class="fas fa-star"></i> ${h.rating}</span> ${h.reviews.toLocaleString()} guest reviews</div>
                            <div class="amenities">
                                ${h.amenities.map(a => `<span><i class="fas fa-check-circle" style="color:var(--green);font-size:10px;"></i> ${a}</span>`).join('')}
                            </div>
                            <div class="price-row">
                                <span class="price">${formatKES(h.pricePerNight, travelers)} <small>/ night</small></span>
                                <button class="btn-book" onclick="addToTrip('${id}','${h.name.replace(/'/g, "\\'")}','${h.img}','Stay · ${data.name}', ${h.pricePerNight})">
                                    ${inTrip(id) ? '<i class="fas fa-check"></i> Added' : 'Add to Trip'}
                                </button>
                            </div>
                        </div>
                    </div>
                `;}).join('');
            }

            // --- Restaurants (budget filtered + sortable) ---
            let restaurantsSorted = [...data.restaurants];
            const restoSortMode = document.getElementById('restaurantSort') ? document.getElementById('restaurantSort').value : 'default';
            if (restoSortMode === 'price-asc') restaurantsSorted.sort((a, b) => a.price - b.price);
            else if (restoSortMode === 'rating-desc') restaurantsSorted.sort((a, b) => b.rating - a.rating);

            renderRestaurantFilterChips(data);
            const visibleRestaurants = restaurantsSorted.filter(r => withinBudget(r.price) && matchesRestoFilters(r));
            restaurantSub.textContent = isNoLimit()
                ? `${data.restaurants.length} local favorites`
                : `${visibleRestaurants.length} of ${data.restaurants.length} match your budget & filters`;

            if (visibleRestaurants.length === 0) {
                restaurantsGrid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><i class="fas fa-utensils"></i><h3>No restaurants match yet</h3><p>Raise your budget slider or clear a filter chip to see more dining options in ${data.name}.</p></div>`;
            } else {
                restaurantsGrid.innerHTML = visibleRestaurants.map(r => {
                    const id = `resto-${destKey}-${slug(r.name)}`;
                    return `
                    <div class="restaurant-card fade-up">
                        <div class="r-emoji">${r.emoji}</div>
                        <div class="r-info">
                            <h4>${r.name}</h4>
                            <div class="rating-row"><span class="stars-num"><i class="fas fa-star"></i> ${r.rating}</span> ${r.reviews.toLocaleString()} reviews</div>
                            <div class="r-meta">
                                <span class="cuisine-badge">${r.cuisine}</span>
                                <span class="price-band">${r.price === 0 ? 'Included' : formatKES(r.price, 1) + ' pp'}</span>
                            </div>
                        </div>
                        <button class="add-trip-btn ${inTrip(id) ? 'added' : ''}" title="Add to trip" onclick="addToTrip('${id}','${r.name.replace(/'/g, "\\'")}','${r.emoji}','Dining · ${data.name}', ${r.price})">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                `;}).join('');
            }

            // --- Transport (budget filtered on average price) ---
            const iconMap = {
                train: 'fa-train', bus: 'fa-bus', car: 'fa-car', bike: 'fa-bicycle',
                boat: 'fa-ship', plane: 'fa-plane', walk: 'fa-person-walking',
                moto: 'fa-motorcycle', tuktuk: 'fa-taxi', donkey: 'fa-horse'
            };
            const visibleTransport = data.transport.filter(t => withinBudget(t.priceAvg));
            statTransport.textContent = visibleTransport.length;

            if (visibleTransport.length === 0) {
                transportGrid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><i class="fas fa-route"></i><h3>No transport modes in this range</h3><p>Raise your budget to see more ways to get around ${data.name}.</p></div>`;
            } else {
                transportGrid.innerHTML = visibleTransport.map(t => `
                    <div class="transport-card fade-up">
                        <div class="t-icon ${t.icon}"><i class="fas ${iconMap[t.icon] || 'fa-route'}"></i></div>
                        <div class="t-info">
                            <h4>${t.type}</h4>
                            <p>${t.desc} · <i class="far fa-clock"></i> ${t.time}</p>
                            <span class="badge">${t.badge}</span>
                        </div>
                        <div class="t-price">${t.priceAvg === 0 ? 'Free' : formatKES(t.priceAvg, 1)}${t.price.includes('/day') ? '/day' : ''}</div>
                    </div>
                `).join('');
            }

            // --- Activities (budget filtered + sortable) ---
            let activitiesSorted = [...data.activities];
            const actSortMode = document.getElementById('activitySort') ? document.getElementById('activitySort').value : 'default';
            if (actSortMode === 'price-asc') activitiesSorted.sort((a, b) => a.price - b.price);
            else if (actSortMode === 'rating-desc') activitiesSorted.sort((a, b) => b.rating - a.rating);

            renderActivityFilterChips(data);
            const visibleActivities = activitiesSorted.filter(a => withinBudget(a.price) && matchesActFilters(a));
            statActivities.textContent = visibleActivities.length;
            activitySub.textContent = isNoLimit()
                ? `${data.activities.length} experiences`
                : `${visibleActivities.length} of ${data.activities.length} match your budget & filters`;

            if (visibleActivities.length === 0) {
                activitiesGrid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><i class="fas fa-hiking"></i><h3>No adventures match yet</h3><p>Raise your budget or clear a filter chip to unlock more activities in ${data.name}.</p></div>`;
            } else {
                activitiesGrid.innerHTML = visibleActivities.map(a => {
                    const id = `act-${destKey}-${slug(a.name)}`;
                    return `
                    <div class="activity-card fade-up">
                        <div class="act-img" style="position:relative;">
                            ${a.icon}
                            <button class="add-trip-btn ${inTrip(id) ? 'added' : ''}" title="Add to trip" onclick="event.stopPropagation();addToTrip('${id}','${a.name.replace(/'/g, "\\'")}','${a.icon}','Activity · ${data.name}', ${a.price})">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                        <div class="act-body">
                            <h4>${a.name}</h4>
                            <p><i class="far fa-clock"></i> ${a.duration}</p>
                            <div class="rating-row"><span class="stars-num"><i class="fas fa-star"></i> ${a.rating}</span> (${a.reviews})</div>
                            <div class="act-meta">
                                <span class="price">${a.price === 0 ? 'Free' : formatKES(a.price, travelers)}</span>
                                <span style="color:var(--gold-dark);"><i class="fas fa-chevron-right"></i></span>
                            </div>
                        </div>
                    </div>
                `;}).join('');
            }

            // --- Map ---
            renderMap(data);

            // --- Travel Essentials ---
            renderEssentials(data);

            // --- Packing Checklist ---
            renderPackingList(data);

            headerTravelerCount.textContent = travelers;
        }

        // ============================================================
        //  MAP
        // ============================================================
        function renderMap(data) {
            const iframe = document.getElementById('destMap');
            const { lat, lng } = data.coords;
            iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&z=10&output=embed`;
            document.getElementById('mapCaption').textContent = `${data.name}, ${data.county}`;
            document.getElementById('mapSub').textContent = `Approximate location of ${data.name}`;
        }

        // ============================================================
        //  TRAVEL ESSENTIALS
        // ============================================================
        function renderEssentials(data) {
            const e = data.essentials;
            document.getElementById('essentialsSub').textContent = `Know before you go — ${data.name}`;
            document.getElementById('essentialsGrid').innerHTML = `
                <div class="essential-card fade-up fade-up-d1">
                    <div class="e-icon"><i class="fas fa-sun"></i></div>
                    <div><h5>Best time to visit</h5><p>${e.bestTime}</p></div>
                </div>
                <div class="essential-card fade-up fade-up-d2">
                    <div class="e-icon"><i class="fas fa-passport"></i></div>
                    <div><h5>Visa</h5><p>${e.visa}</p></div>
                </div>
                <div class="essential-card fade-up fade-up-d3">
                    <div class="e-icon"><i class="fas fa-coins"></i></div>
                    <div><h5>Currency</h5><p>${e.currency}</p></div>
                </div>
                <div class="essential-card fade-up fade-up-d4">
                    <div class="e-icon"><i class="fas fa-hand-holding-dollar"></i></div>
                    <div><h5>Tipping</h5><p>${e.tipping}</p></div>
                </div>
                <div class="essential-card fade-up fade-up-d5">
                    <div class="e-icon"><i class="fas fa-shield-heart"></i></div>
                    <div><h5>Safety tip</h5><p>${e.safety}</p></div>
                </div>
            `;
        }

        // ============================================================
        //  PACKING CHECKLIST
        // ============================================================
        function packingListFor(data) {
            const w = data.weather;
            const items = ['Passport & printed eVisa', 'Travel insurance documents', 'Kenya Shillings cash & a card with no foreign fees', 'Universal / Type G power adapter', 'Basic first-aid kit & any personal medication'];
            if (w.temp >= 28) items.push('Lightweight, breathable clothing', 'High-SPF sunscreen', 'Sunglasses & a wide-brim hat', 'Swimwear');
            else if (w.temp <= 21) items.push('Warm layers for cool mornings & evenings', 'A light jacket or fleece', 'Closed walking shoes');
            else items.push('Light layers for variable weather', 'A light rain jacket');
            if (['maasai mara', 'naivasha', 'nanyuki'].includes(data.__key)) items.push('Neutral-colored safari clothing', 'Binoculars', 'Malaria prophylaxis (consult your doctor)');
            if (['diani', 'lamu'].includes(data.__key)) items.push('Reef-safe sunscreen', 'Sandals & swim shoes', 'Light cover-up for modest dress in towns');
            items.push('Reusable water bottle', 'Power bank & camera');
            return items;
        }

        function renderPackingList(data) {
            const items = packingListFor(data);
            document.getElementById('packingSub').textContent = `Suggested for ${data.name}'s climate`;
            const listEl = document.getElementById('packingList');
            listEl.innerHTML = items.map(label => {
                const id = `pack-${data.__key}-${slug(label)}`;
                const checked = packingChecked.has(id);
                return `
                    <div class="packing-item ${checked ? 'checked' : ''}" onclick="togglePacking('${id}')">
                        <span class="p-box">${checked ? '<i class="fas fa-check"></i>' : ''}</span>
                        <span>${label}</span>
                    </div>
                `;
            }).join('');
            updatePackingProgress(items, data.__key);
        }

        function togglePacking(id) {
            if (packingChecked.has(id)) packingChecked.delete(id);
            else packingChecked.add(id);
            if (currentDestination && destinations[currentDestination]) renderPackingList(destinations[currentDestination]);
        }

        function updatePackingProgress(items, destKey) {
            const total = items.length;
            const done = items.filter(label => packingChecked.has(`pack-${destKey}-${slug(label)}`)).length;
            const pct = total === 0 ? 0 : Math.round((done / total) * 100);
            document.getElementById('packingProgressLabel').textContent = `${done} of ${total} packed`;
            document.getElementById('packingProgressPct').textContent = `${pct}%`;
            document.getElementById('packingProgressBar').style.width = `${pct}%`;
        }

        // ============================================================
        //  FAQ
        // ============================================================
        const faqData = [
            { q: 'Is it safe to travel around Kenya?', a: 'Kenya welcomes millions of visitors every year, and popular routes for tourism are well established. As anywhere, use common sense in cities at night, follow your guide\'s advice on safaris, and keep an eye on official travel advisories before you go.' },
            { q: 'Do I need a visa to visit Kenya?', a: 'Most visitors need an eVisa, applied for online before arrival. Requirements vary by nationality, so check the official Kenya eTA portal closer to your travel dates.' },
            { q: 'What\'s the best way to pay for things?', a: 'Kenya Shillings (KSh) cash is essential for matatus, boda bodas, tuk-tuks, and small vendors — especially in places like Lamu. Hotels, resorts, and larger restaurants generally accept cards.' },
            { q: 'How does the budget slider work?', a: 'Set your daily budget per traveler and every hotel, restaurant, transport option, and activity across the site will filter to show only what fits — with a note on how many options are within range.' },
            { q: 'Can I plan a multi-destination trip?', a: 'Yes — browse each destination and add hotels, meals, and activities to "My Trip" as you go. The trip drawer groups everything by destination and totals the cost across your whole itinerary.' },
        ];

        function renderFAQ() {
            document.getElementById('faqList').innerHTML = faqData.map((item, i) => `
                <div class="faq-item ${faqOpen.has(i) ? 'open' : ''}">
                    <div class="faq-question" onclick="toggleFAQ(${i})">
                        <span>${item.q}</span>
                        <i class="fas fa-plus"></i>
                    </div>
                    <div class="faq-answer"><p>${item.a}</p></div>
                </div>
            `).join('');
        }

        function toggleFAQ(i) {
            if (faqOpen.has(i)) faqOpen.delete(i);
            else faqOpen.add(i);
            renderFAQ();
        }

        // ============================================================
        //  SEARCH
        // ============================================================
        function selectDestination(key) {
            if (!destinations[key]) return;
            currentDestination = key;
            searchInput.value = destinations[key].name;
            resetSectionFilters();
            renderAll(key);
            showSelectedBanner(key);
            document.getElementById('weatherSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function showSelectedBanner(key) {
            const d = destinations[key];
            document.getElementById('destPickerSection').style.display = 'none';
            document.getElementById('sdbEmoji').textContent = d.emoji;
            document.getElementById('sdbName').textContent = `${d.name}, ${d.county}`;
            document.getElementById('selectedDestBanner').style.display = 'flex';
        }

        function showDestPicker() {
            document.getElementById('destPickerSection').style.display = 'block';
            document.getElementById('selectedDestBanner').style.display = 'none';
            document.getElementById('destPickerSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function handleSearch() {
            const query = searchInput.value.trim();
            if (!query) {
                selectDestination('nairobi');
                return;
            }
            const key = getDestination(query);
            if (key) {
                selectDestination(key);
            } else {
                currentDestination = null;
                renderAll(null);
                showToast(`No match for "${query}" — try Nairobi, Maasai Mara, Diani, Naivasha, Nanyuki or Lamu`);
            }
        }

        function quickSearch(key) {
            selectDestination(key);
        }

        // Enter key
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleSearch();
        });

        // ============================================================
        //  TRAVELERS
        // ============================================================
        function changeTravelers(delta) {
            const newVal = travelerCount + delta;
            if (newVal < 1) return;
            travelerCount = newVal;
            travelerCountEl.textContent = travelerCount;
            headerTravelerCount.textContent = travelerCount;
            if (currentDestination && destinations[currentDestination]) {
                renderAll(currentDestination);
            }
            renderTripDrawer();
        }

        function changeNights(delta) {
            const newVal = tripNights + delta;
            if (newVal < 1 || newVal > 30) return;
            tripNights = newVal;
            document.getElementById('nightsCount').textContent = tripNights;
            updateBudgetLabel();
            if (currentDestination && destinations[currentDestination]) {
                renderAll(currentDestination);
            }
        }

        // ============================================================
        //  RESET / EXPLORE
        // ============================================================
        function resetSearch() {
            showPage('home');
            travelerCount = 2;
            travelerCountEl.textContent = '2';
            headerTravelerCount.textContent = '2';
            currentDestination = 'nairobi';
            searchInput.value = 'Nairobi';
            resetSectionFilters();
            renderAll('nairobi');
            showDestPicker();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // ============================================================
        //  TOAST + CONTACT FORM
        // ============================================================
        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toastMsg').textContent = msg;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3200);
        }

        function submitContact(e) {
            e.preventDefault();
            showToast('Asante! Your message has been sent — we\'ll reply soon.');
            e.target.reset();
        }

        // ============================================================
        //  INIT
        // ============================================================
        renderDestPicker();
        updateBudgetLabel();
        renderTripDrawer();
        renderFAQ();
        renderAll('nairobi');
        searchInput.value = 'Nairobi';