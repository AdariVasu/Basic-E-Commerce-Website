const fs = require('fs');
const path = require('path');

// 14 Categories configuration with prefixes and realistic price ranges
const categoriesConfig = [
  { name: "For You", prefix: "FY", minPrice: 299, maxPrice: 60000 },
  { name: "Groceries", prefix: "GRO", minPrice: 20, maxPrice: 3000 },
  { name: "Fashion", prefix: "FASH", minPrice: 299, maxPrice: 8000 },
  { name: "Mobiles", prefix: "MOB", minPrice: 3000, maxPrice: 100000 },
  { name: "Electronics", prefix: "ELE", minPrice: 499, maxPrice: 120000 },
  { name: "Beauty", prefix: "BEA", minPrice: 99, maxPrice: 4000 },
  { name: "Home", prefix: "HOM", minPrice: 199, maxPrice: 15000 },
  { name: "Appliances", prefix: "APP", minPrice: 999, maxPrice: 75000 },
  { name: "Toys & Baby", prefix: "TOY", minPrice: 199, maxPrice: 8000 },
  { name: "Food & Health", prefix: "FOO", minPrice: 199, maxPrice: 6000 },
  { name: "Auto Accessories", prefix: "AUT", minPrice: 199, maxPrice: 12000 },
  { name: "Sports & Fitness", prefix: "SPO", minPrice: 199, maxPrice: 25000 },
  { name: "Furniture", prefix: "FUR", minPrice: 1000, maxPrice: 90000 },
  { name: "Books", prefix: "BOO", minPrice: 99, maxPrice: 2500 }
];

// Rich vocabulary arrays for Mixed-Radix Combination Logic (Brands x Items x Variants)
const vocabulary = {
  "For You": {
    brands: ["Zeno", "Nova", "Aura", "Prime", "Luxe", "Vibe", "Apex", "Pulse", "Omni", "Orbit"],
    items: ["Smart Watch", "Wireless Earbuds", "Trending T-Shirt", "Bestseller Novel", "Skin Care Combo", "Home Decor Lamp", "Kitchen Gadget", "Travel Backpack", "Fitness Band", "Portable Speaker", "Sunglasses", "Perfume Gift Set", "Yoga Mat"],
    variants: ["Pro Max", "Deluxe Edition", "Ultra Slim", "V2 Black", "Wireless Plus", "Organic Touch", "Compact Fit", "Gold Series", "Eco Choice", "Studio Sound"]
  },
  "Groceries": {
    brands: ["Organic", "Fresh", "Pure", "Royal", "Nature", "Daily", "Golden", "Farm", "Heritage", "Harvest"],
    items: ["Basmati Rice", "Whole Wheat Atta", "Toor Dal", "Moong Dal", "Sunflower Oil", "Mustard Oil", "Sugar", "Iodized Salt", "Turmeric Powder", "Red Chilli Powder", "Green Tea", "Instant Coffee", "Desi Ghee", "Whole Milk"],
    variants: ["1kg", "5kg", "10kg", "500g", "1L", "5L", "Premium Pack", "Whole Grain", "Unpolished", "Cold Pressed"]
  },
  "Fashion": {
    brands: ["Men", "Women", "Kids", "Urban", "Classic", "Street", "Royal", "Denim", "Athletic", "Linen"],
    items: ["Casual Shirt", "Formal Shirt", "Kurti Deluxe", "Saree", "Jeans", "T-Shirt", "Polo Shirt", "Track Pants", "Ethnic Kurta", "Palazzo Pants", "Leggings", "Jacket", "Hoodie", "Sweatshirt"],
    variants: ["Slim Fit", "Regular Fit", "Printed Cotton", "Pure Silk", "Dark Wash", "Graphic Print", "Winter Fleece", "Summer Linen", "Stretchable", "Traditional"]
  },
  "Mobiles": {
    brands: ["Zeno", "Nexa", "Uravo", "Skyline", "Orbit", "Pulse", "Fusion", "Vertex", "Hyper", "Vortex"],
    items: ["Smartphone X Pro", "Smartphone Lite", "Galaxy Series", "Note Series", "Smartphone Max", "Smartphone Ultra", "Budget Smartphone", "5G Smartphone", "Flagship Smartphone", "Gaming Smartphone", "Camera Phone", "Foldable Phone"],
    variants: ["64GB", "128GB", "256GB", "512GB", "Titanium Gray", "Cool Blue", "Midnight Black", "Emerald Green", "12GB RAM", "16GB RAM"]
  },
  "Electronics": {
    brands: ["Sonic", "Tech", "Ultra", "Max", "Cyber", "Vision", "Pro", "Smart", "Digital", "Quantum"],
    items: ["Bluetooth Headphones", "Wireless Earphones", "Smart TV 43 inch", "Smart TV 55 inch", "LED TV 32 inch", "Laptop 15.6 inch", "Gaming Laptop", "Tablet 10 inch", "Smart Watch", "Bluetooth Speaker", "Home Theatre System", "Power Bank 20000mAh"],
    variants: ["4K Ultra HD", "ANC Noise Cancelling", "Touchscreen", "Dolby Atmos", "Mesh WiFi", "Mechanical Switch", "Dual Band", "OLED Display", "Full HD", "HDR10+"]
  },
  "Beauty": {
    brands: ["Glow", "Radiant", "Pure", "Velvet", "Botanical", "Derma", "Silk", "Lumina", "Aroma", "Luxe"],
    items: ["Vitamin C Serum", "Matte Lipstick", "Moisturizer Cream", "Sunscreen SPF50", "Face Serum", "Under Eye Cream", "Body Lotion", "Hand Cream", "Lip Balm", "Foundation", "Concealer", "Compact Powder"],
    variants: ["SPF 50", "Hyaluronic Acid", "Niacinamide 10%", "Water Gel", "Natural Glow", "24hr Wear", "Matte Finish", "Hydrating", "Paraben Free", "Organic Oil"]
  },
  "Home": {
    brands: ["Comfort", "Living", "Cozy", "Modern", "Elegance", "Decor", "Haven", "Plush", "Urban", "Nordic"],
    items: ["Bedsheet Set", "Wall Clock", "Pillow Cover Set", "Blanket", "Quilt", "Comforter", "Curtains Set", "Door Mat", "Bath Towel", "Bath Mat", "Cushion Cover Set", "Sofa Cover", "Table Cloth"],
    variants: ["100% Cotton", "300 TC Microfiber", "Reversible", "Silent Quartz", "Blackout 7ft", "Anti-Skid", "Velvet Touch", "Handwoven", "Jacquard Print", "Memory Foam"]
  },
  "Appliances": {
    brands: ["Power", "Turbo", "Cool", "Clean", "Smart", "Chef", "Frost", "Air", "Precision", "Max"],
    items: ["Refrigerator 190L", "Mixer Grinder", "Double Door Refrigerator", "Washing Machine Front Load", "Washing Machine Top Load", "Microwave Oven", "Convection Microwave", "OTG Oven", "Air Conditioner 1.5 Ton", "Split AC", "Air Cooler"],
    variants: ["5-Star Inverter", "750W 4 Jars", "Direct Cool", "Fully Automatic", "Convertible 6-in-1", "Alkaline RO", "BLDC Motor", "Digital Touch", "Filterless Clean", "Copper Condenser"]
  },
  "Toys & Baby": {
    brands: ["Fun", "Junior", "Baby", "Kids", "Play", "Tiny", "Joy", "Little", "Magic", "Wonder"],
    items: ["Remote Control Car", "Baby Stroller", "Action Figure", "Soft Toy Teddy", "Doll House", "Puzzle Set", "Board Game", "Educational Toy", "Baby Walker", "Baby Carrier", "Baby Crib", "Baby Diapers Pack"],
    variants: ["4WD High Speed", "STEM Kit", "Non-Toxic", "Reversible Handle", "Musical Light", "Soft Plush", "Building Blocks 400Pcs", "Ergonomic 3-in-1", "Wooden Puzzle", "Foldable Buggy"]
  },
  "Food & Health": {
    brands: ["Nutri", "Health", "Fit", "Bio", "Organic", "Active", "Vital", "Herbal", "Pure", "Power"],
    items: ["Whey Protein Powder", "Multivitamin Tablets", "Fish Oil Capsules", "Vitamin C Tablets", "Vitamin D Drops", "Calcium Tablets", "Protein Bar Pack", "Herbal Tea", "Green Tea Bags", "Ayurvedic Immunity Booster", "Omega 3 Capsules"],
    variants: ["100% Isolate 2kg", "60 Count", "1000mg Softgels", "Effervescent 20s", "Ayurvedic Resin", "Gluten Free", "Dark Chocolate", "Unflavored 1kg", "Cold Pressed", "Triple Strength"]
  },
  "Auto Accessories": {
    brands: ["Drive", "Auto", "Rider", "Speed", "Pro", "Shield", "Tough", "Vortex", "Apex", "Moto"],
    items: ["Car Seat Cover", "Bike Helmet", "Car Floor Mat", "Car Perfume", "Car Phone Holder", "Car Charger", "Car Vacuum Cleaner", "Car Cover", "Car Wash Shampoo", "Car Polish", "Tyre Inflator", "Car Dash Camera"],
    variants: ["ISI Certified", "7D Leatherette", "12V Digital 150PSI", "Full HD 1080p", "Waterproof All Weather", "Microfiber 800GSM", "Quick Charge 3.0", "Gel Freshener", "High Suction 120W", "Dual Visor"]
  },
  "Sports & Fitness": {
    brands: ["Fit", "Pro", "Active", "Sport", "Flex", "Power", "Champion", "Apex", "Strike", "Endure"],
    items: ["Yoga Mat", "Cricket Bat", "Dumbbells Set", "Resistance Bands", "Skipping Rope", "Treadmill", "Exercise Bike", "Home Gym Set", "Barbell Rod", "Kettlebell", "Ab Roller", "Gym Gloves", "Football"],
    variants: ["TPE 8mm Non-Slip", "Kashmir Willow", "Rubber Hex 10kg", "5 Strengths Kit", "Motorized 2.5HP", "Adjustable Weight", "Cast Iron 12kg", "FIFA Approved", "Graphite Frame", "Heavy Duty Steel"]
  },
  "Furniture": {
    brands: ["Wood", "Craft", "Urban", "Royal", "Home", "Comfort", "Design", "Solid", "Studio", "Heritage"],
    items: ["Wooden Study Table", "Office Chair", "Wooden Bookshelf", "Wardrobe 3 Door", "Bed Frame Queen", "Bed Frame King", "Bunk Bed", "Sofa Set 3 Seater", "Recliner Sofa", "Dining Table 6 Seater", "Coffee Table", "TV Stand"],
    variants: ["Solid Sheesham Wood", "Ergonomic Mesh", "Teak Finish", "Engineering Wood", "Memory Foam Pillow", "Tufted Velvet", "Marble Top", "Folding Wall Mount", "3-Door Cabinet", "L-Shape Sectional"]
  },
  "Books": {
    brands: ["Classic", "Penguin", "Harper", "Oxford", "Vintage", "National", "Scholastic", "Modern", "Standard", "Universal"],
    items: ["Fiction Novel", "Self Help Book", "Mystery Thriller Novel", "Romance Novel", "Motivational Book", "Business Strategy Book", "Biography Book", "History Book", "Science Fiction Novel", "Fantasy Novel", "Poetry Collection"],
    variants: ["Hardcover Edition", "International Bestseller", "Collector Version", "Paperback", "Illustrated Edition", "Special Box Set", "Expanded 2nd Ed", "Annotated Classic", "Deluxe Leather", "Original Translation"]
  }
};

const products = [];
let globalProductIndex = 0; // Strictly incrementing running counter for images random=1,2,3...

categoriesConfig.forEach(config => {
  const catName = config.name;
  const prefix = config.prefix;
  const minP = config.minPrice;
  const maxP = config.maxPrice;
  const vocab = vocabulary[catName];

  const B = vocab.brands.length;
  const I = vocab.items.length;
  const V = vocab.variants.length;

  // We generate exactly 105 products per category (14 x 105 = 1470 total products)
  const itemsToGenerate = 105;

  for (let k = 0; k < itemsToGenerate; k++) {
    globalProductIndex++;

    // MIXED-RADIX COMBINATION LOGIC:
    // k is decomposed into unique combinations of (bIndex, iIndex, vIndex)
    // Guaranteeing 0 repeating names within a category up to B x I x V combinations!
    const vIndex = k % V;
    const iIndex = Math.floor(k / V) % I;
    const bIndex = Math.floor(k / (V * I)) % B;

    const brand = vocab.brands[bIndex];
    const item = vocab.items[iIndex];
    const variant = vocab.variants[vIndex];

    const productName = `${brand} ${item} ${variant}`;
    
    // Product ID: prefix + 3-digit zero padded number (e.g. FASH001, MOB099)
    const idNum = (k + 1).toString().padStart(3, '0');
    const productId = `${prefix}${idNum}`;

    // Realistic price calculated deterministically in range [minP, maxP]
    // using hash of index to avoid flat range
    const priceRatio = ((k * 37 + bIndex * 13 + iIndex * 7) % 100) / 100;
    let price = Math.floor(minP + priceRatio * (maxP - minP));
    // Pretty price rounding
    if (price > 1000) {
      price = Math.floor(price / 100) * 100 + 99;
    } else if (price > 100) {
      price = Math.floor(price / 10) * 10 + 9;
    }

    const description = `High quality authentic ${productName.toLowerCase()} with express delivery and official warranty.`;

    products.push({
      id: productId,
      name: productName,
      category: catName,
      price: price,
      image: `https://picsum.photos/300?random=${globalProductIndex}`,
      description: description
    });
  }
});

// Output JSON file path
const outputDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'products.json');
const outputData = { products: products };

fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf8');

console.log(`Successfully generated ${products.length} products into ${outputPath}!`);
