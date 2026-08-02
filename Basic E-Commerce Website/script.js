/* ============================================================
   ZENTRO INDIA - COMPLETE WORKING ECOMMERCE FRONTEND
   ============================================================ */

const PRODUCTS_DATA = [
    {
        "rating":  4.7,
        "id":  "FY001",
        "category":  "For You",
        "price":  2999,
        "description":  "Track fitness calls and notifications with a stunning AMOLED display and 7-day battery life.",
        "name":  "Zeno Smart Watch Pro Max",
        "image":  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  4999
    },
    {
        "rating":  4.5,
        "id":  "FY002",
        "category":  "For You",
        "price":  1499,
        "description":  "40-hour battery active noise cancellation and crystal-clear hi-fi sound.",
        "name":  "Nova Wireless Earbuds Pro",
        "image":  "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  2999
    },
    {
        "rating":  4.4,
        "id":  "FY003",
        "category":  "For You",
        "price":  999,
        "description":  "Heart rate SpO2 step counter and sleep tracking in an ultra-slim lightweight band.",
        "name":  "FitX Smart Band 5.0",
        "image":  "https://images.unsplash.com/photo-1575311373937-040b8058b172?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1799
    },
    {
        "rating":  4.6,
        "id":  "FY004",
        "category":  "For You",
        "price":  1299,
        "description":  "360 degree surround sound IPX7 waterproof 20-hour playback on a single charge.",
        "name":  "BoomX Portable Bluetooth Speaker",
        "image":  "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  2199
    },
    {
        "rating":  4.3,
        "id":  "FY005",
        "category":  "For You",
        "price":  799,
        "description":  "Polarized lenses with a featherlight titanium frame. Style meets protection.",
        "name":  "AeroX Premium UV400 Sunglasses",
        "image":  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1499
    },
    {
        "rating":  4.5,
        "id":  "FY006",
        "category":  "For You",
        "price":  1199,
        "description":  "Water-resistant laptop compartment ergonomic straps for comfortable everyday carry.",
        "name":  "Urban Trek 30L Backpack",
        "image":  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1999
    },
    {
        "rating":  4.8,
        "id":  "FY007",
        "category":  "For You",
        "price":  1799,
        "description":  "Luxurious blend of oud sandalwood and vanilla that lasts all day.",
        "name":  "Elixir Noir Perfume 100ml",
        "image":  "https://images.unsplash.com/photo-1541643600914-78b084683702?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  2999
    },
    {
        "rating":  4.5,
        "id":  "FY008",
        "category":  "For You",
        "price":  1099,
        "description":  "Fast-charge your phone 4 times over with dual USB-C and USB-A ports.",
        "name":  "PowerZen 20000mAh Power Bank",
        "image":  "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1999
    },
    {
        "rating":  4.6,
        "id":  "FY009",
        "category":  "For You",
        "price":  2499,
        "description":  "Heated neck and shoulder massager with 4 massage nodes for deep tissue relief.",
        "name":  "ChillOut Shiatsu Neck Massager",
        "image":  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  3999
    },
    {
        "rating":  4.4,
        "id":  "FY010",
        "category":  "For You",
        "price":  699,
        "description":  "Touch-sensitive 3 color modes foldable arm with built-in USB charging port.",
        "name":  "Aura Touch LED Desk Lamp",
        "image":  "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1299
    },
    {
        "rating":  4.8,
        "id":  "GRO001",
        "category":  "Groceries",
        "price":  499,
        "description":  "Premium aged basmati rice. Long grain aromatic and perfect for biryanis.",
        "name":  "India Gate Basmati Rice 5kg",
        "image":  "https://images.unsplash.com/photo-1536304993881-ff86d42a5b6e?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  599
    },
    {
        "rating":  4.9,
        "id":  "GRO002",
        "category":  "Groceries",
        "price":  62,
        "description":  "Fresh pasteurised full cream milk packed with calcium and essential nutrients.",
        "name":  "Amul Full Cream Milk 1L",
        "image":  "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  0
    },
    {
        "rating":  4.7,
        "id":  "GRO003",
        "category":  "Groceries",
        "price":  129,
        "description":  "Hand-selected chemical-free split pigeon peas. Rich in protein and fibre.",
        "name":  "Organic Toor Dal 1kg",
        "image":  "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  159
    },
    {
        "rating":  4.6,
        "id":  "GRO004",
        "category":  "Groceries",
        "price":  139,
        "description":  "100 percent refined sunflower oil with zero trans fat. Heart-healthy cooking oil.",
        "name":  "Fortune Sunflower Oil 1L",
        "image":  "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  179
    },
    {
        "rating":  4.5,
        "id":  "GRO005",
        "category":  "Groceries",
        "price":  45,
        "description":  "Soft nutritious whole wheat bread with no added preservatives.",
        "name":  "Britannia Whole Wheat Bread 400g",
        "image":  "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  0
    },
    {
        "rating":  4.8,
        "id":  "GRO006",
        "category":  "Groceries",
        "price":  259,
        "description":  "Rich aromatic tea leaves blended for a strong refreshing cup every morning.",
        "name":  "Tata Tea Gold 500g",
        "image":  "https://images.unsplash.com/photo-1564890369478-c89ca3d9cde4?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  299
    },
    {
        "rating":  4.9,
        "id":  "GRO007",
        "category":  "Groceries",
        "price":  249,
        "description":  "Creamy salted butter made from pure milk. The taste of India kitchens.",
        "name":  "Amul Butter Salted 500g",
        "image":  "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  279
    },
    {
        "rating":  4.7,
        "id":  "GRO008",
        "category":  "Groceries",
        "price":  399,
        "description":  "100 percent whole wheat atta made from MP wheat. Guaranteed soft rotis every time.",
        "name":  "Aashirvaad Whole Wheat Atta 10kg",
        "image":  "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  449
    },
    {
        "rating":  4.8,
        "id":  "GRO009",
        "category":  "Groceries",
        "price":  168,
        "description":  "Indias favourite masala noodles. Ready in 2 minutes. Value pack of 12.",
        "name":  "Maggi 2-Minute Noodles 12-Pack",
        "image":  "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  192
    },
    {
        "rating":  4.6,
        "id":  "GRO010",
        "category":  "Groceries",
        "price":  99,
        "description":  "Crunchy spicy namkeen mix. The perfect snack for chai time.",
        "name":  "Haldirams Classic Mixture 400g",
        "image":  "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  129
    },
    {
        "rating":  4.5,
        "id":  "FASH001",
        "category":  "Fashion",
        "price":  799,
        "description":  "Slim-fit 100 percent cotton shirt in breathable poplin weave. Office or casual.",
        "name":  "Mens Oxford Casual Shirt",
        "image":  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1499
    },
    {
        "rating":  4.6,
        "id":  "FASH002",
        "category":  "Fashion",
        "price":  599,
        "description":  "Beautiful floral printed rayon kurti with a straight-fit silhouette.",
        "name":  "Womens Printed Kurti Deluxe",
        "image":  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  999
    },
    {
        "rating":  4.4,
        "id":  "FASH003",
        "category":  "Fashion",
        "price":  999,
        "description":  "Stretch denim with 4-way flex technology. Move freely all day.",
        "name":  "Mens Slim Fit Dark Stretch Jeans",
        "image":  "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1799
    },
    {
        "rating":  4.9,
        "id":  "FASH004",
        "category":  "Fashion",
        "price":  2999,
        "description":  "Handwoven pure Banarasi silk saree with zari border. Timeless elegance.",
        "name":  "Womens Banarasi Silk Saree",
        "image":  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  4999
    },
    {
        "rating":  4.7,
        "id":  "FASH005",
        "category":  "Fashion",
        "price":  1699,
        "description":  "Full-grain leather upper with cushioned insole. Crafted for comfort and style.",
        "name":  "Mens Leather Derby Shoes",
        "image":  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  2999
    },
    {
        "rating":  4.6,
        "id":  "FASH006",
        "category":  "Fashion",
        "price":  1299,
        "description":  "Spacious structured handbag with zip closure and multiple inner pockets.",
        "name":  "Womens Tan Structured Handbag",
        "image":  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  2499
    },
    {
        "rating":  4.5,
        "id":  "FASH007",
        "category":  "Fashion",
        "price":  499,
        "description":  "Moisture-wicking quick-dry polyester tee. Perfect for gym run or everyday wear.",
        "name":  "Mens Sports Drifit T-Shirt",
        "image":  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  799
    },
    {
        "rating":  4.4,
        "id":  "FASH008",
        "category":  "Fashion",
        "price":  349,
        "description":  "Soft cotton-blend track pants with elastic waist. Comfy for active kids.",
        "name":  "Kids Colorful Cotton Track Pants",
        "image":  "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  599
    },
    {
        "rating":  4.7,
        "id":  "FASH009",
        "category":  "Fashion",
        "price":  1099,
        "description":  "Flowy chiffon maxi dress with floral print. Summer-ready and breezy.",
        "name":  "Womens Floral Chiffon Maxi Dress",
        "image":  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1799
    },
    {
        "rating":  4.3,
        "id":  "FASH010",
        "category":  "Fashion",
        "price":  399,
        "description":  "Wide-brim UV-protective hat. Perfect for beach garden or city strolls.",
        "name":  "Unisex Wide-Brim Woven Straw Hat",
        "image":  "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  699
    },
    {
        "rating":  4.7,
        "id":  "MOB001",
        "category":  "Mobiles",
        "price":  18999,
        "description":  "6.7 inch AMOLED 120Hz Snapdragon 7s Gen 2 50MP triple camera 5000mAh battery.",
        "name":  "Zeno Smartphone X Pro 128GB",
        "image":  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  24999
    },
    {
        "rating":  4.4,
        "id":  "MOB002",
        "category":  "Mobiles",
        "price":  8999,
        "description":  "6.5 inch IPS LCD Helio G85 48MP rear camera 4500mAh with 18W fast charge.",
        "name":  "Nexa Smartphone Lite 64GB",
        "image":  "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  12999
    },
    {
        "rating":  4.8,
        "id":  "MOB003",
        "category":  "Mobiles",
        "price":  26999,
        "description":  "Super AMOLED 120Hz 50MP camera with OIS 5000mAh battery IP67 rated.",
        "name":  "Samsung Galaxy A35 5G 128GB",
        "image":  "https://images.unsplash.com/photo-1610945264803-c22b62831b8b?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  29999
    },
    {
        "rating":  4.6,
        "id":  "MOB004",
        "category":  "Mobiles",
        "price":  19999,
        "description":  "6.67 inch AMOLED Snapdragon 695 50MP camera 80W SUPERVOOC charging.",
        "name":  "OnePlus Nord CE4 Lite 256GB",
        "image":  "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  23999
    },
    {
        "rating":  4.7,
        "id":  "MOB005",
        "category":  "Mobiles",
        "price":  22999,
        "description":  "200MP main camera Dimensity 7200 Ultra curved AMOLED 67W wired charge.",
        "name":  "Redmi Note 13 Pro 5G 256GB",
        "image":  "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  26999
    },
    {
        "rating":  4.5,
        "id":  "MOB006",
        "category":  "Mobiles",
        "price":  17999,
        "description":  "6.67 inch CrystalRes AMOLED 144Hz Snapdragon 7s Gen 2 Dolby Vision support.",
        "name":  "POCO X6 5G 128GB",
        "image":  "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  21999
    },
    {
        "rating":  4.6,
        "id":  "MOB007",
        "category":  "Mobiles",
        "price":  27999,
        "description":  "Periscope telephoto 64MP Snapdragon 7s Gen 2 120Hz curved AMOLED display.",
        "name":  "Realme 12 Pro Plus 5G 256GB",
        "image":  "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  31999
    },
    {
        "rating":  4.5,
        "id":  "MOB008",
        "category":  "Mobiles",
        "price":  15999,
        "description":  "Dimensity 7200 144Hz AMOLED 44W FlashCharge 50MP rear camera system.",
        "name":  "iQOO Z9 5G 128GB",
        "image":  "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  18999
    },
    {
        "rating":  4.9,
        "id":  "MOB009",
        "category":  "Mobiles",
        "price":  74999,
        "description":  "A16 Bionic chip 48MP main camera Dynamic Island USB-C ceramic shield front.",
        "name":  "Apple iPhone 15 128GB",
        "image":  "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  79999
    },
    {
        "rating":  4.6,
        "id":  "MOB010",
        "category":  "Mobiles",
        "price":  29999,
        "description":  "125W TurboPower charging 50MP telephoto lens Snapdragon 7 Gen 3 vegan leather.",
        "name":  "Motorola Edge 50 Pro 256GB",
        "image":  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  34999
    },
    {
        "rating":  4.9,
        "id":  "ELE001",
        "category":  "Electronics",
        "price":  24999,
        "description":  "Industry-leading ANC 30-hour battery foldable design multipoint Bluetooth.",
        "name":  "Sony WH-1000XM5 Headphones",
        "image":  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  29999
    },
    {
        "rating":  4.6,
        "id":  "ELE002",
        "category":  "Electronics",
        "price":  22999,
        "description":  "4K UHD Vivid Picture Engine Android TV 11 Dolby Vision and Dolby Audio.",
        "name":  "Mi Smart TV 5A 43 Inch 4K",
        "image":  "https://images.unsplash.com/photo-1593359677879-a4bb92f4834c?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  27999
    },
    {
        "rating":  4.8,
        "id":  "ELE003",
        "category":  "Electronics",
        "price":  6999,
        "description":  "Electromagnetic scrolling 4000 DPI 70-day battery multi-device Bolt receiver.",
        "name":  "Logitech MX Master 3 Wireless Mouse",
        "image":  "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  9999
    },
    {
        "rating":  4.5,
        "id":  "ELE004",
        "category":  "Electronics",
        "price":  12999,
        "description":  "Print scan and copy. Wi-Fi and USB 20ppm toner-saving EconoMode.",
        "name":  "HP LaserJet MFP M140w Printer",
        "image":  "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  16999
    },
    {
        "rating":  4.5,
        "id":  "ELE005",
        "category":  "Electronics",
        "price":  7999,
        "description":  "Wireless subwoofer 120W total output HDMI ARC Bluetooth 4.2.",
        "name":  "JBL Cinema SB241 2.1ch Soundbar",
        "image":  "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  12999
    },
    {
        "rating":  4.9,
        "id":  "ELE006",
        "category":  "Electronics",
        "price":  61999,
        "description":  "24.2MP APS-C sensor Dual Pixel CMOS AF 4K video lightweight compact body.",
        "name":  "Canon EOS R50 Mirrorless Camera",
        "image":  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  69999
    },
    {
        "rating":  4.7,
        "id":  "ELE007",
        "category":  "Electronics",
        "price":  1999,
        "description":  "GaN technology fast charger. Powers laptops tablets and phones from one compact plug.",
        "name":  "Anker 65W GaN USB-C Fast Charger",
        "image":  "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  2999
    },
    {
        "rating":  4.6,
        "id":  "ELE008",
        "category":  "Electronics",
        "price":  3999,
        "description":  "Wi-Fi 6 dual-band router covers up to 1500 sq ft OFDMA and MU-MIMO.",
        "name":  "TP-Link AX1800 Wi-Fi 6 Router",
        "image":  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  5999
    },
    {
        "rating":  4.8,
        "id":  "ELE009",
        "category":  "Electronics",
        "price":  14999,
        "description":  "6.8 inch glare-free display adjustable warm light weeks of battery life IPX8.",
        "name":  "Kindle Paperwhite 16GB E-Reader",
        "image":  "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  17999
    },
    {
        "rating":  4.8,
        "id":  "ELE010",
        "category":  "Electronics",
        "price":  44900,
        "description":  "10.9 inch Liquid Retina display A14 Bionic chip USB-C Wi-Fi 6 landscape camera.",
        "name":  "Apple iPad 10th Gen 64GB Wi-Fi",
        "image":  "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  49900
    },
    {
        "rating":  4.6,
        "id":  "BEA001",
        "category":  "Beauty",
        "price":  399,
        "description":  "Highly pigmented matte finish. 12-hour stay non-drying formula. Shade Berry Best.",
        "name":  "Lakme 9-to-5 Matte Lipstick",
        "image":  "https://images.unsplash.com/photo-1586495777744-4e6b34ae8d38?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  599
    },
    {
        "rating":  4.7,
        "id":  "BEA002",
        "category":  "Beauty",
        "price":  699,
        "description":  "Oil-free moisturizer with hyaluronic acid. Quenches dry skin for 48 hours.",
        "name":  "Neutrogena Hydro Boost Gel Cream 50ml",
        "image":  "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  999
    },
    {
        "rating":  4.5,
        "id":  "BEA003",
        "category":  "Beauty",
        "price":  549,
        "description":  "20 percent Vitamin C plus E plus HA. Brightens skin fades dark spots boosts collagen.",
        "name":  "WOW Vitamin C Face Serum 30ml",
        "image":  "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  899
    },
    {
        "rating":  4.5,
        "id":  "BEA004",
        "category":  "Beauty",
        "price":  479,
        "description":  "Natural buildable coverage. Dermatologist tested. 40 inclusive shades available.",
        "name":  "Maybelline Fit Me Foundation 30ml",
        "image":  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  699
    },
    {
        "rating":  4.7,
        "id":  "BEA005",
        "category":  "Beauty",
        "price":  379,
        "description":  "Repairs hair from root to tip. Enriched with keratin actives for salon-smooth hair.",
        "name":  "Dove Keratin Strength Shampoo 650ml",
        "image":  "https://images.unsplash.com/photo-1585745336310-82dd60db9ddb?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  499
    },
    {
        "rating":  4.6,
        "id":  "BEA006",
        "category":  "Beauty",
        "price":  349,
        "description":  "Redensyl plus onion plus rosemary oil blend. Reduces hair fall and promotes growth.",
        "name":  "Mamaearth Onion Hair Oil 200ml",
        "image":  "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  499
    },
    {
        "rating":  4.8,
        "id":  "BEA007",
        "category":  "Beauty",
        "price":  1999,
        "description":  "Luxury Ayurvedic face oil with 26 rare herbs for radiant even-toned skin.",
        "name":  "Forest Essentials Kumkumadi Face Oil",
        "image":  "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  2799
    },
    {
        "rating":  4.5,
        "id":  "BEA008",
        "category":  "Beauty",
        "price":  799,
        "description":  "Gel-foam cleanser with tea tree oil. Purifies pores and controls excess oil.",
        "name":  "The Body Shop Tea Tree Face Wash",
        "image":  "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1099
    },
    {
        "rating":  4.4,
        "id":  "BEA009",
        "category":  "Beauty",
        "price":  249,
        "description":  "Natural exfoliant with raw papaya and honey. Reveals smooth glowing skin.",
        "name":  "Biotique Bio Papaya Face Scrub 235g",
        "image":  "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  399
    },
    {
        "rating":  4.6,
        "id":  "BEA010",
        "category":  "Beauty",
        "price":  1499,
        "description":  "Ceramic coating with keratin spray technology for smooth frizz-free hair in minutes.",
        "name":  "Philips HP8316 Keratin Hair Straightener",
        "image":  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  2499
    },
    {
        "rating":  4.7,
        "id":  "HOM001",
        "category":  "Home and Kitchen",
        "price":  2499,
        "description":  "3 jars 4-speed control with incher and atta kneading attachment included.",
        "name":  "Prestige Delight 750W Mixer Grinder",
        "image":  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  3999
    },
    {
        "rating":  4.8,
        "id":  "HOM002",
        "category":  "Home and Kitchen",
        "price":  1199,
        "description":  "Hard-anodised aluminium stay-cool handles induction compatible.",
        "name":  "Hawkins Contura 3L Pressure Cooker",
        "image":  "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1799
    },
    {
        "rating":  4.6,
        "id":  "HOM003",
        "category":  "Home and Kitchen",
        "price":  1799,
        "description":  "Non-stick floating plates ready indicator light cool-touch handle.",
        "name":  "Philips HD2582 Grill Sandwich Maker",
        "image":  "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  2499
    },
    {
        "rating":  4.5,
        "id":  "HOM004",
        "category":  "Home and Kitchen",
        "price":  999,
        "description":  "Chip-resistant opal glass dinnerware. Microwave and dishwasher safe.",
        "name":  "Cello Opalware Dinner Set 18 Piece",
        "image":  "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1799
    },
    {
        "rating":  4.5,
        "id":  "HOM005",
        "category":  "Home and Kitchen",
        "price":  799,
        "description":  "Full-tang knives with ergonomic handles and wooden storage block.",
        "name":  "Stainless Steel Knife Set 6 Piece",
        "image":  "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1299
    },
    {
        "rating":  4.8,
        "id":  "HOM006",
        "category":  "Home and Kitchen",
        "price":  8999,
        "description":  "RO plus UV plus UF plus TDS control 6L storage mineral guard 7-stage purification.",
        "name":  "Aquaguard Marvel RO UV 6L Purifier",
        "image":  "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  12999
    },
    {
        "rating":  4.5,
        "id":  "HOM007",
        "category":  "Home and Kitchen",
        "price":  1299,
        "description":  "Fan-forced halogen heater with thermostat and overheat protection.",
        "name":  "Bajaj 1000W Fan-Forced Room Heater",
        "image":  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1999
    },
    {
        "rating":  4.6,
        "id":  "HOM008",
        "category":  "Home and Kitchen",
        "price":  699,
        "description":  "Cotton king-size bedsheet with 2 pillow covers and fade-resistant print.",
        "name":  "King-Size Cotton Bedsheet Set",
        "image":  "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1299
    },
    {
        "rating":  4.5,
        "id":  "HOM009",
        "category":  "Home and Kitchen",
        "price":  599,
        "description":  "Aluminium kadhai with PTFE non-stick coating and tempered glass lid.",
        "name":  "Pigeon Non-Stick Kadhai 2.5L with Lid",
        "image":  "https://images.unsplash.com/photo-1556909114-e99e2da07e3d?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  999
    },
    {
        "rating":  4.7,
        "id":  "HOM010",
        "category":  "Home and Kitchen",
        "price":  19999,
        "description":  "Aqua Energie water treatment 5-star BEE rated 3D wash system.",
        "name":  "IFB 6kg Fully-Auto Washing Machine",
        "image":  "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  25999
    },
    {
        "rating":  4.7,
        "id":  "SPO001",
        "category":  "Sports",
        "price":  1499,
        "description":  "English willow blade cane handle 6-spring scoop full-size SH cricket bat.",
        "name":  "SG Sunny Tonny Cricket Bat Full Size",
        "image":  "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  2499
    },
    {
        "rating":  4.8,
        "id":  "SPO002",
        "category":  "Sports",
        "price":  8999,
        "description":  "React foam plus Air Zoom unit for smooth cushioned ride during daily training.",
        "name":  "Nike Air Zoom Running Shoes",
        "image":  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  11995
    },
    {
        "rating":  4.7,
        "id":  "SPO003",
        "category":  "Sports",
        "price":  2499,
        "description":  "Hex rubber dumbbells with chrome handles and anti-slip grip. Sold as a pair.",
        "name":  "Decathlon 8kg Rubber Dumbbell Pair",
        "image":  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  3499
    },
    {
        "rating":  4.6,
        "id":  "SPO004",
        "category":  "Sports",
        "price":  999,
        "description":  "Isometric frame medium flex shaft pre-strung. Ideal for beginners.",
        "name":  "Yonex Muscle Power 29 Badminton Racket",
        "image":  "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1499
    },
    {
        "rating":  4.5,
        "id":  "SPO005",
        "category":  "Sports",
        "price":  599,
        "description":  "TPU laminated 32-panel machine stitched football for smooth turf performance.",
        "name":  "Nivia Storm Football Size 5",
        "image":  "https://images.unsplash.com/photo-1571512599285-9340cc91df2f?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  899
    },
    {
        "rating":  4.6,
        "id":  "SPO006",
        "category":  "Sports",
        "price":  799,
        "description":  "5 resistance levels latex bands with handles ankle straps and door anchor.",
        "name":  "Boldfit 5-Level Resistance Band Set",
        "image":  "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1299
    },
    {
        "rating":  4.7,
        "id":  "SPO007",
        "category":  "Sports",
        "price":  12999,
        "description":  "22mm top board rollaway with lockable wheels competition-grade playing surface.",
        "name":  "Cosco Champion Table Tennis Table",
        "image":  "https://images.unsplash.com/photo-1611251126140-a3a0e0428ac9?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  17999
    },
    {
        "rating":  4.7,
        "id":  "SPO008",
        "category":  "Sports",
        "price":  1299,
        "description":  "Non-slip surface body-length mat with carry strap. Suitable for all yoga styles.",
        "name":  "Adidas 6mm Non-Slip Yoga Mat",
        "image":  "https://images.unsplash.com/photo-1601925228639-e4236585d5e2?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1999
    },
    {
        "rating":  4.6,
        "id":  "SPO009",
        "category":  "Sports",
        "price":  1799,
        "description":  "Rubber composite cover deep channel design. Built for outdoor courts.",
        "name":  "Spalding NBA Street Outdoor Basketball",
        "image":  "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  2499
    },
    {
        "rating":  4.5,
        "id":  "SPO010",
        "category":  "Sports",
        "price":  2999,
        "description":  "IP55 sweat-proof 35 total hours battery custom-tuned acoustic drivers.",
        "name":  "Skullcandy Push Active Sport Earbuds",
        "image":  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  4499
    },
    {
        "rating":  4.9,
        "id":  "BOO001",
        "category":  "Books",
        "price":  399,
        "description":  "The world bestselling guide to building good habits and breaking bad ones.",
        "name":  "Atomic Habits by James Clear",
        "image":  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  599
    },
    {
        "rating":  4.8,
        "id":  "BOO002",
        "category":  "Books",
        "price":  199,
        "description":  "A timeless story of personal legend and the pursuit of ones dream.",
        "name":  "The Alchemist by Paulo Coelho",
        "image":  "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  350
    },
    {
        "rating":  4.7,
        "id":  "BOO003",
        "category":  "Books",
        "price":  299,
        "description":  "The number 1 personal finance book teaching what schools do not about money.",
        "name":  "Rich Dad Poor Dad by R. Kiyosaki",
        "image":  "https://images.unsplash.com/photo-1603162925663-92f91f72a5fc?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  499
    },
    {
        "rating":  4.9,
        "id":  "BOO004",
        "category":  "Books",
        "price":  179,
        "description":  "Indias beloved President recounts his extraordinary journey to the stars.",
        "name":  "Wings of Fire by A.P.J. Abdul Kalam",
        "image":  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  250
    },
    {
        "rating":  5,
        "id":  "BOO005",
        "category":  "Books",
        "price":  2499,
        "description":  "The complete magical saga from The Philosophers Stone to The Deathly Hallows.",
        "name":  "Harry Potter Complete Box Set 1-7",
        "image":  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  3499
    },
    {
        "rating":  4.7,
        "id":  "BOO006",
        "category":  "Books",
        "price":  89,
        "description":  "Latest edition NCERT Science textbook as per CBSE 2024-25 curriculum.",
        "name":  "NCERT Class 10 Science Textbook",
        "image":  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  0
    },
    {
        "rating":  4.8,
        "id":  "BOO007",
        "category":  "Books",
        "price":  349,
        "description":  "19 short stories exploring the strange ways people think about money.",
        "name":  "The Psychology of Money by M. Housel",
        "image":  "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  499
    },
    {
        "rating":  4.7,
        "id":  "BOO008",
        "category":  "Books",
        "price":  299,
        "description":  "Notes on startups and how to build a company that creates new value in the world.",
        "name":  "Zero to One by Peter Thiel",
        "image":  "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  449
    },
    {
        "rating":  4.8,
        "id":  "BOO009",
        "category":  "Books",
        "price":  349,
        "description":  "Rules for focused success in a distracted world.",
        "name":  "Deep Work by Cal Newport",
        "image":  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  499
    },
    {
        "rating":  4.7,
        "id":  "BOO010",
        "category":  "Books",
        "price":  249,
        "description":  "The Japanese secret to a long and happy life combining purpose passion and mission.",
        "name":  "Ikigai by Hector Garcia",
        "image":  "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  399
    },
    {
        "rating":  4.9,
        "id":  "TOY001",
        "category":  "Toys",
        "price":  2999,
        "description":  "900 bricks in 33 colors. Limitless building creativity for ages 4 and up.",
        "name":  "LEGO Classic Creative Brick Box 900pc",
        "image":  "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  3999
    },
    {
        "rating":  4.8,
        "id":  "TOY002",
        "category":  "Toys",
        "price":  799,
        "description":  "20 die-cast vehicles in 1:64 scale. Collect them all!",
        "name":  "Hot Wheels 20-Car Die-Cast Gift Pack",
        "image":  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1199
    },
    {
        "rating":  4.7,
        "id":  "TOY003",
        "category":  "Toys",
        "price":  5999,
        "description":  "3-story dreamhouse with 75 plus accessories elevator pool and slide.",
        "name":  "Barbie Dreamhouse 3-Story Playset",
        "image":  "https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  7999
    },
    {
        "rating":  4.7,
        "id":  "TOY004",
        "category":  "Toys",
        "price":  699,
        "description":  "The classic property trading game. Fun for the whole family from age 8 and up.",
        "name":  "Funskool Monopoly Classic Board Game",
        "image":  "https://images.unsplash.com/photo-1611891487122-207579d67d98?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  999
    },
    {
        "rating":  4.5,
        "id":  "TOY005",
        "category":  "Toys",
        "price":  3499,
        "description":  "720P camera altitude hold one-key takeoff and landing 20 min flight time.",
        "name":  "Syma X300 Foldable RC Drone 720P",
        "image":  "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  4999
    },
    {
        "rating":  4.8,
        "id":  "TOY006",
        "category":  "Toys",
        "price":  499,
        "description":  "10 colors non-toxic and washable. Perfect for creative play for ages 2 and up.",
        "name":  "Play-Doh 10-Color Modeling Compound Set",
        "image":  "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  799
    },
    {
        "rating":  4.6,
        "id":  "TOY007",
        "category":  "Toys",
        "price":  599,
        "description":  "The iconic word-building game. Vocabulary and strategy for ages 8 and up.",
        "name":  "Funskool Scrabble Classic Family Game",
        "image":  "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  899
    },
    {
        "rating":  4.5,
        "id":  "TOY008",
        "category":  "Toys",
        "price":  999,
        "description":  "Rechargeable high-speed remote control car with 360 degree rotation stunts.",
        "name":  "High-Speed 360 Degree RC Stunt Car",
        "image":  "https://images.unsplash.com/photo-1593359677879-a4bb92f4834c?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1799
    },
    {
        "rating":  4.7,
        "id":  "TOY009",
        "category":  "Toys",
        "price":  2499,
        "description":  "Real metal parts and 1 motor. Build 25 moving models. STEM learning for ages 7 and up.",
        "name":  "Meccano Junior 25-in-1 Motorized Set",
        "image":  "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  3499
    },
    {
        "rating":  4.6,
        "id":  "TOY010",
        "category":  "Toys",
        "price":  899,
        "description":  "Interactive toy laptop with ABC numbers music and shapes for toddlers.",
        "name":  "VTech Baby Learn and Explore Laptop",
        "image":  "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1399
    },
    {
        "rating":  4.6,
        "id":  "FUR001",
        "category":  "Furniture",
        "price":  5999,
        "description":  "High-back mesh ergonomic chair adjustable lumbar support padded armrests.",
        "name":  "Nilkamal Brooklyn Mesh Office Chair",
        "image":  "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  8999
    },
    {
        "rating":  4.7,
        "id":  "FUR002",
        "category":  "Furniture",
        "price":  24999,
        "description":  "Solid sheesham wood frame linen fabric with pocket spring seat cushions.",
        "name":  "Chester 3-Seater Linen Fabric Sofa",
        "image":  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  35000
    },
    {
        "rating":  4.7,
        "id":  "FUR003",
        "category":  "Furniture",
        "price":  4999,
        "description":  "Classic adjustable shelf bookcase in white. Fits any room with endless storage.",
        "name":  "Adjustable 5-Shelf Bookcase White",
        "image":  "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  6999
    },
    {
        "rating":  4.5,
        "id":  "FUR004",
        "category":  "Furniture",
        "price":  7999,
        "description":  "Engineered wood desk with 2 drawers and cable management hole.",
        "name":  "Walnut Finish Study Table 2 Drawers",
        "image":  "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  11999
    },
    {
        "rating":  4.6,
        "id":  "FUR005",
        "category":  "Furniture",
        "price":  15999,
        "description":  "Solid pine wood slatted base. No box spring needed. Easy flat-pack assembly.",
        "name":  "Solid Pine King-Size Slatted Bed Frame",
        "image":  "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  22999
    },
    {
        "rating":  4.8,
        "id":  "FUR006",
        "category":  "Furniture",
        "price":  19999,
        "description":  "Solid acacia wood top with hairpin legs. Modern industrial aesthetic for 6 seats.",
        "name":  "Acacia Wood Hairpin Leg Dining Table",
        "image":  "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  27999
    },
    {
        "rating":  4.7,
        "id":  "FUR007",
        "category":  "Furniture",
        "price":  12999,
        "description":  "Cold-rolled steel anti-rust powder coat adjustable shelves full mirror panel.",
        "name":  "Godrej Interio 2-Door Steel Wardrobe",
        "image":  "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  17999
    },
    {
        "rating":  4.7,
        "id":  "FUR008",
        "category":  "Furniture",
        "price":  9999,
        "description":  "PU leather 180 degree recline 4D armrests lumbar and neck cushion racing style.",
        "name":  "Green Soul Beast Pro Gaming Chair",
        "image":  "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  14999
    },
    {
        "rating":  4.6,
        "id":  "FUR009",
        "category":  "Furniture",
        "price":  18999,
        "description":  "Solid sheesham wood bunk bed with safety railing and ladder. Fits 2 kids.",
        "name":  "Sheesham Wood Kids Bunk Bed with Ladder",
        "image":  "https://images.unsplash.com/photo-1578898886225-c7c894047899?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  26000
    },
    {
        "rating":  4.5,
        "id":  "FUR010",
        "category":  "Furniture",
        "price":  4999,
        "description":  "Powder-coated steel bistro chairs for balcony terrace or garden use.",
        "name":  "Balcony Bistro Steel Chair Set of 2",
        "image":  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  7999
    },
    {
        "rating":  4.7,
        "id":  "AUT001",
        "category":  "Automotive",
        "price":  599,
        "description":  "Includes microfibre cloth wash mitt detailing brush and wheel cleaner.",
        "name":  "3M Scotch-Brite Car Wash Kit 8 Piece",
        "image":  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  999
    },
    {
        "rating":  4.6,
        "id":  "AUT002",
        "category":  "Automotive",
        "price":  2499,
        "description":  "Sony STARVIS sensor 150 degree wide angle G-sensor loop recording and night vision.",
        "name":  "Viper 70R Car Dash Camera 1080P",
        "image":  "https://images.unsplash.com/photo-1617469767294-1e9b7d6fa16a?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  3999
    },
    {
        "rating":  4.7,
        "id":  "AUT003",
        "category":  "Automotive",
        "price":  1999,
        "description":  "Digital LED display auto-stop at preset PSI 12V plus USB compact and light.",
        "name":  "Michelin 12V Digital Tyre Inflator",
        "image":  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  2999
    },
    {
        "rating":  4.8,
        "id":  "AUT004",
        "category":  "Automotive",
        "price":  5999,
        "description":  "Premium sealed MF battery 400 CCA. Fits most hatchbacks and sedans.",
        "name":  "Bosch S5 55Ah Sealed Car Battery",
        "image":  "https://images.unsplash.com/photo-1620266757065-5814239881fd?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  7499
    },
    {
        "rating":  4.4,
        "id":  "AUT005",
        "category":  "Automotive",
        "price":  299,
        "description":  "Anti-slip leather wrap with thumb grips. Universal 14 to 15 inch fit.",
        "name":  "Anti-Slip Leather Steering Wheel Cover",
        "image":  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  599
    },
    {
        "rating":  4.7,
        "id":  "AUT006",
        "category":  "Automotive",
        "price":  3499,
        "description":  "Reads and clears all OBD2 fault codes live data stream compatible with all cars.",
        "name":  "Autel AL319 OBD2 Diagnostic Scanner",
        "image":  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  4999
    },
    {
        "rating":  4.5,
        "id":  "AUT007",
        "category":  "Automotive",
        "price":  1799,
        "description":  "4 ultrasonic parking sensors with LED display. Plug and play fitting.",
        "name":  "Qubo 4-Sensor Parking Assist Kit",
        "image":  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  2999
    },
    {
        "rating":  4.8,
        "id":  "AUT008",
        "category":  "Automotive",
        "price":  1299,
        "description":  "Synthetic wax formula for long-lasting protection and a showroom-quality shine.",
        "name":  "Meguiars Ultimate Liquid Wax 473ml",
        "image":  "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1899
    },
    {
        "rating":  4.8,
        "id":  "HEA001",
        "category":  "Health",
        "price":  4999,
        "description":  "24g protein per serving 5.5g BCAA low sugar. Double Rich Chocolate flavour.",
        "name":  "ON Gold Standard Whey Protein 2kg",
        "image":  "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  6499
    },
    {
        "rating":  4.7,
        "id":  "HEA002",
        "category":  "Health",
        "price":  1299,
        "description":  "Clinically validated one-click digital BP monitor. Upper arm cuff with 60-reading memory.",
        "name":  "Omron HEM-7120 BP Monitor",
        "image":  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1999
    },
    {
        "rating":  4.6,
        "id":  "HEA003",
        "category":  "Health",
        "price":  599,
        "description":  "25 essential vitamins and minerals for immunity energy and overall vitality.",
        "name":  "Setu Daily Multivitamin 60 Tablets",
        "image":  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  899
    },
    {
        "rating":  4.7,
        "id":  "HEA004",
        "category":  "Health",
        "price":  799,
        "description":  "Medical-grade SpO2 pulse rate and PI reading in 10 seconds. OLED display.",
        "name":  "Dr. Trust Pro Pulse Oximeter",
        "image":  "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1299
    },
    {
        "rating":  4.5,
        "id":  "HEA005",
        "category":  "Health",
        "price":  2499,
        "description":  "Optical HR GPS 24hr activity tracking 5-day battery life IP67 waterproof.",
        "name":  "Beurer PM25 Heart Rate Fitness Tracker",
        "image":  "https://images.unsplash.com/photo-1575311373937-040b8058b172?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  3999
    },
    {
        "rating":  4.5,
        "id":  "HEA006",
        "category":  "Health",
        "price":  199,
        "description":  "Herbal Ayurvedic formulation to support healthy blood sugar levels naturally.",
        "name":  "Himalaya Diabecon Herbal Tablets 60pc",
        "image":  "https://images.unsplash.com/photo-1550572017-ea058d2d5e2d?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  299
    },
    {
        "rating":  4.6,
        "id":  "HEA007",
        "category":  "Health",
        "price":  2499,
        "description":  "27g protein 6g BCAA zero fat instantized whey isolate. Mango flavour.",
        "name":  "Boldfit Whey Isolate Protein 1kg Mango",
        "image":  "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  3499
    },
    {
        "rating":  4.6,
        "id":  "HEA008",
        "category":  "Health",
        "price":  499,
        "description":  "Lightweight SPF50 broad-spectrum UVA and UVB protection. Non-oily finish.",
        "name":  "SPF50 PA Plus Broad-Spectrum Sunscreen 50ml",
        "image":  "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  799
    },
    {
        "rating":  4.7,
        "id":  "HEA009",
        "category":  "Health",
        "price":  279,
        "description":  "18 active herbs. Cleanses protects from infections and fights body odour.",
        "name":  "Medimix Ayurvedic Soap 125g Pack of 6",
        "image":  "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  399
    },
    {
        "rating":  4.6,
        "id":  "HEA010",
        "category":  "Health",
        "price":  699,
        "description":  "5-second result tiny blood sample 450-test memory includes 25 test strips.",
        "name":  "Dr. Morepen BG-03 Glucometer with 25 Strips",
        "image":  "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  999
    },
    {
        "rating":  4.7,
        "id":  "STA001",
        "category":  "Stationery",
        "price":  179,
        "description":  "A4 ruled notebook 300 pages 6 subject dividers micro-perforated sheets.",
        "name":  "Classmate 6-Subject Spiral Notebook A4",
        "image":  "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  249
    },
    {
        "rating":  4.9,
        "id":  "STA002",
        "category":  "Stationery",
        "price":  349,
        "description":  "Refillable retractable gel pens. Smooth writing with smear-resistant archival ink.",
        "name":  "Pilot G2 Retractable Gel Pen 10-Pack",
        "image":  "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  499
    },
    {
        "rating":  4.7,
        "id":  "STA003",
        "category":  "Stationery",
        "price":  599,
        "description":  "Vibrant 48-color water-soluble pencil set. Ideal for artists of all levels.",
        "name":  "Faber-Castell Watercolor Pencils 48pc",
        "image":  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  899
    },
    {
        "rating":  4.6,
        "id":  "STA004",
        "category":  "Stationery",
        "price":  199,
        "description":  "Precision compass divider set squares and protractor. Full geometry kit for students.",
        "name":  "Camlin 33-Part Mathematical Geometry Set",
        "image":  "https://images.unsplash.com/photo-1596496638641-e240a9b44b1f?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  299
    },
    {
        "rating":  4.5,
        "id":  "STA005",
        "category":  "Stationery",
        "price":  249,
        "description":  "FSC-certified ream-wrapped A4 paper. Bright white 75 GSM print-ready sheets.",
        "name":  "BILT A4 Copy Paper 75GSM 500 Sheets",
        "image":  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  349
    },
    {
        "rating":  4.8,
        "id":  "STA006",
        "category":  "Stationery",
        "price":  449,
        "description":  "Iconic click-action pen with QuinkFlow ballpen technology. Lasts 3 times longer.",
        "name":  "Parker Jotter Steel Ballpoint Pen",
        "image":  "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  699
    },
    {
        "rating":  4.6,
        "id":  "STA007",
        "category":  "Stationery",
        "price":  1299,
        "description":  "Double-sided board 3 markers plus eraser plus magnets included. Home office ready.",
        "name":  "Magnetic Whiteboard 60x90cm Full Kit",
        "image":  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1999
    },
    {
        "rating":  4.7,
        "id":  "STA008",
        "category":  "Stationery",
        "price":  299,
        "description":  "Matte finish writeable transparent tape. Sticks instantly and ages invisibly.",
        "name":  "Scotch Magic Tape Dispenser Pack of 6",
        "image":  "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  449
    },
    {
        "rating":  4.8,
        "id":  "STA009",
        "category":  "Stationery",
        "price":  799,
        "description":  "0.3mm fineliner with metal-clad tip. Water-based ink. Cap-off safe for days without drying.",
        "name":  "Staedtler Triplus Fineliner 0.3mm 20pc",
        "image":  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  1199
    },
    {
        "rating":  4.5,
        "id":  "STA010",
        "category":  "Stationery",
        "price":  499,
        "description":  "3-ring binder with zip closure pen loops and card holder. Perfect for office use.",
        "name":  "Solo Executive A4 Zip Document Bag",
        "image":  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400\u0026h=400\u0026fit=crop\u0026auto=format",
        "oldPrice":  799
    }
];

let cartState = JSON.parse(localStorage.getItem('ztr_cart') || '[]');
let wishlistState = JSON.parse(localStorage.getItem('ztr_wishlist') || '[]');
let ordersHistory = JSON.parse(localStorage.getItem('ztr_orders') || '[]');
let usersDB = JSON.parse(localStorage.getItem('ztr_users') || 'null') || [{
  fullName: 'Rahul Sharma', email: 'rahul@example.com',
  userId: 'rahul', phone: '9876543210', password: 'rahul123',
  address: 'Indiranagar Main Road', city: 'Bengaluru', state: 'Karnataka', pincode: '560001'
}];
let currentUser = JSON.parse(localStorage.getItem('ztr_session') || 'null');

let currentCategory = 'all';
let currentSearchQuery = '';
let currentSort = 'featured';
let currentPage = 1;
const PAGE_SIZE = 24;
let currentPincode = localStorage.getItem('ztr_pin') || '560001';
let isDiscountApplied = false;
let activeQuickViewId = null;
let activeOTPCode = null;
let activeOTPResetUserId = null;

function saveState() {
  localStorage.setItem('ztr_cart', JSON.stringify(cartState));
  localStorage.setItem('ztr_wishlist', JSON.stringify(wishlistState));
  localStorage.setItem('ztr_orders', JSON.stringify(ordersHistory));
  localStorage.setItem('ztr_users', JSON.stringify(usersDB));
  localStorage.setItem('ztr_session', currentUser ? JSON.stringify(currentUser) : '');
  localStorage.setItem('ztr_pin', currentPincode);
}

function getFilteredAndSortedProducts() {
  let filtered = PRODUCTS_DATA.slice();
  if (currentCategory && currentCategory !== 'all') {
    const cl = currentCategory.toLowerCase();
    filtered = filtered.filter(p => p.category && p.category.toLowerCase() === cl);
  }
  if (currentSearchQuery.trim()) {
    const q = currentSearchQuery.toLowerCase().trim();
    filtered = filtered.filter(p =>
      (p.name && p.name.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q))
    );
  }
  if (currentSort === 'price-low') filtered.sort((a, b) => a.price - b.price);
  else if (currentSort === 'price-high') filtered.sort((a, b) => b.price - a.price);
  else if (currentSort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
  return filtered;
}

function renderStarRating(rating) {
  rating = rating || 4.5;
  let html = '';
  const full = Math.floor(rating);
  const half = (rating % 1) >= 0.5;
  for (let i = 0; i < full; i++) html += '<i class="fa-solid fa-star"></i>';
  if (half) html += '<i class="fa-solid fa-star-half-stroke"></i>';
  const empty = 5 - Math.ceil(rating);
  for (let i = 0; i < empty; i++) html += '<i class="fa-regular fa-star"></i>';
  return html;
}

function renderProductsCatalog() {
  const allFiltered = getFilteredAndSortedProducts();
  const totalCount = allFiltered.length;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const pageProducts = allFiltered.slice(startIndex, startIndex + PAGE_SIZE);

  const countBadge = document.getElementById('products-count');
  const grid = document.getElementById('products-grid');
  const emptyState = document.getElementById('empty-catalog-state');

  if (countBadge) countBadge.textContent = currentSearchQuery.trim()
    ? 'Results for "' + currentSearchQuery + '" (' + totalCount + ')'
    : 'Showing ' + totalCount.toLocaleString('en-IN') + ' authentic products';

  if (totalCount === 0 || pageProducts.length === 0) {
    if (grid) grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    renderPaginationControls(0);
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  if (grid) {
    grid.innerHTML = pageProducts.map(function(p) {
      const stars = renderStarRating(p.rating);
      const wishlisted = wishlistState.includes(p.id);
      const priceFormatted = p.price ? p.price.toLocaleString('en-IN') : '299';
      const oldPriceHtml = p.oldPrice ? '<span class="old-price">\u20B9' + p.oldPrice.toLocaleString('en-IN') + '</span>' : '';
      return [
        '<div class="product-card">',
          '<div class="product-image-box">',
            '<button type="button" class="card-wishlist-btn ' + (wishlisted ? 'active' : '') + '" onclick="toggleWishlist(\'' + p.id + '\')" title="Wishlist">',
              '<i class="fa-' + (wishlisted ? 'solid' : 'regular') + ' fa-heart"></i>',
            '</button>',
            '<img src="' + p.image + '" alt="' + p.name + '" class="product-img" loading="lazy">',
            '<button type="button" class="quickview-trigger" onclick="openQuickViewModal(\'' + p.id + '\')">',
              '<i class="fa-regular fa-eye"></i> Quick View',
            '</button>',
          '</div>',
          '<div class="product-info">',
            '<span class="product-category-tag">' + p.category + '</span>',
            '<h3 class="product-title">' + p.name + '</h3>',
            '<div class="product-rating">',
              '<div class="stars-wrapper">' + stars + '</div>',
              '<span class="rating-count">(45)</span>',
            '</div>',
            '<div class="product-footer">',
              '<div class="price-box">',
                '<span class="current-price">\u20B9' + priceFormatted + '</span>',
                oldPriceHtml,
              '</div>',
              '<button type="button" class="add-cart-btn" onclick="handleAddToCart(\'' + p.id + '\')" aria-label="Add to cart">',
                '<i class="fa-solid fa-cart-plus"></i>',
              '</button>',
            '</div>',
          '</div>',
        '</div>'
      ].join('');
    }).join('');
  }

  renderPaginationControls(totalCount);
}

function renderPaginationControls(totalCount) {
  let paginationContainer = document.getElementById('pagination-container');
  if (!paginationContainer) {
    paginationContainer = document.createElement('div');
    paginationContainer.id = 'pagination-container';
    paginationContainer.style.cssText = 'display:flex;justify-content:center;align-items:center;gap:1rem;margin-top:2.5rem;width:100%;';
    const grid = document.getElementById('products-grid');
    if (grid) grid.after(paginationContainer);
  }

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);
  if (totalPages <= 1) { paginationContainer.innerHTML = ''; return; }

  paginationContainer.innerHTML =
    '<button type="button" class="btn btn-secondary btn-sm" ' + (currentPage === 1 ? 'disabled' : '') + ' onclick="changePage(' + (currentPage - 1) + ')"><i class="fa-solid fa-chevron-left"></i> Previous</button>' +
    '<span style="font-weight:700;font-size:0.9rem;color:#475569;">Page <strong>' + currentPage + '</strong> of <strong>' + totalPages + '</strong></span>' +
    '<button type="button" class="btn btn-secondary btn-sm" ' + (currentPage === totalPages ? 'disabled' : '') + ' onclick="changePage(' + (currentPage + 1) + ')">Next <i class="fa-solid fa-chevron-right"></i></button>';
}

function changePage(newPage) {
  currentPage = newPage;
  renderProductsCatalog();
  var sec = document.getElementById('products-section');
  if (sec) sec.scrollIntoView({ behavior: 'smooth' });
}

function toggleWishlist(productId) {
  var idx = wishlistState.indexOf(productId);
  var product = PRODUCTS_DATA.find(function(p){ return p.id === productId; });
  if (idx > -1) {
    wishlistState.splice(idx, 1);
    showToast('Removed from Wishlist', 'info');
  } else {
    wishlistState.push(productId);
    showToast('Added "' + (product ? product.name : 'item') + '" to Wishlist!', 'success');
  }
  saveState();
  renderWishlistUI();
  renderProductsCatalog();
}

function handleAddToCart(productId, quantityToAdd) {
  quantityToAdd = quantityToAdd || 1;
  var product = PRODUCTS_DATA.find(function(p){ return p.id === productId; });
  if (!product) return;
  var existingIdx = cartState.findIndex(function(item){ return item.id === productId; });
  if (existingIdx > -1) {
    cartState[existingIdx].quantity += quantityToAdd;
  } else {
    cartState.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: quantityToAdd });
  }
  saveState();
  renderCartUI();
  showToast('Added "' + product.name + '" to cart!', 'success');
}

function updateCartQuantity(productId, delta) {
  var idx = cartState.findIndex(function(item){ return item.id === productId; });
  if (idx === -1) return;
  cartState[idx].quantity += delta;
  if (cartState[idx].quantity <= 0) cartState.splice(idx, 1);
  saveState();
  renderCartUI();
}

function removeCartItem(productId) {
  cartState = cartState.filter(function(item){ return item.id !== productId; });
  saveState();
  renderCartUI();
}

function clearCart() {
  cartState = [];
  isDiscountApplied = false;
  saveState();
  renderCartUI();
}

function renderCartUI() {
  var totalItems = cartState.reduce(function(s, i){ return s + i.quantity; }, 0);
  var cartCountBadge = document.getElementById('cart-count-badge');
  var drawerCount = document.getElementById('drawer-item-count');
  var cartItemsList = document.getElementById('cart-items-list');
  var cartEmptyView = document.getElementById('cart-empty-view');
  var cartFooterView = document.getElementById('cart-footer-view');
  var cartSubtotalEl = document.getElementById('cart-subtotal');
  var cartDiscountEl = document.getElementById('cart-discount');
  var cartShippingEl = document.getElementById('cart-shipping');
  var cartTotalEl = document.getElementById('cart-total');
  var discountRow = document.getElementById('discount-row');
  var promoAppliedTag = document.getElementById('promo-applied-tag');

  if (cartCountBadge) cartCountBadge.textContent = totalItems;
  if (drawerCount) drawerCount.textContent = totalItems + ' item' + (totalItems === 1 ? '' : 's');

  if (cartState.length === 0) {
    if (cartItemsList) cartItemsList.innerHTML = '';
    if (cartEmptyView) cartEmptyView.classList.remove('hidden');
    if (cartFooterView) cartFooterView.classList.add('hidden');
    return;
  }

  if (cartEmptyView) cartEmptyView.classList.add('hidden');
  if (cartFooterView) cartFooterView.classList.remove('hidden');

  if (cartItemsList) {
    cartItemsList.innerHTML = cartState.map(function(item) {
      return '<div class="cart-item">' +
        '<img src="' + item.image + '" alt="' + item.name + '" class="cart-item-img">' +
        '<div class="cart-item-info">' +
          '<h4 class="cart-item-title">' + item.name + '</h4>' +
          '<div class="cart-item-price">\u20B9' + (item.price * item.quantity).toLocaleString('en-IN') + '</div>' +
          '<div class="cart-item-controls">' +
            '<div class="quantity-picker">' +
              '<button type="button" class="qty-btn" onclick="updateCartQuantity(\'' + item.id + '\',-1)"><i class="fa-solid fa-minus"></i></button>' +
              '<input type="number" value="' + item.quantity + '" readonly>' +
              '<button type="button" class="qty-btn" onclick="updateCartQuantity(\'' + item.id + '\',1)"><i class="fa-solid fa-plus"></i></button>' +
            '</div>' +
            '<button type="button" class="cart-item-remove" onclick="removeCartItem(\'' + item.id + '\')">Remove</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  var subtotal = cartState.reduce(function(s, i){ return s + (i.price * i.quantity); }, 0);
  var discountAmount = isDiscountApplied ? Math.floor(subtotal * 0.1) : 0;
  var shippingAmount = subtotal >= 499 || subtotal === 0 ? 0 : 50;
  var grandTotal = subtotal - discountAmount + shippingAmount;

  if (cartSubtotalEl) cartSubtotalEl.textContent = '\u20B9' + subtotal.toLocaleString('en-IN');
  if (isDiscountApplied) {
    if (discountRow) discountRow.classList.remove('hidden');
    if (cartDiscountEl) cartDiscountEl.textContent = '-\u20B9' + discountAmount.toLocaleString('en-IN');
    if (promoAppliedTag) promoAppliedTag.classList.remove('hidden');
  } else {
    if (discountRow) discountRow.classList.add('hidden');
    if (promoAppliedTag) promoAppliedTag.classList.add('hidden');
  }
  if (cartShippingEl) cartShippingEl.textContent = shippingAmount === 0 ? 'FREE' : '\u20B9' + shippingAmount;
  if (cartTotalEl) cartTotalEl.textContent = '\u20B9' + grandTotal.toLocaleString('en-IN');
}

function renderWishlistUI() {
  var wishlistCountBadge = document.getElementById('wishlist-count-badge');
  var wishlistItemsContainer = document.getElementById('wishlist-items-container');
  var wishlistEmptyView = document.getElementById('wishlist-empty-view');

  if (wishlistCountBadge) wishlistCountBadge.textContent = wishlistState.length;
  if (wishlistState.length === 0) {
    if (wishlistItemsContainer) wishlistItemsContainer.innerHTML = '';
    if (wishlistEmptyView) wishlistEmptyView.classList.remove('hidden');
    return;
  }
  if (wishlistEmptyView) wishlistEmptyView.classList.add('hidden');
  var items = PRODUCTS_DATA.filter(function(p){ return wishlistState.includes(p.id); });
  if (wishlistItemsContainer) {
    wishlistItemsContainer.innerHTML = items.map(function(p) {
      return '<div style="display:flex;gap:1rem;padding:0.8rem 0;border-bottom:1px solid #e2e8f0;align-items:center;">' +
        '<img src="' + p.image + '" alt="' + p.name + '" style="width:60px;height:60px;object-fit:contain;background:#f8fafc;border-radius:6px;">' +
        '<div style="flex:1;">' +
          '<h4 style="font-size:0.9rem;font-weight:700;">' + p.name + '</h4>' +
          '<div style="font-weight:800;color:#2874f0;">\u20B9' + p.price.toLocaleString('en-IN') + '</div>' +
        '</div>' +
        '<button type="button" class="btn btn-primary btn-sm" onclick="handleAddToCart(\'' + p.id + '\');toggleWishlist(\'' + p.id + '\');">Move to Cart</button>' +
      '</div>';
    }).join('');
  }
}

function renderOrdersHistoryUI() {
  var ordersHistoryContainer = document.getElementById('orders-history-container');
  var ordersEmptyView = document.getElementById('orders-empty-view');
  if (ordersHistory.length === 0) {
    if (ordersHistoryContainer) ordersHistoryContainer.innerHTML = '';
    if (ordersEmptyView) ordersEmptyView.classList.remove('hidden');
    return;
  }
  if (ordersEmptyView) ordersEmptyView.classList.add('hidden');
  if (ordersHistoryContainer) {
    ordersHistoryContainer.innerHTML = ordersHistory.map(function(order) {
      return '<div style="background:#f8fafc;padding:1rem;border-radius:8px;margin-bottom:1rem;border:1px solid #e2e8f0;">' +
        '<div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;">' +
          '<strong>Order: ' + order.orderId + '</strong>' +
          '<span style="color:#2874f0;font-weight:800;">\u20B9' + order.total.toLocaleString('en-IN') + '</span>' +
        '</div>' +
        '<div style="font-size:0.8rem;color:#64748b;">Placed on ' + order.date + ' &bull; Status: <strong style="color:#10b981;">In Transit</strong></div>' +
      '</div>';
    }).join('');
  }
}

function updateAuthUI() {
  var openLoginBtn = document.getElementById('open-login-btn');
  var userProfileMenu = document.getElementById('user-profile-menu');
  var userAvatarInitials = document.getElementById('user-avatar-initials');
  var userDisplayName = document.getElementById('user-display-name');
  var dropdownFullName = document.getElementById('dropdown-full-name');
  var dropdownUserId = document.getElementById('dropdown-user-id');

  if (currentUser) {
    if (openLoginBtn) openLoginBtn.classList.add('hidden');
    if (userProfileMenu) userProfileMenu.classList.remove('hidden');
    var initials = currentUser.fullName.split(' ').map(function(n){ return n[0]; }).join('').substring(0,2).toUpperCase();
    if (userAvatarInitials) userAvatarInitials.textContent = initials || 'IN';
    if (userDisplayName) userDisplayName.textContent = 'Hello, ' + currentUser.fullName.split(' ')[0];
    if (dropdownFullName) dropdownFullName.textContent = currentUser.fullName;
    if (dropdownUserId) dropdownUserId.textContent = 'ID: @' + currentUser.userId;
    var coName = document.getElementById('co-name');
    var coEmail = document.getElementById('co-email');
    var coPhone = document.getElementById('co-phone');
    if (coName) coName.value = currentUser.fullName;
    if (coEmail) coEmail.value = currentUser.email;
    if (coPhone) coPhone.value = currentUser.phone || '';
  } else {
    if (openLoginBtn) openLoginBtn.classList.remove('hidden');
    if (userProfileMenu) userProfileMenu.classList.add('hidden');
  }
}

function updatePincodeUI() {
  var el = document.getElementById('header-pincode-display');
  var inp = document.getElementById('pincode-input');
  if (el) el.textContent = 'Deliver to: ' + currentPincode + ' (Express Delivery)';
  if (inp) inp.value = currentPincode;
}

function loginUser(idOrEmailOrPhone, password) {
  var query = idOrEmailOrPhone.trim().toLowerCase();
  var user = usersDB.find(function(u) {
    return u.userId.toLowerCase() === query || u.email.toLowerCase() === query || (u.phone && u.phone.includes(query));
  });
  if (!user) { showToast('Mobile Number / User ID not registered.', 'warning'); return false; }
  if (user.password !== password) { showToast('Incorrect password.', 'warning'); return false; }
  currentUser = user;
  saveState();
  updateAuthUI();
  closeAuthModal();
  showToast('Welcome back, ' + user.fullName + '!', 'success');
  return true;
}

function registerUser(fullName, email, userId, phone, password) {
  var cleanId = userId.trim().toLowerCase();
  if (usersDB.some(function(u){ return u.userId.toLowerCase() === cleanId; })) { showToast('User ID already taken.', 'warning'); return false; }
  var newUser = { fullName: fullName.trim(), email: email.trim().toLowerCase(), userId: cleanId, phone: phone.trim(), password: password, address: 'Indiranagar Main Road', city: 'Bengaluru', state: 'Karnataka', pincode: '560001' };
  usersDB.push(newUser);
  currentUser = newUser;
  saveState();
  updateAuthUI();
  closeAuthModal();
  showToast('Account Created! Welcome, ' + newUser.fullName + '!', 'success');
  return true;
}

function logoutUser() {
  currentUser = null;
  saveState();
  updateAuthUI();
  var userDropdownCard = document.getElementById('user-dropdown-card');
  if (userDropdownCard) userDropdownCard.classList.add('hidden');
  showToast('Logged out successfully.', 'info');
}

function generateOTP(idOrEmailOrPhone) {
  var query = idOrEmailOrPhone.trim().toLowerCase();
  var user = usersDB.find(function(u) {
    return u.userId.toLowerCase() === query || u.email.toLowerCase() === query || (u.phone && u.phone.includes(query));
  });
  if (!user) { showToast('No account found.', 'warning'); return false; }
  activeOTPResetUserId = user.userId;
  activeOTPCode = Math.floor(100000 + Math.random() * 900000).toString();
  var displayEl = document.getElementById('displayed-otp-code');
  var step1 = document.getElementById('otp-request-step');
  var step2 = document.getElementById('otp-verify-step');
  if (displayEl) displayEl.textContent = activeOTPCode;
  if (step1) step1.classList.add('hidden');
  if (step2) step2.classList.remove('hidden');
  showToast('OTP Code: ' + activeOTPCode, 'info');
  return true;
}

function verifyOTPAndReset(inputOtp, newPassword) {
  if (inputOtp.trim() !== activeOTPCode) { showToast('Invalid OTP code.', 'warning'); return false; }
  var idx = usersDB.findIndex(function(u){ return u.userId === activeOTPResetUserId; });
  if (idx !== -1) {
    if (newPassword) usersDB[idx].password = newPassword;
    currentUser = usersDB[idx];
    saveState();
    updateAuthUI();
    closeAuthModal();
    showToast('OTP verified! Signed in.', 'success');
    activeOTPCode = null;
    activeOTPResetUserId = null;
    return true;
  }
  return false;
}

function handlePincodeSubmit(pincodeVal) {
  if (!pincodeVal || pincodeVal.trim().length < 6) { showToast('Enter a valid 6-digit pincode.', 'warning'); return; }
  currentPincode = pincodeVal.trim();
  saveState();
  updatePincodeUI();
  var pincodeResultBox = document.getElementById('pincode-result-box');
  if (pincodeResultBox) {
    pincodeResultBox.innerHTML = '<div style="color:#10b981;font-weight:700;"><i class="fa-solid fa-circle-check"></i> Delivery available for pincode <strong>' + currentPincode + '</strong>!</div><div style="margin-top:0.4rem;font-size:0.85rem;">Eligible for <strong>FREE Express Delivery</strong> by Tomorrow, 5:00 PM.</div>';
    pincodeResultBox.classList.remove('hidden');
  }
  showToast('Pincode updated to ' + currentPincode + '!', 'success');
}

function openAuthModal(view) {
  view = view || 'login';
  var authModal = document.getElementById('auth-modal');
  var authLoginView = document.getElementById('auth-login-view');
  var authRegisterView = document.getElementById('auth-register-view');
  var authForgotView = document.getElementById('auth-forgot-view');
  var tabLoginBtn = document.getElementById('tab-login-btn');
  var tabRegisterBtn = document.getElementById('tab-register-btn');
  if (authModal) authModal.classList.remove('hidden');
  if (view === 'login') {
    if (authLoginView) authLoginView.classList.remove('hidden');
    if (authRegisterView) authRegisterView.classList.add('hidden');
    if (authForgotView) authForgotView.classList.add('hidden');
    if (tabLoginBtn) tabLoginBtn.classList.add('active');
    if (tabRegisterBtn) tabRegisterBtn.classList.remove('active');
  } else {
    if (authLoginView) authLoginView.classList.add('hidden');
    if (authRegisterView) authRegisterView.classList.remove('hidden');
    if (authForgotView) authForgotView.classList.add('hidden');
    if (tabLoginBtn) tabLoginBtn.classList.remove('active');
    if (tabRegisterBtn) tabRegisterBtn.classList.add('active');
  }
}

function closeAuthModal() {
  var authModal = document.getElementById('auth-modal');
  if (authModal) authModal.classList.add('hidden');
}

function openQuickViewModal(productId) {
  var product = PRODUCTS_DATA.find(function(p){ return p.id === productId; });
  if (!product) return;
  activeQuickViewId = product.id;
  var qvImage = document.getElementById('qv-image');
  var qvCategory = document.getElementById('qv-category');
  var qvTitle = document.getElementById('qv-title');
  var qvStars = document.getElementById('qv-stars');
  var qvReviewsCount = document.getElementById('qv-reviews-count');
  var qvPrice = document.getElementById('qv-price');
  var qvOldPrice = document.getElementById('qv-old-price');
  var qvDescription = document.getElementById('qv-description');
  var qvQtyInput = document.getElementById('qv-qty-input');
  var quickviewModal = document.getElementById('quickview-modal');
  if (qvImage) { qvImage.src = product.image; qvImage.alt = product.name; }
  if (qvCategory) qvCategory.textContent = product.category;
  if (qvTitle) qvTitle.textContent = product.name;
  if (qvStars) qvStars.innerHTML = renderStarRating(product.rating);
  if (qvReviewsCount) qvReviewsCount.textContent = '(45 customer reviews)';
  if (qvPrice) qvPrice.textContent = '\u20B9' + product.price.toLocaleString('en-IN');
  if (qvOldPrice) qvOldPrice.textContent = product.oldPrice ? '\u20B9' + product.oldPrice.toLocaleString('en-IN') : '';
  if (qvDescription) qvDescription.textContent = product.description;
  if (qvQtyInput) qvQtyInput.value = 1;
  if (quickviewModal) quickviewModal.classList.remove('hidden');
}

function closeQuickViewModal() {
  var quickviewModal = document.getElementById('quickview-modal');
  if (quickviewModal) quickviewModal.classList.add('hidden');
  activeQuickViewId = null;
}

function openCartDrawer() {
  var cartDrawer = document.getElementById('cart-drawer');
  var cartOverlay = document.getElementById('cart-overlay');
  if (cartDrawer) cartDrawer.classList.add('active');
  if (cartOverlay) cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  var cartDrawer = document.getElementById('cart-drawer');
  var cartOverlay = document.getElementById('cart-overlay');
  if (cartDrawer) cartDrawer.classList.remove('active');
  if (cartOverlay) cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function openCheckoutModal() {
  if (cartState.length === 0) { showToast('Your cart is empty!', 'warning'); return; }
  closeCartDrawer();
  var subtotal = cartState.reduce(function(s, i){ return s + (i.price * i.quantity); }, 0);
  var discountAmount = isDiscountApplied ? Math.floor(subtotal * 0.1) : 0;
  var shippingAmount = subtotal >= 499 ? 0 : 50;
  var grandTotal = subtotal - discountAmount + shippingAmount;
  var checkoutItemsPreview = document.getElementById('checkout-items-preview');
  var coSubtotal = document.getElementById('co-subtotal');
  var coShipping = document.getElementById('co-shipping');
  var coTotal = document.getElementById('co-total');
  var coDiscountRow = document.getElementById('co-discount-row');
  var coDiscount = document.getElementById('co-discount');
  if (checkoutItemsPreview) checkoutItemsPreview.innerHTML = cartState.map(function(item){ return '<div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:0.4rem;"><span>' + item.name + ' x' + item.quantity + '</span><span>\u20B9' + (item.price * item.quantity).toLocaleString('en-IN') + '</span></div>'; }).join('');
  if (coSubtotal) coSubtotal.textContent = '\u20B9' + subtotal.toLocaleString('en-IN');
  if (coShipping) coShipping.textContent = shippingAmount === 0 ? 'FREE' : '\u20B9' + shippingAmount;
  if (coTotal) coTotal.textContent = '\u20B9' + grandTotal.toLocaleString('en-IN');
  if (isDiscountApplied) {
    if (coDiscountRow) coDiscountRow.classList.remove('hidden');
    if (coDiscount) coDiscount.textContent = '-\u20B9' + discountAmount.toLocaleString('en-IN');
  } else {
    if (coDiscountRow) coDiscountRow.classList.add('hidden');
  }
  if (currentUser) {
    var coName = document.getElementById('co-name');
    var coEmail = document.getElementById('co-email');
    var coPhone = document.getElementById('co-phone');
    if (coName) coName.value = currentUser.fullName;
    if (coEmail) coEmail.value = currentUser.email;
    if (coPhone) coPhone.value = currentUser.phone || '';
  }
  var checkoutFormView = document.getElementById('checkout-form-view');
  var checkoutSuccessView = document.getElementById('checkout-success-view');
  var checkoutModal = document.getElementById('checkout-modal');
  if (checkoutFormView) checkoutFormView.classList.remove('hidden');
  if (checkoutSuccessView) checkoutSuccessView.classList.add('hidden');
  if (checkoutModal) checkoutModal.classList.remove('hidden');
}

function closeCheckoutModal() {
  var checkoutModal = document.getElementById('checkout-modal');
  if (checkoutModal) checkoutModal.classList.add('hidden');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  var userEmail = (document.getElementById('co-email') || {}).value || 'customer@example.com';
  var orderRef = '#ZEN-' + Math.floor(100000 + Math.random() * 900000);
  var subtotal = cartState.reduce(function(s, i){ return s + (i.price * i.quantity); }, 0);
  var shippingAmount = subtotal >= 499 ? 0 : 50;
  var grandTotal = subtotal + shippingAmount;
  var newOrder = {
    orderId: orderRef,
    date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
    items: cartState.slice(),
    total: grandTotal,
    status: 'In Transit'
  };
  ordersHistory.unshift(newOrder);
  var successOrderId = document.getElementById('success-order-id');
  var successEmail = document.getElementById('success-email');
  if (successOrderId) successOrderId.textContent = orderRef;
  if (successEmail) successEmail.textContent = userEmail;
  cartState = [];
  isDiscountApplied = false;
  saveState();
  renderCartUI();
  renderOrdersHistoryUI();
  var checkoutFormView = document.getElementById('checkout-form-view');
  var checkoutSuccessView = document.getElementById('checkout-success-view');
  if (checkoutFormView) checkoutFormView.classList.add('hidden');
  if (checkoutSuccessView) checkoutSuccessView.classList.remove('hidden');
  showToast('Order placed successfully!', 'success');
}

function applyPromoCode() {
  var promoInput = document.getElementById('promo-input');
  var code = promoInput ? promoInput.value.trim().toUpperCase() : '';
  if (code === 'SAVE10') {
    isDiscountApplied = true;
    saveState();
    renderCartUI();
    showToast('Promo code "SAVE10" applied! 10% off.', 'success');
  } else {
    showToast('Invalid promo code. Try SAVE10', 'warning');
  }
}

function removePromoCode() {
  isDiscountApplied = false;
  saveState();
  renderCartUI();
  showToast('Promo code removed.', 'info');
}

function showToast(message, type) {
  type = type || 'info';
  var toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;
  var toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  var iconClass = type === 'success' ? 'fa-circle-check' : (type === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-info');
  toast.innerHTML = '<i class="fa-solid ' + iconClass + '"></i><span>' + message + '</span>';
  toastContainer.appendChild(toast);
  setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 3000);
}

function renderProfileModalUI() {
  var profileDetailsContent = document.getElementById('profile-details-content');
  if (!currentUser || !profileDetailsContent) return;
  profileDetailsContent.innerHTML = '<div style="background:#f8f9fa;padding:1.2rem;border-radius:8px;margin-bottom:1rem;">' +
    '<h3 style="font-size:1.1rem;font-weight:800;margin-bottom:0.5rem;">Personal Information</h3>' +
    '<p><strong>Full Name:</strong> ' + currentUser.fullName + '</p>' +
    '<p><strong>Username:</strong> @' + currentUser.userId + '</p>' +
    '<p><strong>Email:</strong> ' + currentUser.email + '</p>' +
    '<p><strong>Mobile:</strong> +91 ' + currentUser.phone + '</p>' +
  '</div>';
}

document.addEventListener('DOMContentLoaded', function() {
  renderProductsCatalog();
  renderCartUI();
  renderWishlistUI();
  updateAuthUI();
  updatePincodeUI();

  // Category tabs
  var categoryTabs = document.getElementById('category-tabs');
  if (categoryTabs) {
    categoryTabs.addEventListener('click', function(e) {
      var tabBtn = e.target.closest('.category-tab');
      if (!tabBtn) return;
      document.querySelectorAll('.category-tab').forEach(function(b){ b.classList.remove('active'); });
      tabBtn.classList.add('active');
      currentCategory = tabBtn.getAttribute('data-category');
      currentPage = 1;
      renderProductsCatalog();
    });
  }

  // Top icon category bar
  var topCatIcons = document.getElementById('top-category-icons');
  if (topCatIcons) {
    topCatIcons.addEventListener('click', function(e) {
      var card = e.target.closest('.cat-icon-card');
      if (!card) return;
      document.querySelectorAll('.cat-icon-card').forEach(function(c){ c.classList.remove('active'); });
      card.classList.add('active');
      var catId = card.getAttribute('data-category');
      currentCategory = catId;
      currentPage = 1;
      document.querySelectorAll('.category-tab').forEach(function(t){ t.classList.toggle('active', t.getAttribute('data-category') === catId); });
      renderProductsCatalog();
      var sec = document.getElementById('products-section');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Sort
  var sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.addEventListener('change', function(e){ currentSort = e.target.value; renderProductsCatalog(); });

  // Search
  var searchInput = document.getElementById('search-input');
  var clearSearchBtn = document.getElementById('clear-search-btn');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      currentSearchQuery = e.target.value;
      currentPage = 1;
      if (clearSearchBtn) clearSearchBtn.classList.toggle('hidden', currentSearchQuery.trim() === '');
      renderProductsCatalog();
    });
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', function() {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      currentPage = 1;
      clearSearchBtn.classList.add('hidden');
      renderProductsCatalog();
    });
  }

  // Reset filters
  var resetFiltersBtn = document.getElementById('reset-filters-btn');
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', function() {
      currentCategory = 'all';
      currentSearchQuery = '';
      currentSort = 'featured';
      currentPage = 1;
      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'featured';
      if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
      document.querySelectorAll('.category-tab').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-category') === 'all'); });
      renderProductsCatalog();
    });
  }

  // Cart
  var openCartBtn = document.getElementById('open-cart-btn');
  var closeCartBtn = document.getElementById('close-cart-btn');
  var cartOverlay = document.getElementById('cart-overlay');
  var clearCartBtn = document.getElementById('clear-cart-btn');
  var checkoutBtn = document.getElementById('checkout-btn');
  if (openCartBtn) openCartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);
  if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckoutModal);

  // Promo
  var applyPromoBtn = document.getElementById('apply-promo-btn');
  var removePromoBtn = document.getElementById('remove-promo-btn');
  if (applyPromoBtn) applyPromoBtn.addEventListener('click', applyPromoCode);
  if (removePromoBtn) removePromoBtn.addEventListener('click', removePromoCode);

  // Auth
  var openLoginBtn = document.getElementById('open-login-btn');
  var closeAuthBtn = document.getElementById('close-auth-btn');
  var tabLoginBtn = document.getElementById('tab-login-btn');
  var tabRegisterBtn = document.getElementById('tab-register-btn');
  var loginForm = document.getElementById('login-form');
  var registerForm = document.getElementById('register-form');
  var otpRequestForm = document.getElementById('otp-request-form');
  var otpVerifyForm = document.getElementById('otp-verify-form');
  var openForgotBtn = document.getElementById('open-forgot-btn');
  var backToLoginBtn = document.getElementById('back-to-login-btn');
  var logoutBtn = document.getElementById('logout-btn');
  var userMenuTrigger = document.getElementById('user-menu-trigger');
  var userProfileMenu = document.getElementById('user-profile-menu');
  var userDropdownCard = document.getElementById('user-dropdown-card');

  if (openLoginBtn) openLoginBtn.addEventListener('click', function(){ openAuthModal('login'); });
  if (closeAuthBtn) closeAuthBtn.addEventListener('click', closeAuthModal);
  if (tabLoginBtn) tabLoginBtn.addEventListener('click', function(){ openAuthModal('login'); });
  if (tabRegisterBtn) tabRegisterBtn.addEventListener('click', function(){ openAuthModal('register'); });
  if (openForgotBtn) openForgotBtn.addEventListener('click', function(){
    var authLoginView = document.getElementById('auth-login-view');
    var authForgotView = document.getElementById('auth-forgot-view');
    if (authLoginView) authLoginView.classList.add('hidden');
    if (authForgotView) authForgotView.classList.remove('hidden');
  });
  if (backToLoginBtn) backToLoginBtn.addEventListener('click', function(){ openAuthModal('login'); });
  if (loginForm) loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    loginUser(document.getElementById('login-id').value, document.getElementById('login-password').value);
  });
  if (registerForm) registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    var pass = document.getElementById('reg-pass').value;
    var passConf = document.getElementById('reg-pass-confirm').value;
    if (pass !== passConf) { showToast('Passwords do not match!', 'warning'); return; }
    registerUser(document.getElementById('reg-name').value, document.getElementById('reg-email').value, document.getElementById('reg-userid').value, document.getElementById('reg-phone').value, pass);
  });
  if (otpRequestForm) otpRequestForm.addEventListener('submit', function(e){ e.preventDefault(); generateOTP(document.getElementById('forgot-id').value); });
  if (otpVerifyForm) otpVerifyForm.addEventListener('submit', function(e){ e.preventDefault(); verifyOTPAndReset(document.getElementById('input-otp-code').value, document.getElementById('forgot-new-pass').value); });
  if (userMenuTrigger) userMenuTrigger.addEventListener('click', function(){ if (userDropdownCard) userDropdownCard.classList.toggle('hidden'); });
  document.addEventListener('click', function(e){ if (userProfileMenu && !userProfileMenu.contains(e.target) && userDropdownCard) userDropdownCard.classList.add('hidden'); });
  if (logoutBtn) logoutBtn.addEventListener('click', logoutUser);

  // User dropdown actions
  var menuMyProfileBtn = document.getElementById('menu-my-profile-btn');
  var menuMyOrdersBtn = document.getElementById('menu-my-orders-btn');
  var menuMyWishlistBtn = document.getElementById('menu-my-wishlist-btn');
  var menuChangePincodeBtn = document.getElementById('menu-change-pincode-btn');
  var profileModal = document.getElementById('profile-modal');
  var closeProfileBtn = document.getElementById('close-profile-btn');
  var ordersModal = document.getElementById('orders-modal');
  var closeOrdersBtn = document.getElementById('close-orders-btn');
  var wishlistModal = document.getElementById('wishlist-modal');
  var openWishlistBtn = document.getElementById('open-wishlist-btn');
  var closeWishlistBtn = document.getElementById('close-wishlist-btn');
  var pincodeModal = document.getElementById('pincode-modal');
  var openPincodeBtn = document.getElementById('open-pincode-btn');
  var closePincodeBtn = document.getElementById('close-pincode-btn');
  var pincodeForm = document.getElementById('pincode-form');

  if (menuMyProfileBtn) menuMyProfileBtn.addEventListener('click', function(){ if (userDropdownCard) userDropdownCard.classList.add('hidden'); renderProfileModalUI(); if (profileModal) profileModal.classList.remove('hidden'); });
  if (closeProfileBtn) closeProfileBtn.addEventListener('click', function(){ if (profileModal) profileModal.classList.add('hidden'); });
  if (menuMyOrdersBtn) menuMyOrdersBtn.addEventListener('click', function(){ if (userDropdownCard) userDropdownCard.classList.add('hidden'); renderOrdersHistoryUI(); if (ordersModal) ordersModal.classList.remove('hidden'); });
  if (closeOrdersBtn) closeOrdersBtn.addEventListener('click', function(){ if (ordersModal) ordersModal.classList.add('hidden'); });
  if (openWishlistBtn) openWishlistBtn.addEventListener('click', function(){ renderWishlistUI(); if (wishlistModal) wishlistModal.classList.remove('hidden'); });
  if (menuMyWishlistBtn) menuMyWishlistBtn.addEventListener('click', function(){ if (userDropdownCard) userDropdownCard.classList.add('hidden'); renderWishlistUI(); if (wishlistModal) wishlistModal.classList.remove('hidden'); });
  if (closeWishlistBtn) closeWishlistBtn.addEventListener('click', function(){ if (wishlistModal) wishlistModal.classList.add('hidden'); });
  if (openPincodeBtn) openPincodeBtn.addEventListener('click', function(){ if (pincodeModal) pincodeModal.classList.remove('hidden'); });
  if (menuChangePincodeBtn) menuChangePincodeBtn.addEventListener('click', function(){ if (userDropdownCard) userDropdownCard.classList.add('hidden'); if (pincodeModal) pincodeModal.classList.remove('hidden'); });
  if (closePincodeBtn) closePincodeBtn.addEventListener('click', function(){ if (pincodeModal) pincodeModal.classList.add('hidden'); });
  if (pincodeForm) pincodeForm.addEventListener('submit', function(e){ e.preventDefault(); handlePincodeSubmit(document.getElementById('pincode-input').value); });

  // Quick View
  var closeQuickviewBtn = document.getElementById('close-quickview-btn');
  var quickviewModal = document.getElementById('quickview-modal');
  var qvQtyMinus = document.getElementById('qv-qty-minus');
  var qvQtyPlus = document.getElementById('qv-qty-plus');
  var qvQtyInput = document.getElementById('qv-qty-input');
  var qvAddToCartBtn = document.getElementById('qv-add-to-cart-btn');
  if (closeQuickviewBtn) closeQuickviewBtn.addEventListener('click', closeQuickViewModal);
  if (quickviewModal) quickviewModal.addEventListener('click', function(e){ if (e.target === quickviewModal) closeQuickViewModal(); });
  if (qvQtyMinus) qvQtyMinus.addEventListener('click', function(){ var v = parseInt(qvQtyInput.value) || 1; if (v > 1) qvQtyInput.value = v - 1; });
  if (qvQtyPlus) qvQtyPlus.addEventListener('click', function(){ var v = parseInt(qvQtyInput.value) || 1; if (v < 99) qvQtyInput.value = v + 1; });
  if (qvAddToCartBtn) qvAddToCartBtn.addEventListener('click', function(){ if (activeQuickViewId) { handleAddToCart(activeQuickViewId, parseInt(qvQtyInput.value) || 1); closeQuickViewModal(); openCartDrawer(); } });

  // Checkout
  var closeCheckoutBtn = document.getElementById('close-checkout-btn');
  var checkoutModal = document.getElementById('checkout-modal');
  var checkoutForm = document.getElementById('checkout-form');
  var continueShoppingBtn = document.getElementById('continue-shopping-btn');
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckoutModal);
  if (checkoutModal) checkoutModal.addEventListener('click', function(e){ if (e.target === checkoutModal) closeCheckoutModal(); });
  if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCheckoutModal);

  // Newsletter
  var newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) newsletterForm.addEventListener('submit', function(e){ e.preventDefault(); showToast('Thank you for subscribing!', 'success'); newsletterForm.reset(); });

  // Scroll to featured
  var scrollFeaturedBtn = document.getElementById('scroll-featured-btn');
  if (scrollFeaturedBtn) scrollFeaturedBtn.addEventListener('click', function(){ var sec = document.getElementById('products-section'); if (sec) sec.scrollIntoView({ behavior: 'smooth' }); });
});