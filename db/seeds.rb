# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "dropping tables"

puts "starting seeds"

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

puts "creating the folder"
Folder.create(
  name: "Landscapes Galore"
)

# folders = Folder.all()

puts "creating departments"
Department.create(
  name: "Truck #1",
  folder_id: 1
)
Department.create(
  name: "Truck #2",
  folder_id: 1
)
Department.create(
  name: "Truck #3",
  folder_id: 1
)
departments = Department.all()


# 20.times do
#   Item.create(
#     name: Faker::Commerce.product_name,
#     description: Faker::Commerce.color,
#     image: open_asset('wrench.avif'),
#     price_cents: prices.sample(),
#     quantity: rand(1..20),

#     folder_id: 1,
#     department_id: rand(1..3)
#   )
# end

Item.create(
  name: "Crescent Wrench",
  description: "Incredible strength and corrosion resistance from specially formulated and heat-treated chrome alloy steel. Off-corner loading design on box end provides better grip and reduces fastener rounding. Sizes stamped on both sides of each wrench for easy identification.",
  image: open_asset('crescent-wrench.jpg'),
  price_cents: 2499,
  quantity: 5,
  folder_id: 1,
  department_id: 1
)
puts "seeding power tools"
Item.create(
  name: "Chain saw",
  description: "The MSE 141 C-Q is a lightweight entry-level model with great cutting performance. Good ergonomics for effortless work, side-mounted chain tensioning for securing and easily tensioning the chain, Quickstop® Super chain brake, oil tank with transparent viewing window, and overload protection.",
  image: open_asset('chain-saw.jpg'),
  price_cents: 24999,
  quantity: 2,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Lawn mower",
  description: "The Toro Recycler series is a patented cutting technology that brings an innovative mulching technique that make your clippings ultra-fine to provide moisture and nutrients that feed back into your lawn. We call these nutrient rich grass clippings, LawnVitamins. Save time, finish faster and make your job easier with Toro's 21 in. Recycler Self-Propel 60-Volt Max Battery Mower. Raise your expectations with this easy-to-start, easy-to-use, and easy-to-maintain mower.",
  image: open_asset('lawn-mower.jpg'),
  price_cents: 64999,
  quantity: 4,
  folder_id: 1,
  department_id: 1
)
Item.create(
  name: "Trimmer",
  description: "The 21.2cc Power Boost Vortex Engine provides ample power, and the I-30 starter requires 30% less pulling effort to start. Plus, the GT-225 comes standard with the Rapid Loader fixed line head for easy line change outs.",
  image: open_asset('trimmer.jpg'),
  price_cents: 23899,
  quantity: 4,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Blower",
  description: "The ECHO PB580T Gas Backpack Blower features a 58.2cc professional-grade, 2-stroke engine with a tube-mounted throttle. It delivers 510 CFM and 215 MPH blowing performance for a powerful impact. A unique vented backpad circulates air around the user for increased comfort in hot weather. Its compact yet durable design offers easy transport around your yard area.",
  image: open_asset('blower.jpg'),
  price_cents: 57899,
  quantity: 4,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Hedge Trimmer",
  description: "Keep your garden looking beautiful with ease with this 21 in. Two-Stroke Cycle Hedge Trimmer. It features a 21.2 cc gas engine with double-reciprocating RazorEdge blades, so you can tackle large, tough jobs. It's also comfortable to use with an easy start and vibration reduction.",
  image: open_asset('hedge-trimmer.jpg'),
  price_cents: 44899,
  quantity: 3,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Pole saw",
  description: "The Sun Joe® SWJ807E 2-in-1 convertible electric pole chain saw takes the danger and difficulty out of trimming your overgrown trees. Stand safely on solid ground and simply adjust the telescoping pole. Pole extends to 8.8 ft to gain up to 15 feet of overhead reach. Later, when the limbs are down and theres wood to be cut, the SWJ807E quickly converts to a hand-held chainsaw to make light work of loads of logs. Powered by a robust 8-amp motor, the SWJ807E can handle the most stubborn tree limbs up to 9.5-inches thick.",
  image: open_asset('pole-saw.jpg'),
  price_cents: 8399,
  quantity: 4,
  folder_id: 1,
  department_id: 3
)
Item.create(
  name: "Power pruner",
  description: "The PPF-225 features a 21.2cc professional-grade, 2-stroke engine. The 93 inch fixed shaft provides outstanding reach for pruning hard-to-get-at limbs. The digital ignition system and reduced-effort starter coupled with a purge bulb make for easy starting. Cushioned rear throttle grip and front handle grip for increased comfort and control.",
  image: open_asset('power-pruner.jpg'),
  price_cents: 64999,
  quantity: 2,
  folder_id: 1,
  department_id: 3
)
Item.create(
  name: "Pressure washer",
  description: "The A-iPower 2700 PSI gas powered pressure washer is the perfect solution for the DIY user. Plenty of power with long life engineering at a real value that is suitable for a multitude of uses, the applications are endless. Long life 196cc over-head valve gas engine. Low oil shut down to prevent damage. Low tone muffler. Recoil starting.",
  image: open_asset('pressure-washer.jpg'),
  price_cents: 27999,
  quantity: 1,
  folder_id: 1,
  department_id: 1
)
puts "seeding shop items"
Item.create(
  name: "Safety vest",
  description: "The Milwaukee Tool ANSI Type R Class 2 Breakaway High Visibility Mesh Safety Vest is constructed from moisture wicking and anti-microbial treated fabric that helps you stay cool and dry fast while preventing odor and bacteria build up. Lightweight, breathable mesh means you can be cooler and comfortable in hot working conditions. It features 9 pockets including a clear ID holder and internal pocket providing you with added storage. The vest features an external size adjustment providing you with a better fit as well as a durable pass-through slit for fall protection gear.",
  image: open_asset('safety-vest.jpg'),
  price_cents: 3199,
  quantity: 12,
  folder_id: 1,
  department_id: 1
)
Item.create(
  name: "Safety vest",
  description: "The Milwaukee Tool ANSI Type R Class 2 Breakaway High Visibility Mesh Safety Vest is constructed from moisture wicking and anti-microbial treated fabric that helps you stay cool and dry fast while preventing odor and bacteria build up. Lightweight, breathable mesh means you can be cooler and comfortable in hot working conditions. It features 9 pockets including a clear ID holder and internal pocket providing you with added storage. The vest features an external size adjustment providing you with a better fit as well as a durable pass-through slit for fall protection gear.",
  image: open_asset('safety-vest.jpg'),
  price_cents: 3199,
  quantity: 15,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Safety vest",
  description: "The Milwaukee Tool ANSI Type R Class 2 Breakaway High Visibility Mesh Safety Vest is constructed from moisture wicking and anti-microbial treated fabric that helps you stay cool and dry fast while preventing odor and bacteria build up. Lightweight, breathable mesh means you can be cooler and comfortable in hot working conditions. It features 9 pockets including a clear ID holder and internal pocket providing you with added storage. The vest features an external size adjustment providing you with a better fit as well as a durable pass-through slit for fall protection gear.",
  image: open_asset('safety-vest.jpg'),
  price_cents: 3199,
  quantity: 19,
  folder_id: 1,
  department_id: 3
)
Item.create(
  name: "First aid kit",
  description: "First Aid Central's Construction First Aid Kit is designed for the construction industry, contractor's and related trades in Canada. Be prepared for automotive emergencies in Canada each and every day. Well stocked to handle common workplace injuries such as cuts and scrapes, wounds and burns
  Exceeds minimum first aid requirements for Federal Type 'A' Kit. CPR Mask with one way valve included Health Canada Approved components",
  image: open_asset('first-aid-kit.jpg'),
  price_cents: 6999,
  quantity: 2,
  folder_id: 1,
  department_id: 1
)
Item.create(
  name: "First aid kit",
  description: "First Aid Central's Construction First Aid Kit is designed for the construction industry, contractor's and related trades in Canada. Be prepared for automotive emergencies in Canada each and every day. Well stocked to handle common workplace injuries such as cuts and scrapes, wounds and burns
  Exceeds minimum first aid requirements for Federal Type 'A' Kit. CPR Mask with one way valve included Health Canada Approved components",
  image: open_asset('first-aid-kit.jpg'),
  price_cents: 6999,
  quantity: 2,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "First aid kit",
  description: "First Aid Central's Construction First Aid Kit is designed for the construction industry, contractor's and related trades in Canada. Be prepared for automotive emergencies in Canada each and every day. Well stocked to handle common workplace injuries such as cuts and scrapes, wounds and burns
  Exceeds minimum first aid requirements for Federal Type 'A' Kit. CPR Mask with one way valve included Health Canada Approved components",
  image: open_asset('first-aid-kit.jpg'),
  price_cents: 6999,
  quantity: 3,
  folder_id: 1,
  department_id: 3
)
Item.create(
  name: "Flagstone",
  description: "Traffic safety cones provide you with the durability you need to work secure and worry free on the road. Traffic cones are made of a non-porous surface which resists dirt and grease build up",
  image: open_asset('cone.jpg'),
  price_cents: 1599,
  quantity: 18,
  folder_id: 1,
  department_id: 3
)
Item.create(
  name: "Tarp",
  description: "Can be used for construction tarps,farm tarps,camping and roof tarps etc.This blue tarp feature heat-sealed seams and are waterproof and tear resistant. The hems are reinforced with poly rope for added tarp strength. The tarps are reusable,washable, recyclable.",
  image: open_asset('tarp.jpg'),
  price_cents: 1099,
  quantity: 4,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Extension cord",
  description: "This HDX 50ft 16/3 Orange Extension Cord is specifically engineered for applications such as powering tools and portable lights. This extension cord comes with a 3-prong grounded plug and outlet for additional safety during application. It is made with durable vinyl jacket that resists abrasion, moisture and prolonged exposure to sunlight and are sturdy enough for both indoor and outdoor use. This durable cord is designed to withstand temperatures from -40F to +167F. 50 ft. grounded 3-wire extension cord may be used with power tools and appliances for light duty applications inside and outside of your homes. 13 amp, 125 volt, 1625 maximum watts capacity.",
  image: open_asset('extension-cord.jpg'),
  price_cents: 3299,
  quantity: 3,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Gas can",
  description: "25L Gas Can -Red Gas Can Made Of High Density Polytethylene Recyclable And Highly Impact Resistant -25L Gas Can, Manufactured By Scepter In Toronto, Canada. This Plastic Gas Can Is Manufactured With High Density Polyethylene. It Consists Of A Very High Impact Resin, Resistant, And Also Resistant To Chemicals Such As Citric Acid. This Product Is Tested Extensively And Certified Canadian Standards Association. It Is Retailed At Very Affordable Price And Offer Great Value In Terms Of Price And Quality. The Scepter Gas Can Is The Number Seller In Canada.",
  image: open_asset('gas-can.jpg'),
  price_cents: 2199,
  quantity: 3,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Handheld radio",
  description: "This RYOBI 18V ONE+ Speaker with Bluetooth Wireless Technology is a game-changing addition to your ONE+ collection. Our new Smart Amplifier Technology delivers powerful, crisp sound at any volume, with 8.5X more clarity than the P746. With 125 ft. Bluetooth range and over 10 hours of runtime on a RYOBI 18V ONE+ 4.0 Ah battery, this speaker is the perfect partner to get you through any job. The integrated handle allows you to bring bold sound with you, wherever you go. This speaker also comes with a 2.1 Amp USB charging port to charge your phone or tablet while you work.",
  image: open_asset('handheld-radio.jpg'),
  price_cents: 9999,
  quantity: 1,
  folder_id: 1,
  department_id: 3
)
Item.create(
  name: "Garbage bag",
  description: "Husky Heavy Duty bag for contactor, commercial, and home use. The bag is tear and puncture resistant to make any job a breeze. 3 mil, 50 Bags 158L.",
  image: open_asset('garbage-bag.jpg'),
  price_cents: 3399,
  quantity: 4,
  folder_id: 1,
  department_id: 1
)
Item.create(
  name: "Hand trowel",
  description: "Designed for easy use and lasting durability, Fiskars Ergo Trowel features a special handle design that reduces hand and wrist fatigue, plus gradation marks on the blade for easy depth measurement. The cast-aluminum head resists rust and won't snap off while you're digging, no matter how tough your soil is. Additionally, the handle features a hang hole for convenient storage.",
  image: open_asset('hand-trowel.jpg'),
  price_cents: 1199,
  quantity: 4,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Pruning shears",
  description: "Professional Bypass Pruner features a durable, ergonomic design ideal for comfortable extended use. A low-friction titanium blade coating enhances durability while making every cut even easier and an angled cutting head helps reduce wrist fatigue . A self-cleaning sap groove keeps the blade from sticking, and adjustable blade tension helps you make clean cuts no matter what kind of plants you're pruning.",
  image: open_asset('pruning-shears.jpg'),
  price_cents: 4299,
  quantity: 3,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Hand cultivator",
  description: "Designed for easy use and lasting durability, Fiskars Ergo Cultivator features a special ergonomic handle that's sculpted with Softgrip for enhanced comfort and control. A cast-aluminum head resists rust, won't snap off and features large angled tines that improve contact to quickly loosen soil.",
  image: open_asset('hand-cultivator.jpg'),
  price_cents: 1299,
  quantity: 3,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Folding saw",
  description: "Folding Saw features a razor-sharp, triple-ground blade that makes aggressive cuts to help you power through thick branches faster. The saw blade locks in two different open positions, so whether you're making overhand cuts or undercuts, you still have maximum cutting power and control. Softgrip touchpoints provide a comfortable, secure grip no matter which way you're cutting, and our pruning saw even folds and locks for space-saving storage and safe transportation.",
  image: open_asset('folding-saw.jpg'),
  price_cents: 2499,
  quantity: 4,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Round point shovel",
  description: "Anvil, round point shovel with a long wood handle for maximum leverage. Designed with a hollow back tempered steel blade. Perfect for digging holes, transporting earth, planting trees and shrubs, and digging up roots.",
  image: open_asset('round-point-shovel.jpg'),
  price_cents: 1799,
  quantity: 4,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Square point shovel",
  description: "The ergonomic comfort D-grip provides a comfortable hand placement that allows you to work tirelessly even during extensive projects. Transfer loose materials from one site to another more efficiently with the durable carbon steel blade with oversized grooved power stepper which provides better foot traction while digging. With a secure tab socket and dual stainless steel rivets connecting the blade to the durable hardwood handle, this shovel will withstand even the most stubborn materials and intensive projects.",
  image: open_asset('square-point-shovel.jpg'),
  price_cents: 3499,
  quantity: 6,
  folder_id: 1,
  department_id: 3
)
Item.create(
  name: "Bow rake",
  description: "Anvil Bow Rake. Great for spreading earth, clearing flower gardens, and loosening soil. Also useful for raking branches.",
  image: open_asset('bow-rake.jpg'),
  price_cents: 1999,
  quantity: 6,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Leaf rake",
  description: "Pick up leaves on your lawn come fall with the leaf rake. Its good quality poly tines will maintain their shape and its comfort grip will reduce blistering. Designed for residential use, this tool is ideal for people looking for an excellent quality/price ratio.",
  image: open_asset('leaf-rake.jpg'),
  price_cents: 2399,
  quantity: 4,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Garden fork",
  description: "The Husky manure fork is the perfect tool for digging, turning and aerating soil. It counts with a poly D-grip that provides high comfort and control of the tool. The hardwood handle provides strength and durability as well as a full tempered blade.",
  image: open_asset('garden-fork.jpg'),
  price_cents: 4499,
  quantity: 3,
  folder_id: 1,
  department_id: 2
)
Item.create(
  name: "Axe",
  description: "This ax head is drop-forged steel which is strong. With well heat treatment technique it's very durable and safe. Reinforced fiberglass handle is virtually indestructible. Well assembly technique eliminate the risk of head loosening or separating from the handle.",
  image: open_asset('axe.jpg'),
  price_cents: 4399,
  quantity: 3,
  folder_id: 1,
  department_id: 3
)
Item.create(
  name: "Sledgehammer",
  description: "Ideal for demolition projects and breaking of concrete and rocks. Fiberglass double injected handle with Over strike protect, for easy gripping, control, comfort, increased strength and durability.",
  image: open_asset('sledgehammer.jpg'),
  price_cents: 6099,
  quantity: 3,
  folder_id: 1,
  department_id: 3
)
Item.create(
  name: "Garden hoe",
  description: "Anvil Garden Hoe. Essential for weeding, digging, levelling bulb planting beds, and digging furrows in vegetable gardens.",
  image: open_asset('garden-hoe.jpg'),
  price_cents: 2599,
  quantity: 4,
  folder_id: 1,
  department_id: 3
)
Item.create(
  name: "Loppers",
  description: "Its fully hardened, precision-ground steel blade stays sharp longer, and a low-friction blade coating resists rust and improves performance, resulting in smoother cuts and less gumming. Shock-absorbing bumpers help eliminate the jarring conclusion at the end of cuts for more comfortable use. Its durable steel construction includes handles with SoftGrip touchpoints for a secure, comfortable grip.",
  image: open_asset('loppers.jpg'),
  price_cents: 2599,
  quantity: 4,
  folder_id: 1,
  department_id: 3
)
Item.create(
  name: "Wheelbarrow",
  description: "Features include - full 6 cu ft capacity steel tray, 60inch steel handles, premium hardware and heavy gauge steel undercarriage with stabilizers - for lasting strength and performance. For loads up to 300lbs. Backed by a 12 month limited warranty and ERIE's Exceptional Customer Service standard.",
  image: open_asset('wheelbarrow.jpg'),
  price_cents: 17799,
  quantity: 4,
  folder_id: 1,
  department_id: 3
)





puts "seeded database"