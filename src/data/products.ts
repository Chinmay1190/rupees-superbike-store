
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Hayabusa",
    brand: "Suzuki",
    category: "Super Sport",
    price: 1599000,
    imageUrl: "https://source.unsplash.com/random/800x600/?suzuki+hayabusa",
    description: "The legendary Suzuki Hayabusa, renowned for its ultimate power, speed, and performance.",
    specs: {
      engine: "1340cc Inline-4",
      power: "190 HP",
      torque: "150 Nm",
      weight: "266 kg",
      topSpeed: "299 km/h"
    },
    colors: ["Pearl Brilliant White", "Metallic Mat Sword Silver", "Metallic Thunder Gray"],
    isNew: false,
    inStock: true,
    rating: 4.9
  },
  {
    id: "2",
    name: "Panigale V4",
    brand: "Ducati",
    category: "Super Sport",
    price: 2699000,
    imageUrl: "https://source.unsplash.com/random/800x600/?ducati+panigale",
    description: "The epitome of Ducati's racing DNA for the road, delivering extreme performance.",
    specs: {
      engine: "1103cc V4",
      power: "214 HP",
      torque: "124 Nm",
      weight: "198 kg",
      topSpeed: "320+ km/h"
    },
    colors: ["Ducati Red", "Dark Stealth", "Winter Test Livery"],
    isNew: true,
    inStock: true,
    rating: 5.0
  },
  {
    id: "3",
    name: "Ninja ZX-10R",
    brand: "Kawasaki",
    category: "Super Sport",
    price: 1599000,
    imageUrl: "https://source.unsplash.com/random/800x600/?kawasaki+ninja",
    description: "A race-ready superbike that pushes the boundaries of performance and technology.",
    specs: {
      engine: "998cc Inline-4",
      power: "203 HP",
      torque: "114.9 Nm",
      weight: "207 kg",
      topSpeed: "300 km/h"
    },
    colors: ["Lime Green", "Metallic Diablo Black", "Pearl Blizzard White"],
    inStock: true,
    rating: 4.7
  },
  {
    id: "4",
    name: "Street Triple RS",
    brand: "Triumph",
    category: "Naked",
    price: 1195000,
    imageUrl: "https://source.unsplash.com/random/800x600/?triumph+street+triple",
    description: "The ultimate performance street motorcycle with aggressive styling and precise handling.",
    specs: {
      engine: "765cc Inline-3",
      power: "123 HP",
      torque: "79 Nm",
      weight: "166 kg",
      topSpeed: "260 km/h"
    },
    colors: ["Matt Jet Black", "Silver Ice", "Crystal White"],
    inStock: true,
    rating: 4.8
  },
  {
    id: "5",
    name: "YZF R1",
    brand: "Yamaha",
    category: "Super Sport",
    price: 2099000,
    imageUrl: "https://source.unsplash.com/random/800x600/?yamaha+r1",
    description: "MotoGP-inspired superbike with cutting-edge technology and blistering performance.",
    specs: {
      engine: "998cc Inline-4",
      power: "200 HP",
      torque: "112.4 Nm",
      weight: "201 kg",
      topSpeed: "299 km/h"
    },
    colors: ["Team Yamaha Blue", "Performance Black", "Tech Black"],
    isSale: true,
    originalPrice: 2299000,
    inStock: true,
    rating: 4.9
  },
  // More bikes
  {
    id: "6",
    name: "CBR 1000RR-R Fireblade",
    brand: "Honda",
    category: "Super Sport",
    price: 2329000,
    imageUrl: "https://source.unsplash.com/random/800x600/?honda+cbr",
    description: "Honda's flagship superbike built with track performance as the primary focus.",
    specs: {
      engine: "1000cc Inline-4",
      power: "217 HP",
      torque: "113 Nm",
      weight: "201 kg",
      topSpeed: "300 km/h"
    },
    colors: ["Grand Prix Red", "Matte Pearl Morion Black"],
    isNew: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: "7",
    name: "S 1000 RR",
    brand: "BMW",
    category: "Super Sport",
    price: 2199000,
    imageUrl: "https://source.unsplash.com/random/800x600/?bmw+s1000rr",
    description: "German engineering excellence in a superbike package with symmetrical design.",
    specs: {
      engine: "999cc Inline-4",
      power: "207 HP",
      torque: "113 Nm",
      weight: "197 kg",
      topSpeed: "305 km/h"
    },
    colors: ["Racing Red", "Hockenheim Silver", "Light White/Racing Blue/Racing Red"],
    inStock: true,
    rating: 4.9
  },
  {
    id: "8",
    name: "Brutale 1000 RR",
    brand: "MV Agusta",
    category: "Naked",
    price: 2999000,
    imageUrl: "https://source.unsplash.com/random/800x600/?mv+agusta",
    description: "Italian craftsmanship and design excellence in a hypernaked motorcycle.",
    specs: {
      engine: "998cc Inline-4",
      power: "208 HP",
      torque: "116.5 Nm",
      weight: "186 kg",
      topSpeed: "302 km/h"
    },
    colors: ["AMG Black", "Metallic Carbon Black", "Pearl Shock Red"],
    isNew: true,
    inStock: false,
    rating: 4.7
  },
  {
    id: "9",
    name: "V4 Streetfighter",
    brand: "Ducati",
    category: "Naked",
    price: 2395000,
    imageUrl: "https://source.unsplash.com/random/800x600/?ducati+streetfighter",
    description: "The Fight Formula: the Panigale V4 stripped of the fairings with high handlebar.",
    specs: {
      engine: "1103cc V4",
      power: "208 HP",
      torque: "123 Nm",
      weight: "201 kg",
      topSpeed: "300 km/h"
    },
    colors: ["Ducati Red", "Dark Stealth"],
    inStock: true,
    rating: 4.8
  },
  {
    id: "10",
    name: "Superveloce 800",
    brand: "MV Agusta",
    category: "Sport Classic",
    price: 2179000,
    imageUrl: "https://source.unsplash.com/random/800x600/?mv+agusta+superveloce",
    description: "A modern classic that combines timeless Italian elegance with contemporary performance.",
    specs: {
      engine: "798cc Inline-3",
      power: "147 HP",
      torque: "88 Nm",
      weight: "173 kg",
      topSpeed: "240 km/h"
    },
    colors: ["Ago Red", "Pearl Metallic White", "Carbon Black"],
    isNew: true,
    inStock: true,
    rating: 4.9
  },
  // Let's continue with more products
  {
    id: "11",
    name: "TNT 600i",
    brand: "Benelli",
    category: "Naked",
    price: 699000,
    imageUrl: "https://source.unsplash.com/random/800x600/?benelli+motorcycle",
    description: "Italian designed four-cylinder middleweight naked with aggressive styling.",
    specs: {
      engine: "600cc Inline-4",
      power: "85 HP",
      torque: "54.6 Nm",
      weight: "231 kg",
      topSpeed: "220 km/h"
    },
    colors: ["White", "Red", "Black"],
    isSale: true,
    originalPrice: 799000,
    inStock: true,
    rating: 4.0
  },
  {
    id: "12",
    name: "Z H2",
    brand: "Kawasaki",
    category: "Hyper Naked",
    price: 2199000,
    imageUrl: "https://source.unsplash.com/random/800x600/?kawasaki+z",
    description: "Supercharged naked motorcycle that offers a unique riding experience.",
    specs: {
      engine: "998cc Inline-4 Supercharged",
      power: "200 HP",
      torque: "137 Nm",
      weight: "239 kg",
      topSpeed: "280 km/h"
    },
    colors: ["Metallic Spark Black/Metallic Graphite Gray/Mirror Coated Spark Black"],
    inStock: true,
    rating: 4.6
  },
  {
    id: "13",
    name: "RSV4 Factory",
    brand: "Aprilia",
    category: "Super Sport",
    price: 2599000,
    imageUrl: "https://source.unsplash.com/random/800x600/?aprilia+rsv4",
    description: "Race-bred superbike with advanced aerodynamics and electronics.",
    specs: {
      engine: "1099cc V4",
      power: "217 HP",
      torque: "125 Nm",
      weight: "202 kg",
      topSpeed: "305 km/h"
    },
    colors: ["Aprilia Black", "Lava Red", "Atomic Racer Blue"],
    inStock: true,
    rating: 4.8
  },
  {
    id: "14",
    name: "Interceptor 650",
    brand: "Royal Enfield",
    category: "Classic",
    price: 289000,
    imageUrl: "https://source.unsplash.com/random/800x600/?royal+enfield+interceptor",
    description: "A modern classic with timeless styling and comfortable ergonomics.",
    specs: {
      engine: "648cc Parallel Twin",
      power: "47 HP",
      torque: "52 Nm",
      weight: "202 kg",
      topSpeed: "170 km/h"
    },
    colors: ["Orange Crush", "Baker Express", "Ravishing Red", "Glitter & Dust"],
    inStock: true,
    rating: 4.5
  },
  {
    id: "15",
    name: "Monster 1200",
    brand: "Ducati",
    category: "Naked",
    price: 1699000,
    imageUrl: "https://source.unsplash.com/random/800x600/?ducati+monster",
    description: "The iconic naked bike from Ducati combining style, character, and performance.",
    specs: {
      engine: "1198cc L-Twin",
      power: "147 HP",
      torque: "124 Nm",
      weight: "187 kg",
      topSpeed: "260 km/h"
    },
    colors: ["Ducati Red", "Black on Black"],
    inStock: true,
    rating: 4.6
  },
  // Additional motorcycles to reach 55+ products
  {
    id: "16",
    name: "Continental GT 650",
    brand: "Royal Enfield",
    category: "Cafe Racer",
    price: 299000,
    imageUrl: "https://source.unsplash.com/random/800x600/?royal+enfield+continental",
    description: "A modern cafe racer with classic styling and twin-cylinder performance.",
    specs: {
      engine: "648cc Parallel Twin",
      power: "47 HP",
      torque: "52 Nm",
      weight: "198 kg",
      topSpeed: "170 km/h"
    },
    colors: ["Black Magic", "Ventura Blue", "Dr. Mayhem", "Ice Queen"],
    inStock: true,
    rating: 4.4
  },
  {
    id: "17",
    name: "RC 390",
    brand: "KTM",
    category: "Super Sport",
    price: 299000,
    imageUrl: "https://source.unsplash.com/random/800x600/?ktm+rc",
    description: "A race-inspired single-cylinder supersport for the street and track.",
    specs: {
      engine: "373cc Single Cylinder",
      power: "43 HP",
      torque: "35 Nm",
      weight: "155 kg",
      topSpeed: "179 km/h"
    },
    colors: ["KTM Orange", "White"],
    inStock: true,
    rating: 4.5
  },
  {
    id: "18",
    name: "Thruxton RS",
    brand: "Triumph",
    category: "Cafe Racer",
    price: 1399000,
    imageUrl: "https://source.unsplash.com/random/800x600/?triumph+thruxton",
    description: "The ultimate cafe racer with modern technology and classic British style.",
    specs: {
      engine: "1200cc Parallel Twin",
      power: "105 HP",
      torque: "112 Nm",
      weight: "197 kg",
      topSpeed: "220 km/h"
    },
    colors: ["Jet Black", "Matt Storm Grey/Matt Silver Ice"],
    inStock: true,
    rating: 4.7
  },
  {
    id: "19",
    name: "Iron 883",
    brand: "Harley-Davidson",
    category: "Cruiser",
    price: 1099000,
    imageUrl: "https://source.unsplash.com/random/800x600/?harley+iron",
    description: "A blacked-out, stripped-down street machine with authentic Harley-Davidson attitude.",
    specs: {
      engine: "883cc V-Twin",
      power: "50 HP",
      torque: "70 Nm",
      weight: "247 kg",
      topSpeed: "170 km/h"
    },
    colors: ["Black Denim", "Stone Washed White Pearl"],
    inStock: true,
    rating: 4.3
  },
  {
    id: "20",
    name: "1290 Super Duke R",
    brand: "KTM",
    category: "Hyper Naked",
    price: 1899000,
    imageUrl: "https://source.unsplash.com/random/800x600/?ktm+duke",
    description: "The Beast - a fire-breathing hyper naked motorcycle with extreme performance.",
    specs: {
      engine: "1301cc V-Twin",
      power: "180 HP",
      torque: "140 Nm",
      weight: "189 kg",
      topSpeed: "270 km/h"
    },
    colors: ["KTM Orange", "Black"],
    isNew: true,
    inStock: true,
    rating: 4.8
  },
  // More motorcycles
  {
    id: "21",
    name: "Tuono V4 1100 Factory",
    brand: "Aprilia",
    category: "Hyper Naked",
    price: 2099000,
    imageUrl: "https://source.unsplash.com/random/800x600/?aprilia+tuono",
    description: "Race-derived naked with superbike performance and aggressive styling.",
    specs: {
      engine: "1077cc V4",
      power: "175 HP",
      torque: "121 Nm",
      weight: "184 kg",
      topSpeed: "269 km/h"
    },
    colors: ["Aprilia Black", "Superpole"],
    inStock: true,
    rating: 4.7
  },
  {
    id: "22",
    name: "Speed Triple 1200 RS",
    brand: "Triumph",
    category: "Hyper Naked",
    price: 1799000,
    imageUrl: "https://source.unsplash.com/random/800x600/?triumph+speed+triple",
    description: "The most powerful and aggressive Speed Triple ever, with premium components.",
    specs: {
      engine: "1160cc Inline-3",
      power: "180 HP",
      torque: "125 Nm",
      weight: "198 kg",
      topSpeed: "260 km/h"
    },
    colors: ["Sapphire Black", "Matt Silver Ice"],
    isNew: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: "23",
    name: "CB650R",
    brand: "Honda",
    category: "Naked",
    price: 899000,
    imageUrl: "https://source.unsplash.com/random/800x600/?honda+cb650r",
    description: "A neo-retro cafe racer with inline four-cylinder smoothness and reliability.",
    specs: {
      engine: "649cc Inline-4",
      power: "94 HP",
      torque: "64 Nm",
      weight: "202 kg",
      topSpeed: "225 km/h"
    },
    colors: ["Matt Gunpowder Black Metallic", "Candy Chromosphere Red"],
    inStock: true,
    rating: 4.5
  },
  {
    id: "24",
    name: "R 1250 GS Adventure",
    brand: "BMW",
    category: "Adventure",
    price: 2099000,
    imageUrl: "https://source.unsplash.com/random/800x600/?bmw+gs",
    description: "The definitive adventure motorcycle for long-distance touring and off-road exploration.",
    specs: {
      engine: "1254cc Boxer Twin",
      power: "136 HP",
      torque: "143 Nm",
      weight: "268 kg",
      topSpeed: "220 km/h"
    },
    colors: ["Ice Grey", "Kalamata Metallic Matte", "Triple Black"],
    inStock: true,
    rating: 4.9
  },
  {
    id: "25",
    name: "Dominar 400",
    brand: "Bajaj",
    category: "Sport Touring",
    price: 210000,
    imageUrl: "https://source.unsplash.com/random/800x600/?bajaj+dominar",
    description: "A powerful sports tourer offering exceptional value with advanced features.",
    specs: {
      engine: "373cc Single Cylinder",
      power: "40 HP",
      torque: "35 Nm",
      weight: "187 kg",
      topSpeed: "155 km/h"
    },
    colors: ["Aurora Green", "Vine Black", "Charcoal Black"],
    isSale: true,
    originalPrice: 225000,
    inStock: true,
    rating: 4.2
  },
  // Continuing to add more motorcycles
  {
    id: "26",
    name: "H2 SX SE",
    brand: "Kawasaki",
    category: "Sport Touring",
    price: 2699000,
    imageUrl: "https://source.unsplash.com/random/800x600/?kawasaki+h2",
    description: "The world's only supercharged sport tourer, offering incredible performance and comfort.",
    specs: {
      engine: "998cc Inline-4 Supercharged",
      power: "200 HP",
      torque: "137 Nm",
      weight: "260 kg",
      topSpeed: "300 km/h"
    },
    colors: ["Emerald Blazed Green/Metallic Diablo Black"],
    inStock: true,
    rating: 4.8
  },
  {
    id: "27",
    name: "Diavel 1260 S",
    brand: "Ducati",
    category: "Power Cruiser",
    price: 2099000,
    imageUrl: "https://source.unsplash.com/random/800x600/?ducati+diavel",
    description: "A performance power cruiser with unmistakable design and incredible handling.",
    specs: {
      engine: "1262cc L-Twin",
      power: "159 HP",
      torque: "129 Nm",
      weight: "218 kg",
      topSpeed: "270 km/h"
    },
    colors: ["Ducati Red", "Total Black"],
    inStock: true,
    rating: 4.7
  },
  {
    id: "28",
    name: "ZX-6R",
    brand: "Kawasaki",
    category: "Super Sport",
    price: 1099000,
    imageUrl: "https://source.unsplash.com/random/800x600/?kawasaki+zx6r",
    description: "A middleweight supersport with race-ready performance and aggressive styling.",
    specs: {
      engine: "636cc Inline-4",
      power: "130 HP",
      torque: "70.8 Nm",
      weight: "196 kg",
      topSpeed: "260 km/h"
    },
    colors: ["KRT Edition", "Metallic Spark Black"],
    inStock: true,
    rating: 4.6
  },
  {
    id: "29",
    name: "Africa Twin",
    brand: "Honda",
    category: "Adventure",
    price: 1599000,
    imageUrl: "https://source.unsplash.com/random/800x600/?honda+africa+twin",
    description: "A capable adventure motorcycle designed for both on and off-road exploring.",
    specs: {
      engine: "1084cc Parallel Twin",
      power: "101 HP",
      torque: "105 Nm",
      weight: "226 kg",
      topSpeed: "210 km/h"
    },
    colors: ["Grand Prix Red", "Pearl Glare White", "Darkness Black Metallic"],
    inStock: true,
    rating: 4.7
  },
  {
    id: "30",
    name: "Classic 350",
    brand: "Royal Enfield",
    category: "Classic",
    price: 189000,
    imageUrl: "https://source.unsplash.com/random/800x600/?royal+enfield+classic",
    description: "A timeless design with modern engineering, perfect for the everyday rider.",
    specs: {
      engine: "349cc Single Cylinder",
      power: "20 HP",
      torque: "27 Nm",
      weight: "195 kg",
      topSpeed: "120 km/h"
    },
    colors: ["Chrome Bronze", "Dark Stealth Black", "Signals Marsh Grey", "Gunmetal Grey"],
    inStock: true,
    rating: 4.3
  },
  // More motorcycles to complete the list
  {
    id: "31",
    name: "MT-09",
    brand: "Yamaha",
    category: "Naked",
    price: 999000,
    imageUrl: "https://source.unsplash.com/random/800x600/?yamaha+mt09",
    description: "A torque-rich triple-cylinder naked with aggressive styling and agile handling.",
    specs: {
      engine: "890cc Inline-3",
      power: "119 HP",
      torque: "93 Nm",
      weight: "189 kg",
      topSpeed: "240 km/h"
    },
    colors: ["Icon Blue", "Tech Black", "Storm Gray"],
    inStock: true,
    rating: 4.6
  },
  {
    id: "32",
    name: "Fat Boy 114",
    brand: "Harley-Davidson",
    category: "Cruiser",
    price: 1999000,
    imageUrl: "https://source.unsplash.com/random/800x600/?harley+fat+boy",
    description: "An American icon with massive presence and classic cruiser styling.",
    specs: {
      engine: "1868cc V-Twin",
      power: "94 HP",
      torque: "155 Nm",
      weight: "317 kg",
      topSpeed: "180 km/h"
    },
    colors: ["Vivid Black", "Gauntlet Gray Metallic"],
    inStock: true,
    rating: 4.5
  },
  {
    id: "33",
    name: "Himalayan",
    brand: "Royal Enfield",
    category: "Adventure",
    price: 215000,
    imageUrl: "https://source.unsplash.com/random/800x600/?royal+enfield+himalayan",
    description: "A purpose-built adventure motorcycle designed for exploring the Himalayas.",
    specs: {
      engine: "411cc Single Cylinder",
      power: "24 HP",
      torque: "32 Nm",
      weight: "199 kg",
      topSpeed: "130 km/h"
    },
    colors: ["Gravel Grey", "Pine Green", "Granite Black", "Sleet"],
    inStock: true,
    rating: 4.2
  },
  {
    id: "34",
    name: "Multistrada V4 S",
    brand: "Ducati",
    category: "Adventure",
    price: 2399000,
    imageUrl: "https://source.unsplash.com/random/800x600/?ducati+multistrada",
    description: "The perfect blend of sportbike performance and touring comfort with advanced technology.",
    specs: {
      engine: "1158cc V4",
      power: "170 HP",
      torque: "125 Nm",
      weight: "215 kg",
      topSpeed: "250 km/h"
    },
    colors: ["Ducati Red", "Aviator Grey"],
    isNew: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: "35",
    name: "RS 660",
    brand: "Aprilia",
    category: "Sport",
    price: 1399000,
    imageUrl: "https://source.unsplash.com/random/800x600/?aprilia+rs660",
    description: "A lightweight, twin-cylinder sportbike with nimble handling and advanced electronics.",
    specs: {
      engine: "659cc Parallel Twin",
      power: "100 HP",
      torque: "67 Nm",
      weight: "183 kg",
      topSpeed: "240 km/h"
    },
    colors: ["Apex Black", "Lava Red", "Acid Gold"],
    isNew: true,
    inStock: true,
    rating: 4.7
  },
  {
    id: "36",
    name: "X-Diavel S",
    brand: "Ducati",
    category: "Power Cruiser",
    price: 2199000,
    imageUrl: "https://source.unsplash.com/random/800x600/?ducati+xdiavel",
    description: "Where Ducati performance meets cruiser style, the perfect blend of comfort and power.",
    specs: {
      engine: "1262cc L-Twin",
      power: "160 HP",
      torque: "127 Nm",
      weight: "221 kg",
      topSpeed: "250 km/h"
    },
    colors: ["Thrilling Black", "Matt Liquid Concrete Grey"],
    inStock: true,
    rating: 4.6
  },
  {
    id: "37",
    name: "FTR 1200 S",
    brand: "Indian",
    category: "Roadster",
    price: 1699000,
    imageUrl: "https://source.unsplash.com/random/800x600/?indian+ftr",
    description: "American motorcycle inspired by flat track racing with modern performance.",
    specs: {
      engine: "1203cc V-Twin",
      power: "123 HP",
      torque: "120 Nm",
      weight: "235 kg",
      topSpeed: "220 km/h"
    },
    colors: ["Black", "Race Replica", "Titanium Metallic"],
    inStock: true,
    rating: 4.6
  },
  {
    id: "38",
    name: "Rocket 3 R",
    brand: "Triumph",
    category: "Power Cruiser",
    price: 2199000,
    imageUrl: "https://source.unsplash.com/random/800x600/?triumph+rocket",
    description: "The world's largest production motorcycle engine with incredible torque and presence.",
    specs: {
      engine: "2458cc Inline-3",
      power: "167 HP",
      torque: "221 Nm",
      weight: "291 kg",
      topSpeed: "230 km/h"
    },
    colors: ["Phantom Black", "Silver Ice/Cranberry Red"],
    inStock: true,
    rating: 4.8
  },
  {
    id: "39",
    name: "Rebel 1100",
    brand: "Honda",
    category: "Cruiser",
    price: 1199000,
    imageUrl: "https://source.unsplash.com/random/800x600/?honda+rebel",
    description: "A modern cruiser with Africa Twin power and innovative DCT transmission option.",
    specs: {
      engine: "1084cc Parallel Twin",
      power: "87 HP",
      torque: "98 Nm",
      weight: "223 kg",
      topSpeed: "190 km/h"
    },
    colors: ["Metallic Black", "Bordeaux Red Metallic"],
    isNew: true,
    inStock: true,
    rating: 4.5
  },
  {
    id: "40",
    name: "Trident 660",
    brand: "Triumph",
    category: "Naked",
    price: 799000,
    imageUrl: "https://source.unsplash.com/random/800x600/?triumph+trident",
    description: "A triple-cylinder middleweight naked that's accessible and engaging to ride.",
    specs: {
      engine: "660cc Inline-3",
      power: "81 HP",
      torque: "64 Nm",
      weight: "189 kg",
      topSpeed: "210 km/h"
    },
    colors: ["Crystal White", "Silver Ice", "Matt Jet Black", "Sapphire Black"],
    inStock: true,
    rating: 4.6
  },
  // Continuing with more motorcycles
  {
    id: "41",
    name: "GSX-S1000",
    brand: "Suzuki",
    category: "Naked",
    price: 1299000,
    imageUrl: "https://source.unsplash.com/random/800x600/?suzuki+gsxs1000",
    description: "A street-focused naked with GSX-R1000 derived engine and aggressive styling.",
    specs: {
      engine: "999cc Inline-4",
      power: "152 HP",
      torque: "106 Nm",
      weight: "214 kg",
      topSpeed: "260 km/h"
    },
    colors: ["Metallic Triton Blue", "Glass Matte Mechanical Gray", "Glass Sparkle Black"],
    inStock: true,
    rating: 4.5
  },
  {
    id: "42",
    name: "Hypermotard 950 SP",
    brand: "Ducati",
    category: "Supermoto",
    price: 1599000,
    imageUrl: "https://source.unsplash.com/random/800x600/?ducati+hypermotard",
    description: "The ultimate expression of the supermoto concept, agile and fun to ride.",
    specs: {
      engine: "937cc L-Twin",
      power: "114 HP",
      torque: "96 Nm",
      weight: "176 kg",
      topSpeed: "230 km/h"
    },
    colors: ["SP Livery"],
    inStock: true,
    rating: 4.7
  },
  {
    id: "43",
    name: "RR 310",
    brand: "TVS",
    category: "Sport",
    price: 270000,
    imageUrl: "https://source.unsplash.com/random/800x600/?tvs+apache",
    description: "A fully-faired sportbike with BMW co-developed engine and aerodynamic design.",
    specs: {
      engine: "312.2cc Single Cylinder",
      power: "34 HP",
      torque: "27.3 Nm",
      weight: "169.5 kg",
      topSpeed: "160 km/h"
    },
    colors: ["Racing Red", "Titanium Black"],
    isSale: true,
    originalPrice: 285000,
    inStock: true,
    rating: 4.3
  },
  {
    id: "44",
    name: "Duke 390",
    brand: "KTM",
    category: "Naked",
    price: 289000,
    imageUrl: "https://source.unsplash.com/random/800x600/?ktm+duke+390",
    description: "A lightweight naked bike with exceptional power-to-weight ratio and handling.",
    specs: {
      engine: "373cc Single Cylinder",
      power: "43 HP",
      torque: "37 Nm",
      weight: "149 kg",
      topSpeed: "170 km/h"
    },
    colors: ["KTM Orange", "White"],
    inStock: true,
    rating: 4.6
  },
  {
    id: "45",
    name: "Ninja 650",
    brand: "Kawasaki",
    category: "Sport",
    price: 699000,
    imageUrl: "https://source.unsplash.com/random/800x600/?kawasaki+ninja+650",
    description: "A versatile middleweight sportbike with user-friendly power and comfort.",
    specs: {
      engine: "649cc Parallel Twin",
      power: "68 HP",
      torque: "64 Nm",
      weight: "196 kg",
      topSpeed: "210 km/h"
    },
    colors: ["Lime Green", "Metallic Spark Black"],
    inStock: true,
    rating: 4.5
  },
  // Final set of motorcycles to complete the list
  {
    id: "46",
    name: "CB500X",
    brand: "Honda",
    category: "Adventure",
    price: 699000,
    imageUrl: "https://source.unsplash.com/random/800x600/?honda+cb500x",
    description: "A versatile adventure-styled motorcycle for both daily commuting and light touring.",
    specs: {
      engine: "471cc Parallel Twin",
      power: "47 HP",
      torque: "43 Nm",
      weight: "199 kg",
      topSpeed: "180 km/h"
    },
    colors: ["Grand Prix Red", "Matt Gunpowder Black Metallic", "Pearl Metalloid White"],
    inStock: true,
    rating: 4.4
  },
  {
    id: "47",
    name: "F 900 R",
    brand: "BMW",
    category: "Naked",
    price: 1099000,
    imageUrl: "https://source.unsplash.com/random/800x600/?bmw+f900r",
    description: "A dynamic roadster with powerful twin-cylinder engine and premium features.",
    specs: {
      engine: "895cc Parallel Twin",
      power: "105 HP",
      torque: "92 Nm",
      weight: "211 kg",
      topSpeed: "220 km/h"
    },
    colors: ["Black Storm Metallic", "San Marino Blue Metallic", "Hockenheim Silver Metallic"],
    inStock: true,
    rating: 4.5
  },
  {
    id: "48",
    name: "Scrambler 1200 XE",
    brand: "Triumph",
    category: "Scrambler",
    price: 1399000,
    imageUrl: "https://source.unsplash.com/random/800x600/?triumph+scrambler",
    description: "A powerful scrambler with genuine off-road capability and retro styling.",
    specs: {
      engine: "1200cc Parallel Twin",
      power: "89 HP",
      torque: "110 Nm",
      weight: "207 kg",
      topSpeed: "215 km/h"
    },
    colors: ["Cobalt Blue", "Jet Black", "Khaki Green/Aluminum Silver"],
    inStock: true,
    rating: 4.7
  },
  {
    id: "49",
    name: "Road King",
    brand: "Harley-Davidson",
    category: "Touring",
    price: 2099000,
    imageUrl: "https://source.unsplash.com/random/800x600/?harley+road+king",
    description: "A classic American touring motorcycle with timeless styling and modern comforts.",
    specs: {
      engine: "1745cc V-Twin",
      power: "90 HP",
      torque: "150 Nm",
      weight: "362 kg",
      topSpeed: "180 km/h"
    },
    colors: ["Vivid Black", "Mineral Green Denim", "Billiard Red"],
    inStock: true,
    rating: 4.6
  },
  {
    id: "50",
    name: "V-Strom 1050XT",
    brand: "Suzuki",
    category: "Adventure",
    price: 1399000,
    imageUrl: "https://source.unsplash.com/random/800x600/?suzuki+vstrom",
    description: "A versatile adventure tourer with comfort and reliability for long-distance journeys.",
    specs: {
      engine: "1037cc V-Twin",
      power: "107 HP",
      torque: "100 Nm",
      weight: "236 kg",
      topSpeed: "220 km/h"
    },
    colors: ["Pearl Brilliant White", "Champion Yellow No.2", "Glass Blaze Orange"],
    inStock: true,
    rating: 4.6
  },
  {
    id: "51",
    name: "MT-15",
    brand: "Yamaha",
    category: "Naked",
    price: 149000,
    imageUrl: "https://source.unsplash.com/random/800x600/?yamaha+mt15",
    description: "A compact naked streetfighter with aggressive styling and nimble handling.",
    specs: {
      engine: "155cc Single Cylinder",
      power: "18.5 HP",
      torque: "13.9 Nm",
      weight: "138 kg",
      topSpeed: "130 km/h"
    },
    colors: ["Ice Fluo-Vermillion", "Metallic Black", "Dark Matt Blue"],
    inStock: true,
    rating: 4.3
  },
  {
    id: "52",
    name: "Brutale 800 RR",
    brand: "MV Agusta",
    category: "Naked",
    price: 1899000,
    imageUrl: "https://source.unsplash.com/random/800x600/?mv+agusta+brutale",
    description: "Italian craftsmanship and design in a middleweight naked with triple-cylinder soundtrack.",
    specs: {
      engine: "798cc Inline-3",
      power: "140 HP",
      torque: "87 Nm",
      weight: "175 kg",
      topSpeed: "245 km/h"
    },
    colors: ["Shock Pearl Red/Avio Grey", "Metallic Carbon Black/Metallic Dark Grey"],
    inStock: true,
    rating: 4.7
  },
  {
    id: "53",
    name: "Thunderbird 350X",
    brand: "Royal Enfield",
    category: "Cruiser",
    price: 169000,
    imageUrl: "https://source.unsplash.com/random/800x600/?royal+enfield+thunderbird",
    description: "A modern cruiser with classic Royal Enfield DNA and urban styling.",
    specs: {
      engine: "346cc Single Cylinder",
      power: "19.8 HP",
      torque: "28 Nm",
      weight: "195 kg",
      topSpeed: "130 km/h"
    },
    colors: ["Roving Red", "Whimsical White", "Getaway Orange", "Drifter Blue"],
    isSale: true,
    originalPrice: 189000,
    inStock: true,
    rating: 4.2
  },
  {
    id: "54",
    name: "XDiavel Dark",
    brand: "Ducati",
    category: "Power Cruiser",
    price: 1999000,
    imageUrl: "https://source.unsplash.com/random/800x600/?ducati+xdiavel+dark",
    description: "A powerful cruiser with Italian flair, blending cruiser comfort with sportbike performance.",
    specs: {
      engine: "1262cc L-Twin",
      power: "160 HP",
      torque: "127 Nm",
      weight: "221 kg",
      topSpeed: "250 km/h"
    },
    colors: ["Dark Stealth"],
    inStock: true,
    rating: 4.6
  },
  {
    id: "55",
    name: "Z900",
    brand: "Kawasaki",
    category: "Naked",
    price: 899000,
    imageUrl: "https://source.unsplash.com/random/800x600/?kawasaki+z900",
    description: "A balanced naked bike with smooth inline-four power and sharp handling.",
    specs: {
      engine: "948cc Inline-4",
      power: "125 HP",
      torque: "98.6 Nm",
      weight: "212 kg",
      topSpeed: "240 km/h"
    },
    colors: ["Metallic Spark Black/Metallic Flat Spark Black", "Candy Lime Green/Metallic Spark Black"],
    inStock: true,
    rating: 4.6
  }
];

// Filter functions
export const getFilteredProducts = (
  filters: {
    brand?: string[];
    category?: string[];
    priceRange?: [number, number]; // [min, max]
    inStock?: boolean;
    newOnly?: boolean;
    saleOnly?: boolean;
  },
  sort?: string
) => {
  let filteredProducts = [...products];

  // Apply filters
  if (filters.brand && filters.brand.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      filters.brand!.includes(product.brand)
    );
  }

  if (filters.category && filters.category.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      filters.category!.includes(product.category)
    );
  }

  if (filters.priceRange && filters.priceRange.length === 2) {
    const [min, max] = filters.priceRange;
    filteredProducts = filteredProducts.filter(product => 
      product.price >= min && product.price <= max
    );
  }

  if (filters.inStock !== undefined) {
    filteredProducts = filteredProducts.filter(product => 
      product.inStock === filters.inStock
    );
  }

  if (filters.newOnly) {
    filteredProducts = filteredProducts.filter(product => 
      product.isNew === true
    );
  }

  if (filters.saleOnly) {
    filteredProducts = filteredProducts.filter(product => 
      product.isSale === true
    );
  }

  // Apply sorting
  if (sort) {
    switch (sort) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating-desc':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
  }

  return filteredProducts;
};

// Helper functions
export const getAllBrands = () => {
  return [...new Set(products.map(product => product.brand))];
};

export const getAllCategories = () => {
  return [...new Set(products.map(product => product.category))];
};

export const getMinMaxPrice = () => {
  const prices = products.map(product => product.price);
  return [Math.min(...prices), Math.max(...prices)];
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (id: string, limit = 4) => {
  const product = getProductById(id);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== id && 
      (p.category === product.category || p.brand === product.brand))
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};

export const getFeaturedProducts = (limit = 6) => {
  return products
    .filter(p => p.rating >= 4.7)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};

export const getNewProducts = (limit = 6) => {
  return products
    .filter(p => p.isNew)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};

export const getSaleProducts = (limit = 6) => {
  return products
    .filter(p => p.isSale)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};
