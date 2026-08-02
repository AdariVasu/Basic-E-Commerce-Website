$u = 'https://images.unsplash.com/photo-{0}?w=400&h=400&fit=crop&auto=format'
function img($id) { return ($u -f $id) }

$p = [System.Collections.Generic.List[object]]::new()

# FOR YOU
$p.Add(@{id='FY001';name='Zeno Smart Watch Pro Max';category='For You';price=2999;oldPrice=4999;rating=4.7;description='Track fitness calls and notifications with a stunning AMOLED display and 7-day battery life.';image=(img '1523275335684-37898b6baf30')})
$p.Add(@{id='FY002';name='Nova Wireless Earbuds Pro';category='For You';price=1499;oldPrice=2999;rating=4.5;description='40-hour battery active noise cancellation and crystal-clear hi-fi sound.';image=(img '1606220945770-b5b6c2c55bf1')})
$p.Add(@{id='FY003';name='FitX Smart Band 5.0';category='For You';price=999;oldPrice=1799;rating=4.4;description='Heart rate SpO2 step counter and sleep tracking in an ultra-slim lightweight band.';image=(img '1575311373937-040b8058b172')})
$p.Add(@{id='FY004';name='BoomX Portable Bluetooth Speaker';category='For You';price=1299;oldPrice=2199;rating=4.6;description='360 degree surround sound IPX7 waterproof 20-hour playback on a single charge.';image=(img '1608043152269-423dbba4e7e1')})
$p.Add(@{id='FY005';name='AeroX Premium UV400 Sunglasses';category='For You';price=799;oldPrice=1499;rating=4.3;description='Polarized lenses with a featherlight titanium frame. Style meets protection.';image=(img '1572635196237-14b3f281503f')})
$p.Add(@{id='FY006';name='Urban Trek 30L Backpack';category='For You';price=1199;oldPrice=1999;rating=4.5;description='Water-resistant laptop compartment ergonomic straps for comfortable everyday carry.';image=(img '1553062407-98eeb64c6a62')})
$p.Add(@{id='FY007';name='Elixir Noir Perfume 100ml';category='For You';price=1799;oldPrice=2999;rating=4.8;description='Luxurious blend of oud sandalwood and vanilla that lasts all day.';image=(img '1541643600914-78b084683702')})
$p.Add(@{id='FY008';name='PowerZen 20000mAh Power Bank';category='For You';price=1099;oldPrice=1999;rating=4.5;description='Fast-charge your phone 4 times over with dual USB-C and USB-A ports.';image=(img '1609091839311-d5365f9ff1c5')})
$p.Add(@{id='FY009';name='ChillOut Shiatsu Neck Massager';category='For You';price=2499;oldPrice=3999;rating=4.6;description='Heated neck and shoulder massager with 4 massage nodes for deep tissue relief.';image=(img '1600334089648-b0d9d3028eb2')})
$p.Add(@{id='FY010';name='Aura Touch LED Desk Lamp';category='For You';price=699;oldPrice=1299;rating=4.4;description='Touch-sensitive 3 color modes foldable arm with built-in USB charging port.';image=(img '1507473885765-e6ed057f782c')})

# GROCERIES
$p.Add(@{id='GRO001';name='India Gate Basmati Rice 5kg';category='Groceries';price=499;oldPrice=599;rating=4.8;description='Premium aged basmati rice. Long grain aromatic and perfect for biryanis.';image=(img '1536304993881-ff86d42a5b6e')})
$p.Add(@{id='GRO002';name='Amul Full Cream Milk 1L';category='Groceries';price=62;oldPrice=0;rating=4.9;description='Fresh pasteurised full cream milk packed with calcium and essential nutrients.';image=(img '1550583724-b2692b85b150')})
$p.Add(@{id='GRO003';name='Organic Toor Dal 1kg';category='Groceries';price=129;oldPrice=159;rating=4.7;description='Hand-selected chemical-free split pigeon peas. Rich in protein and fibre.';image=(img '1586201375761-83865001e31c')})
$p.Add(@{id='GRO004';name='Fortune Sunflower Oil 1L';category='Groceries';price=139;oldPrice=179;rating=4.6;description='100 percent refined sunflower oil with zero trans fat. Heart-healthy cooking oil.';image=(img '1474979266404-7eaacbcd87c5')})
$p.Add(@{id='GRO005';name='Britannia Whole Wheat Bread 400g';category='Groceries';price=45;oldPrice=0;rating=4.5;description='Soft nutritious whole wheat bread with no added preservatives.';image=(img '1549931319-a545dcf3bc7c')})
$p.Add(@{id='GRO006';name='Tata Tea Gold 500g';category='Groceries';price=259;oldPrice=299;rating=4.8;description='Rich aromatic tea leaves blended for a strong refreshing cup every morning.';image=(img '1564890369478-c89ca3d9cde4')})
$p.Add(@{id='GRO007';name='Amul Butter Salted 500g';category='Groceries';price=249;oldPrice=279;rating=4.9;description='Creamy salted butter made from pure milk. The taste of India kitchens.';image=(img '1589985270826-4b7bb135bc9d')})
$p.Add(@{id='GRO008';name='Aashirvaad Whole Wheat Atta 10kg';category='Groceries';price=399;oldPrice=449;rating=4.7;description='100 percent whole wheat atta made from MP wheat. Guaranteed soft rotis every time.';image=(img '1509440159596-0249088772ff')})
$p.Add(@{id='GRO009';name='Maggi 2-Minute Noodles 12-Pack';category='Groceries';price=168;oldPrice=192;rating=4.8;description='Indias favourite masala noodles. Ready in 2 minutes. Value pack of 12.';image=(img '1585032226651-759b368d7246')})
$p.Add(@{id='GRO010';name='Haldirams Classic Mixture 400g';category='Groceries';price=99;oldPrice=129;rating=4.6;description='Crunchy spicy namkeen mix. The perfect snack for chai time.';image=(img '1599490659213-e2b9527bd087')})

# FASHION
$p.Add(@{id='FASH001';name='Mens Oxford Casual Shirt';category='Fashion';price=799;oldPrice=1499;rating=4.5;description='Slim-fit 100 percent cotton shirt in breathable poplin weave. Office or casual.';image=(img '1596755094514-f87e34085b2c')})
$p.Add(@{id='FASH002';name='Womens Printed Kurti Deluxe';category='Fashion';price=599;oldPrice=999;rating=4.6;description='Beautiful floral printed rayon kurti with a straight-fit silhouette.';image=(img '1602810318383-e386cc2a3ccf')})
$p.Add(@{id='FASH003';name='Mens Slim Fit Dark Stretch Jeans';category='Fashion';price=999;oldPrice=1799;rating=4.4;description='Stretch denim with 4-way flex technology. Move freely all day.';image=(img '1542272604-787c3835535d')})
$p.Add(@{id='FASH004';name='Womens Banarasi Silk Saree';category='Fashion';price=2999;oldPrice=4999;rating=4.9;description='Handwoven pure Banarasi silk saree with zari border. Timeless elegance.';image=(img '1610030469983-98e550d6193c')})
$p.Add(@{id='FASH005';name='Mens Leather Derby Shoes';category='Fashion';price=1699;oldPrice=2999;rating=4.7;description='Full-grain leather upper with cushioned insole. Crafted for comfort and style.';image=(img '1542291026-7eec264c27ff')})
$p.Add(@{id='FASH006';name='Womens Tan Structured Handbag';category='Fashion';price=1299;oldPrice=2499;rating=4.6;description='Spacious structured handbag with zip closure and multiple inner pockets.';image=(img '1548036328-c9fa89d128fa')})
$p.Add(@{id='FASH007';name='Mens Sports Drifit T-Shirt';category='Fashion';price=499;oldPrice=799;rating=4.5;description='Moisture-wicking quick-dry polyester tee. Perfect for gym run or everyday wear.';image=(img '1521572163474-6864f9cf17ab')})
$p.Add(@{id='FASH008';name='Kids Colorful Cotton Track Pants';category='Fashion';price=349;oldPrice=599;rating=4.4;description='Soft cotton-blend track pants with elastic waist. Comfy for active kids.';image=(img '1622290291468-a28f7a7dc6a8')})
$p.Add(@{id='FASH009';name='Womens Floral Chiffon Maxi Dress';category='Fashion';price=1099;oldPrice=1799;rating=4.7;description='Flowy chiffon maxi dress with floral print. Summer-ready and breezy.';image=(img '1515372039744-b8f02a3ae446')})
$p.Add(@{id='FASH010';name='Unisex Wide-Brim Woven Straw Hat';category='Fashion';price=399;oldPrice=699;rating=4.3;description='Wide-brim UV-protective hat. Perfect for beach garden or city strolls.';image=(img '1521369909029-2afed882baee')})

# MOBILES
$p.Add(@{id='MOB001';name='Zeno Smartphone X Pro 128GB';category='Mobiles';price=18999;oldPrice=24999;rating=4.7;description='6.7 inch AMOLED 120Hz Snapdragon 7s Gen 2 50MP triple camera 5000mAh battery.';image=(img '1511707171634-5f897ff02aa9')})
$p.Add(@{id='MOB002';name='Nexa Smartphone Lite 64GB';category='Mobiles';price=8999;oldPrice=12999;rating=4.4;description='6.5 inch IPS LCD Helio G85 48MP rear camera 4500mAh with 18W fast charge.';image=(img '1565849904461-04a58ad377e0')})
$p.Add(@{id='MOB003';name='Samsung Galaxy A35 5G 128GB';category='Mobiles';price=26999;oldPrice=29999;rating=4.8;description='Super AMOLED 120Hz 50MP camera with OIS 5000mAh battery IP67 rated.';image=(img '1610945264803-c22b62831b8b')})
$p.Add(@{id='MOB004';name='OnePlus Nord CE4 Lite 256GB';category='Mobiles';price=19999;oldPrice=23999;rating=4.6;description='6.67 inch AMOLED Snapdragon 695 50MP camera 80W SUPERVOOC charging.';image=(img '1592750475338-74b7b21085ab')})
$p.Add(@{id='MOB005';name='Redmi Note 13 Pro 5G 256GB';category='Mobiles';price=22999;oldPrice=26999;rating=4.7;description='200MP main camera Dimensity 7200 Ultra curved AMOLED 67W wired charge.';image=(img '1598327105666-5b89351aff97')})
$p.Add(@{id='MOB006';name='POCO X6 5G 128GB';category='Mobiles';price=17999;oldPrice=21999;rating=4.5;description='6.67 inch CrystalRes AMOLED 144Hz Snapdragon 7s Gen 2 Dolby Vision support.';image=(img '1567581935884-3349723552ca')})
$p.Add(@{id='MOB007';name='Realme 12 Pro Plus 5G 256GB';category='Mobiles';price=27999;oldPrice=31999;rating=4.6;description='Periscope telephoto 64MP Snapdragon 7s Gen 2 120Hz curved AMOLED display.';image=(img '1601784551446-20c9e07cdbdb')})
$p.Add(@{id='MOB008';name='iQOO Z9 5G 128GB';category='Mobiles';price=15999;oldPrice=18999;rating=4.5;description='Dimensity 7200 144Hz AMOLED 44W FlashCharge 50MP rear camera system.';image=(img '1574944985070-8f3ebc6b79d2')})
$p.Add(@{id='MOB009';name='Apple iPhone 15 128GB';category='Mobiles';price=74999;oldPrice=79999;rating=4.9;description='A16 Bionic chip 48MP main camera Dynamic Island USB-C ceramic shield front.';image=(img '1695048133142-1a20484d2569')})
$p.Add(@{id='MOB010';name='Motorola Edge 50 Pro 256GB';category='Mobiles';price=29999;oldPrice=34999;rating=4.6;description='125W TurboPower charging 50MP telephoto lens Snapdragon 7 Gen 3 vegan leather.';image=(img '1585386959984-a4155224a1ad')})

# ELECTRONICS
$p.Add(@{id='ELE001';name='Sony WH-1000XM5 Headphones';category='Electronics';price=24999;oldPrice=29999;rating=4.9;description='Industry-leading ANC 30-hour battery foldable design multipoint Bluetooth.';image=(img '1505740420928-5e560c06d30e')})
$p.Add(@{id='ELE002';name='Mi Smart TV 5A 43 Inch 4K';category='Electronics';price=22999;oldPrice=27999;rating=4.6;description='4K UHD Vivid Picture Engine Android TV 11 Dolby Vision and Dolby Audio.';image=(img '1593359677879-a4bb92f4834c')})
$p.Add(@{id='ELE003';name='Logitech MX Master 3 Wireless Mouse';category='Electronics';price=6999;oldPrice=9999;rating=4.8;description='Electromagnetic scrolling 4000 DPI 70-day battery multi-device Bolt receiver.';image=(img '1527864550417-7fd91fc51a46')})
$p.Add(@{id='ELE004';name='HP LaserJet MFP M140w Printer';category='Electronics';price=12999;oldPrice=16999;rating=4.5;description='Print scan and copy. Wi-Fi and USB 20ppm toner-saving EconoMode.';image=(img '1612815154858-60aa4c59eaa6')})
$p.Add(@{id='ELE005';name='JBL Cinema SB241 2.1ch Soundbar';category='Electronics';price=7999;oldPrice=12999;rating=4.5;description='Wireless subwoofer 120W total output HDMI ARC Bluetooth 4.2.';image=(img '1545454675-3531b543be5d')})
$p.Add(@{id='ELE006';name='Canon EOS R50 Mirrorless Camera';category='Electronics';price=61999;oldPrice=69999;rating=4.9;description='24.2MP APS-C sensor Dual Pixel CMOS AF 4K video lightweight compact body.';image=(img '1516035069371-29a1b244cc32')})
$p.Add(@{id='ELE007';name='Anker 65W GaN USB-C Fast Charger';category='Electronics';price=1999;oldPrice=2999;rating=4.7;description='GaN technology fast charger. Powers laptops tablets and phones from one compact plug.';image=(img '1628557044797-f21a177c37ec')})
$p.Add(@{id='ELE008';name='TP-Link AX1800 Wi-Fi 6 Router';category='Electronics';price=3999;oldPrice=5999;rating=4.6;description='Wi-Fi 6 dual-band router covers up to 1500 sq ft OFDMA and MU-MIMO.';image=(img '1544197150-b99a580bb7a8')})
$p.Add(@{id='ELE009';name='Kindle Paperwhite 16GB E-Reader';category='Electronics';price=14999;oldPrice=17999;rating=4.8;description='6.8 inch glare-free display adjustable warm light weeks of battery life IPX8.';image=(img '1526243741027-444d633d7365')})
$p.Add(@{id='ELE010';name='Apple iPad 10th Gen 64GB Wi-Fi';category='Electronics';price=44900;oldPrice=49900;rating=4.8;description='10.9 inch Liquid Retina display A14 Bionic chip USB-C Wi-Fi 6 landscape camera.';image=(img '1544244015-0df4b3ffc6b0')})

# BEAUTY
$p.Add(@{id='BEA001';name='Lakme 9-to-5 Matte Lipstick';category='Beauty';price=399;oldPrice=599;rating=4.6;description='Highly pigmented matte finish. 12-hour stay non-drying formula. Shade Berry Best.';image=(img '1586495777744-4e6b34ae8d38')})
$p.Add(@{id='BEA002';name='Neutrogena Hydro Boost Gel Cream 50ml';category='Beauty';price=699;oldPrice=999;rating=4.7;description='Oil-free moisturizer with hyaluronic acid. Quenches dry skin for 48 hours.';image=(img '1611080626919-7cf5a9dbab12')})
$p.Add(@{id='BEA003';name='WOW Vitamin C Face Serum 30ml';category='Beauty';price=549;oldPrice=899;rating=4.5;description='20 percent Vitamin C plus E plus HA. Brightens skin fades dark spots boosts collagen.';image=(img '1570194065650-d99fb4bedf0a')})
$p.Add(@{id='BEA004';name='Maybelline Fit Me Foundation 30ml';category='Beauty';price=479;oldPrice=699;rating=4.5;description='Natural buildable coverage. Dermatologist tested. 40 inclusive shades available.';image=(img '1522335789203-aabd1fc54bc9')})
$p.Add(@{id='BEA005';name='Dove Keratin Strength Shampoo 650ml';category='Beauty';price=379;oldPrice=499;rating=4.7;description='Repairs hair from root to tip. Enriched with keratin actives for salon-smooth hair.';image=(img '1585745336310-82dd60db9ddb')})
$p.Add(@{id='BEA006';name='Mamaearth Onion Hair Oil 200ml';category='Beauty';price=349;oldPrice=499;rating=4.6;description='Redensyl plus onion plus rosemary oil blend. Reduces hair fall and promotes growth.';image=(img '1618375569909-3c8616cf7733')})
$p.Add(@{id='BEA007';name='Forest Essentials Kumkumadi Face Oil';category='Beauty';price=1999;oldPrice=2799;rating=4.8;description='Luxury Ayurvedic face oil with 26 rare herbs for radiant even-toned skin.';image=(img '1556228841-a3c527ebefe5')})
$p.Add(@{id='BEA008';name='The Body Shop Tea Tree Face Wash';category='Beauty';price=799;oldPrice=1099;rating=4.5;description='Gel-foam cleanser with tea tree oil. Purifies pores and controls excess oil.';image=(img '1556228578-8c89e6adf883')})
$p.Add(@{id='BEA009';name='Biotique Bio Papaya Face Scrub 235g';category='Beauty';price=249;oldPrice=399;rating=4.4;description='Natural exfoliant with raw papaya and honey. Reveals smooth glowing skin.';image=(img '1629198688000-71f23e745b6e')})
$p.Add(@{id='BEA010';name='Philips HP8316 Keratin Hair Straightener';category='Beauty';price=1499;oldPrice=2499;rating=4.6;description='Ceramic coating with keratin spray technology for smooth frizz-free hair in minutes.';image=(img '1522337360788-8b13dee7a37e')})

# HOME AND KITCHEN
$p.Add(@{id='HOM001';name='Prestige Delight 750W Mixer Grinder';category='Home and Kitchen';price=2499;oldPrice=3999;rating=4.7;description='3 jars 4-speed control with incher and atta kneading attachment included.';image=(img '1556909114-f6e7ad7d3136')})
$p.Add(@{id='HOM002';name='Hawkins Contura 3L Pressure Cooker';category='Home and Kitchen';price=1199;oldPrice=1799;rating=4.8;description='Hard-anodised aluminium stay-cool handles induction compatible.';image=(img '1585659722983-3a675dabf23d')})
$p.Add(@{id='HOM003';name='Philips HD2582 Grill Sandwich Maker';category='Home and Kitchen';price=1799;oldPrice=2499;rating=4.6;description='Non-stick floating plates ready indicator light cool-touch handle.';image=(img '1606760227091-3dd870d97f1d')})
$p.Add(@{id='HOM004';name='Cello Opalware Dinner Set 18 Piece';category='Home and Kitchen';price=999;oldPrice=1799;rating=4.5;description='Chip-resistant opal glass dinnerware. Microwave and dishwasher safe.';image=(img '1594736797933-d0501ba2fe65')})
$p.Add(@{id='HOM005';name='Stainless Steel Knife Set 6 Piece';category='Home and Kitchen';price=799;oldPrice=1299;rating=4.5;description='Full-tang knives with ergonomic handles and wooden storage block.';image=(img '1593618998160-e34014e67546')})
$p.Add(@{id='HOM006';name='Aquaguard Marvel RO UV 6L Purifier';category='Home and Kitchen';price=8999;oldPrice=12999;rating=4.8;description='RO plus UV plus UF plus TDS control 6L storage mineral guard 7-stage purification.';image=(img '1563453392212-326f5e854473')})
$p.Add(@{id='HOM007';name='Bajaj 1000W Fan-Forced Room Heater';category='Home and Kitchen';price=1299;oldPrice=1999;rating=4.5;description='Fan-forced halogen heater with thermostat and overheat protection.';image=(img '1585771724684-38269d6639fd')})
$p.Add(@{id='HOM008';name='King-Size Cotton Bedsheet Set';category='Home and Kitchen';price=699;oldPrice=1299;rating=4.6;description='Cotton king-size bedsheet with 2 pillow covers and fade-resistant print.';image=(img '1584100936595-c0654b55a2e2')})
$p.Add(@{id='HOM009';name='Pigeon Non-Stick Kadhai 2.5L with Lid';category='Home and Kitchen';price=599;oldPrice=999;rating=4.5;description='Aluminium kadhai with PTFE non-stick coating and tempered glass lid.';image=(img '1556909114-e99e2da07e3d')})
$p.Add(@{id='HOM010';name='IFB 6kg Fully-Auto Washing Machine';category='Home and Kitchen';price=19999;oldPrice=25999;rating=4.7;description='Aqua Energie water treatment 5-star BEE rated 3D wash system.';image=(img '1626806787461-102c1bfaaea1')})

# SPORTS
$p.Add(@{id='SPO001';name='SG Sunny Tonny Cricket Bat Full Size';category='Sports';price=1499;oldPrice=2499;rating=4.7;description='English willow blade cane handle 6-spring scoop full-size SH cricket bat.';image=(img '1531415074968-036ba1b575da')})
$p.Add(@{id='SPO002';name='Nike Air Zoom Running Shoes';category='Sports';price=8999;oldPrice=11995;rating=4.8;description='React foam plus Air Zoom unit for smooth cushioned ride during daily training.';image=(img '1542291026-7eec264c27ff')})
$p.Add(@{id='SPO003';name='Decathlon 8kg Rubber Dumbbell Pair';category='Sports';price=2499;oldPrice=3499;rating=4.7;description='Hex rubber dumbbells with chrome handles and anti-slip grip. Sold as a pair.';image=(img '1571019614242-c5c5dee9f50b')})
$p.Add(@{id='SPO004';name='Yonex Muscle Power 29 Badminton Racket';category='Sports';price=999;oldPrice=1499;rating=4.6;description='Isometric frame medium flex shaft pre-strung. Ideal for beginners.';image=(img '1626224583764-f87db24ac4ea')})
$p.Add(@{id='SPO005';name='Nivia Storm Football Size 5';category='Sports';price=599;oldPrice=899;rating=4.5;description='TPU laminated 32-panel machine stitched football for smooth turf performance.';image=(img '1571512599285-9340cc91df2f')})
$p.Add(@{id='SPO006';name='Boldfit 5-Level Resistance Band Set';category='Sports';price=799;oldPrice=1299;rating=4.6;description='5 resistance levels latex bands with handles ankle straps and door anchor.';image=(img '1598289431512-b97b0917affc')})
$p.Add(@{id='SPO007';name='Cosco Champion Table Tennis Table';category='Sports';price=12999;oldPrice=17999;rating=4.7;description='22mm top board rollaway with lockable wheels competition-grade playing surface.';image=(img '1611251126140-a3a0e0428ac9')})
$p.Add(@{id='SPO008';name='Adidas 6mm Non-Slip Yoga Mat';category='Sports';price=1299;oldPrice=1999;rating=4.7;description='Non-slip surface body-length mat with carry strap. Suitable for all yoga styles.';image=(img '1601925228639-e4236585d5e2')})
$p.Add(@{id='SPO009';name='Spalding NBA Street Outdoor Basketball';category='Sports';price=1799;oldPrice=2499;rating=4.6;description='Rubber composite cover deep channel design. Built for outdoor courts.';image=(img '1546519638-68e109498ffc')})
$p.Add(@{id='SPO010';name='Skullcandy Push Active Sport Earbuds';category='Sports';price=2999;oldPrice=4499;rating=4.5;description='IP55 sweat-proof 35 total hours battery custom-tuned acoustic drivers.';image=(img '1590658268037-6bf12165a8df')})

# BOOKS
$p.Add(@{id='BOO001';name='Atomic Habits by James Clear';category='Books';price=399;oldPrice=599;rating=4.9;description='The world bestselling guide to building good habits and breaking bad ones.';image=(img '1544716278-ca5e3f4abd8c')})
$p.Add(@{id='BOO002';name='The Alchemist by Paulo Coelho';category='Books';price=199;oldPrice=350;rating=4.8;description='A timeless story of personal legend and the pursuit of ones dream.';image=(img '1512820790803-83ca734da794')})
$p.Add(@{id='BOO003';name='Rich Dad Poor Dad by R. Kiyosaki';category='Books';price=299;oldPrice=499;rating=4.7;description='The number 1 personal finance book teaching what schools do not about money.';image=(img '1603162925663-92f91f72a5fc')})
$p.Add(@{id='BOO004';name='Wings of Fire by A.P.J. Abdul Kalam';category='Books';price=179;oldPrice=250;rating=4.9;description='Indias beloved President recounts his extraordinary journey to the stars.';image=(img '1516979187457-637abb4f9353')})
$p.Add(@{id='BOO005';name='Harry Potter Complete Box Set 1-7';category='Books';price=2499;oldPrice=3499;rating=5.0;description='The complete magical saga from The Philosophers Stone to The Deathly Hallows.';image=(img '1481627834876-b7833e8f5570')})
$p.Add(@{id='BOO006';name='NCERT Class 10 Science Textbook';category='Books';price=89;oldPrice=0;rating=4.7;description='Latest edition NCERT Science textbook as per CBSE 2024-25 curriculum.';image=(img '1497633762265-9d179a990aa6')})
$p.Add(@{id='BOO007';name='The Psychology of Money by M. Housel';category='Books';price=349;oldPrice=499;rating=4.8;description='19 short stories exploring the strange ways people think about money.';image=(img '1589829085413-56de8ae18c73')})
$p.Add(@{id='BOO008';name='Zero to One by Peter Thiel';category='Books';price=299;oldPrice=449;rating=4.7;description='Notes on startups and how to build a company that creates new value in the world.';image=(img '1524578271613-d550eacf6090')})
$p.Add(@{id='BOO009';name='Deep Work by Cal Newport';category='Books';price=349;oldPrice=499;rating=4.8;description='Rules for focused success in a distracted world.';image=(img '1434030216411-0b793f4b4173')})
$p.Add(@{id='BOO010';name='Ikigai by Hector Garcia';category='Books';price=249;oldPrice=399;rating=4.7;description='The Japanese secret to a long and happy life combining purpose passion and mission.';image=(img '1506880018603-83d5b814b5a6')})

# TOYS
$p.Add(@{id='TOY001';name='LEGO Classic Creative Brick Box 900pc';category='Toys';price=2999;oldPrice=3999;rating=4.9;description='900 bricks in 33 colors. Limitless building creativity for ages 4 and up.';image=(img '1587654780291-39c9404d746b')})
$p.Add(@{id='TOY002';name='Hot Wheels 20-Car Die-Cast Gift Pack';category='Toys';price=799;oldPrice=1199;rating=4.8;description='20 die-cast vehicles in 1:64 scale. Collect them all!';image=(img '1558618666-fcd25c85cd64')})
$p.Add(@{id='TOY003';name='Barbie Dreamhouse 3-Story Playset';category='Toys';price=5999;oldPrice=7999;rating=4.7;description='3-story dreamhouse with 75 plus accessories elevator pool and slide.';image=(img '1563396983906-b3795482a59a')})
$p.Add(@{id='TOY004';name='Funskool Monopoly Classic Board Game';category='Toys';price=699;oldPrice=999;rating=4.7;description='The classic property trading game. Fun for the whole family from age 8 and up.';image=(img '1611891487122-207579d67d98')})
$p.Add(@{id='TOY005';name='Syma X300 Foldable RC Drone 720P';category='Toys';price=3499;oldPrice=4999;rating=4.5;description='720P camera altitude hold one-key takeoff and landing 20 min flight time.';image=(img '1507582020474-9a35b7d455d9')})
$p.Add(@{id='TOY006';name='Play-Doh 10-Color Modeling Compound Set';category='Toys';price=499;oldPrice=799;rating=4.8;description='10 colors non-toxic and washable. Perfect for creative play for ages 2 and up.';image=(img '1560807707-8cc77767d783')})
$p.Add(@{id='TOY007';name='Funskool Scrabble Classic Family Game';category='Toys';price=599;oldPrice=899;rating=4.6;description='The iconic word-building game. Vocabulary and strategy for ages 8 and up.';image=(img '1550159930-40066082a4fc')})
$p.Add(@{id='TOY008';name='High-Speed 360 Degree RC Stunt Car';category='Toys';price=999;oldPrice=1799;rating=4.5;description='Rechargeable high-speed remote control car with 360 degree rotation stunts.';image=(img '1593359677879-a4bb92f4834c')})
$p.Add(@{id='TOY009';name='Meccano Junior 25-in-1 Motorized Set';category='Toys';price=2499;oldPrice=3499;rating=4.7;description='Real metal parts and 1 motor. Build 25 moving models. STEM learning for ages 7 and up.';image=(img '1572375992501-4b0892d50c69')})
$p.Add(@{id='TOY010';name='VTech Baby Learn and Explore Laptop';category='Toys';price=899;oldPrice=1399;rating=4.6;description='Interactive toy laptop with ABC numbers music and shapes for toddlers.';image=(img '1515488042361-ee00e0ddd4e4')})

# FURNITURE
$p.Add(@{id='FUR001';name='Nilkamal Brooklyn Mesh Office Chair';category='Furniture';price=5999;oldPrice=8999;rating=4.6;description='High-back mesh ergonomic chair adjustable lumbar support padded armrests.';image=(img '1592078615290-033ee584e267')})
$p.Add(@{id='FUR002';name='Chester 3-Seater Linen Fabric Sofa';category='Furniture';price=24999;oldPrice=35000;rating=4.7;description='Solid sheesham wood frame linen fabric with pocket spring seat cushions.';image=(img '1555041469-a586c61ea9bc')})
$p.Add(@{id='FUR003';name='Adjustable 5-Shelf Bookcase White';category='Furniture';price=4999;oldPrice=6999;rating=4.7;description='Classic adjustable shelf bookcase in white. Fits any room with endless storage.';image=(img '1481277542470-605612bd2d61')})
$p.Add(@{id='FUR004';name='Walnut Finish Study Table 2 Drawers';category='Furniture';price=7999;oldPrice=11999;rating=4.5;description='Engineered wood desk with 2 drawers and cable management hole.';image=(img '1518455027359-f3f8164ba6bd')})
$p.Add(@{id='FUR005';name='Solid Pine King-Size Slatted Bed Frame';category='Furniture';price=15999;oldPrice=22999;rating=4.6;description='Solid pine wood slatted base. No box spring needed. Easy flat-pack assembly.';image=(img '1505693314120-0d443867891c')})
$p.Add(@{id='FUR006';name='Acacia Wood Hairpin Leg Dining Table';category='Furniture';price=19999;oldPrice=27999;rating=4.8;description='Solid acacia wood top with hairpin legs. Modern industrial aesthetic for 6 seats.';image=(img '1615874959474-d609969a20ed')})
$p.Add(@{id='FUR007';name='Godrej Interio 2-Door Steel Wardrobe';category='Furniture';price=12999;oldPrice=17999;rating=4.7;description='Cold-rolled steel anti-rust powder coat adjustable shelves full mirror panel.';image=(img '1595428774223-ef52624120d2')})
$p.Add(@{id='FUR008';name='Green Soul Beast Pro Gaming Chair';category='Furniture';price=9999;oldPrice=14999;rating=4.7;description='PU leather 180 degree recline 4D armrests lumbar and neck cushion racing style.';image=(img '1616627547584-bf28cee262db')})
$p.Add(@{id='FUR009';name='Sheesham Wood Kids Bunk Bed with Ladder';category='Furniture';price=18999;oldPrice=26000;rating=4.6;description='Solid sheesham wood bunk bed with safety railing and ladder. Fits 2 kids.';image=(img '1578898886225-c7c894047899')})
$p.Add(@{id='FUR010';name='Balcony Bistro Steel Chair Set of 2';category='Furniture';price=4999;oldPrice=7999;rating=4.5;description='Powder-coated steel bistro chairs for balcony terrace or garden use.';image=(img '1567538096630-e0c55bd6374c')})

# AUTOMOTIVE
$p.Add(@{id='AUT001';name='3M Scotch-Brite Car Wash Kit 8 Piece';category='Automotive';price=599;oldPrice=999;rating=4.7;description='Includes microfibre cloth wash mitt detailing brush and wheel cleaner.';image=(img '1503376780353-7e6692767b70')})
$p.Add(@{id='AUT002';name='Viper 70R Car Dash Camera 1080P';category='Automotive';price=2499;oldPrice=3999;rating=4.6;description='Sony STARVIS sensor 150 degree wide angle G-sensor loop recording and night vision.';image=(img '1617469767294-1e9b7d6fa16a')})
$p.Add(@{id='AUT003';name='Michelin 12V Digital Tyre Inflator';category='Automotive';price=1999;oldPrice=2999;rating=4.7;description='Digital LED display auto-stop at preset PSI 12V plus USB compact and light.';image=(img '1601362840469-51e4d8d58785')})
$p.Add(@{id='AUT004';name='Bosch S5 55Ah Sealed Car Battery';category='Automotive';price=5999;oldPrice=7499;rating=4.8;description='Premium sealed MF battery 400 CCA. Fits most hatchbacks and sedans.';image=(img '1620266757065-5814239881fd')})
$p.Add(@{id='AUT005';name='Anti-Slip Leather Steering Wheel Cover';category='Automotive';price=299;oldPrice=599;rating=4.4;description='Anti-slip leather wrap with thumb grips. Universal 14 to 15 inch fit.';image=(img '1503376780353-7e6692767b70')})
$p.Add(@{id='AUT006';name='Autel AL319 OBD2 Diagnostic Scanner';category='Automotive';price=3499;oldPrice=4999;rating=4.7;description='Reads and clears all OBD2 fault codes live data stream compatible with all cars.';image=(img '1449965408869-eaa3f722e40d')})
$p.Add(@{id='AUT007';name='Qubo 4-Sensor Parking Assist Kit';category='Automotive';price=1799;oldPrice=2999;rating=4.5;description='4 ultrasonic parking sensors with LED display. Plug and play fitting.';image=(img '1449965408869-eaa3f722e40d')})
$p.Add(@{id='AUT008';name='Meguiars Ultimate Liquid Wax 473ml';category='Automotive';price=1299;oldPrice=1899;rating=4.8;description='Synthetic wax formula for long-lasting protection and a showroom-quality shine.';image=(img '1607860108855-64acf2078ed9')})

# HEALTH
$p.Add(@{id='HEA001';name='ON Gold Standard Whey Protein 2kg';category='Health';price=4999;oldPrice=6499;rating=4.8;description='24g protein per serving 5.5g BCAA low sugar. Double Rich Chocolate flavour.';image=(img '1593095948071-474c5cc2989d')})
$p.Add(@{id='HEA002';name='Omron HEM-7120 BP Monitor';category='Health';price=1299;oldPrice=1999;rating=4.7;description='Clinically validated one-click digital BP monitor. Upper arm cuff with 60-reading memory.';image=(img '1576091160550-2173dba999ef')})
$p.Add(@{id='HEA003';name='Setu Daily Multivitamin 60 Tablets';category='Health';price=599;oldPrice=899;rating=4.6;description='25 essential vitamins and minerals for immunity energy and overall vitality.';image=(img '1584308666744-24d5c474f2ae')})
$p.Add(@{id='HEA004';name='Dr. Trust Pro Pulse Oximeter';category='Health';price=799;oldPrice=1299;rating=4.7;description='Medical-grade SpO2 pulse rate and PI reading in 10 seconds. OLED display.';image=(img '1584820927498-cfe5211fd8bf')})
$p.Add(@{id='HEA005';name='Beurer PM25 Heart Rate Fitness Tracker';category='Health';price=2499;oldPrice=3999;rating=4.5;description='Optical HR GPS 24hr activity tracking 5-day battery life IP67 waterproof.';image=(img '1575311373937-040b8058b172')})
$p.Add(@{id='HEA006';name='Himalaya Diabecon Herbal Tablets 60pc';category='Health';price=199;oldPrice=299;rating=4.5;description='Herbal Ayurvedic formulation to support healthy blood sugar levels naturally.';image=(img '1550572017-ea058d2d5e2d')})
$p.Add(@{id='HEA007';name='Boldfit Whey Isolate Protein 1kg Mango';category='Health';price=2499;oldPrice=3499;rating=4.6;description='27g protein 6g BCAA zero fat instantized whey isolate. Mango flavour.';image=(img '1598300042247-d088f8ab3a91')})
$p.Add(@{id='HEA008';name='SPF50 PA Plus Broad-Spectrum Sunscreen 50ml';category='Health';price=499;oldPrice=799;rating=4.6;description='Lightweight SPF50 broad-spectrum UVA and UVB protection. Non-oily finish.';image=(img '1570194065650-d99fb4bedf0a')})
$p.Add(@{id='HEA009';name='Medimix Ayurvedic Soap 125g Pack of 6';category='Health';price=279;oldPrice=399;rating=4.7;description='18 active herbs. Cleanses protects from infections and fights body odour.';image=(img '1608248597279-f99d160bfcbc')})
$p.Add(@{id='HEA010';name='Dr. Morepen BG-03 Glucometer with 25 Strips';category='Health';price=699;oldPrice=999;rating=4.6;description='5-second result tiny blood sample 450-test memory includes 25 test strips.';image=(img '1559757175-0eb30cd8c063')})

# STATIONERY
$p.Add(@{id='STA001';name='Classmate 6-Subject Spiral Notebook A4';category='Stationery';price=179;oldPrice=249;rating=4.7;description='A4 ruled notebook 300 pages 6 subject dividers micro-perforated sheets.';image=(img '1531346878377-a5be20888e57')})
$p.Add(@{id='STA002';name='Pilot G2 Retractable Gel Pen 10-Pack';category='Stationery';price=349;oldPrice=499;rating=4.9;description='Refillable retractable gel pens. Smooth writing with smear-resistant archival ink.';image=(img '1585336261022-680e295ce3fe')})
$p.Add(@{id='STA003';name='Faber-Castell Watercolor Pencils 48pc';category='Stationery';price=599;oldPrice=899;rating=4.7;description='Vibrant 48-color water-soluble pencil set. Ideal for artists of all levels.';image=(img '1513364776144-60967b0f800f')})
$p.Add(@{id='STA004';name='Camlin 33-Part Mathematical Geometry Set';category='Stationery';price=199;oldPrice=299;rating=4.6;description='Precision compass divider set squares and protractor. Full geometry kit for students.';image=(img '1596496638641-e240a9b44b1f')})
$p.Add(@{id='STA005';name='BILT A4 Copy Paper 75GSM 500 Sheets';category='Stationery';price=249;oldPrice=349;rating=4.5;description='FSC-certified ream-wrapped A4 paper. Bright white 75 GSM print-ready sheets.';image=(img '1450101499163-c8848c66ca85')})
$p.Add(@{id='STA006';name='Parker Jotter Steel Ballpoint Pen';category='Stationery';price=449;oldPrice=699;rating=4.8;description='Iconic click-action pen with QuinkFlow ballpen technology. Lasts 3 times longer.';image=(img '1583485088034-697b5bc54ccd')})
$p.Add(@{id='STA007';name='Magnetic Whiteboard 60x90cm Full Kit';category='Stationery';price=1299;oldPrice=1999;rating=4.6;description='Double-sided board 3 markers plus eraser plus magnets included. Home office ready.';image=(img '1611532736597-de2d4265fba3')})
$p.Add(@{id='STA008';name='Scotch Magic Tape Dispenser Pack of 6';category='Stationery';price=299;oldPrice=449;rating=4.7;description='Matte finish writeable transparent tape. Sticks instantly and ages invisibly.';image=(img '1589330694653-ded6df03f754')})
$p.Add(@{id='STA009';name='Staedtler Triplus Fineliner 0.3mm 20pc';category='Stationery';price=799;oldPrice=1199;rating=4.8;description='0.3mm fineliner with metal-clad tip. Water-based ink. Cap-off safe for days without drying.';image=(img '1498050108023-c5249f4df085')})
$p.Add(@{id='STA010';name='Solo Executive A4 Zip Document Bag';category='Stationery';price=499;oldPrice=799;rating=4.5;description='3-ring binder with zip closure pen loops and card holder. Perfect for office use.';image=(img '1454165804606-c3d57bc86b40')})

# Write JSON
$output = @{ products = $p.ToArray(); totalCount = $p.Count }
$json = $output | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText('C:\Users\ADARI VASU\.gemini\antigravity\scratch\ecommerce-app\data\products.json', $json, [System.Text.Encoding]::UTF8)

Write-Host ""
Write-Host "========================================"
Write-Host " ZENTRO Products Generated!"
Write-Host "========================================"
Write-Host " Total: $($p.Count) products across 14 categories"
$p | Group-Object category | Sort-Object Name | ForEach-Object {
    Write-Host "  $($_.Name): $($_.Count) items"
}
