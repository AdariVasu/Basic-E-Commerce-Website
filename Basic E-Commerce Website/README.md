# 🛍️ Zentro India — E-Commerce Web App

A fully functional, modern e-commerce website built with pure HTML, CSS and JavaScript.

## ✨ Features

- 🛒 **Shopping Cart** — Add, remove, update quantities
- ❤️ **Wishlist** — Save favourite products
- 🔍 **Live Search** — Filter products instantly
- 📂 **14 Categories** — For You, Groceries, Fashion, Mobiles, Electronics, Beauty, Home, Sports, Books, Toys, Health, Automotive, Furniture, Stationery
- 💳 **Checkout Flow** — Address form + order confirmation
- 👤 **User Auth** — Register, login, forgot password with OTP
- 📍 **Pincode Delivery** — Check delivery availability
- 🎁 **Promo Code** — Use `SAVE10` for 10% discount
- 📱 **Responsive Design** — Works on all screen sizes
- 💾 **Persistent Cart** — Cart saved in localStorage

## 📦 Product Dataset

- **138 unique products** across 14 categories
- 10 items per category with unique IDs, names and real product images
- Images sourced from Unsplash CDN

## 🚀 How to Run

### Option 1 — Open directly in browser
Just open `index.html` in any browser. No server needed for basic browsing.

### Option 2 — Run with local server (PowerShell)
```powershell
powershell -ExecutionPolicy Bypass -File server.ps1 -Port 8080
```
Then visit: http://localhost:8080

## 📁 Project Structure

```
zentro-store/
├── index.html          # Main HTML page
├── script.js           # All JavaScript (products, cart, auth, search)
├── style.css           # All styling
├── server.ps1          # PowerShell HTTP server (optional)
├── generate_products.ps1   # Product dataset generator
└── data/
    └── products.json   # 138 handcrafted products
```

## 🛒 Test Accounts

| Field | Value |
|-------|-------|
| Email | rahul@example.com |
| Password | rahul123 |

## 💡 Promo Code

Use **`SAVE10`** at checkout for **10% off**.

## 🖼️ Categories

| Category | Items |
|----------|-------|
| For You | Smart Watch, Earbuds, Perfume, Backpack... |
| Groceries | Basmati Rice, Amul Butter, Tata Tea... |
| Fashion | Silk Saree, Derby Shoes, Kurti... |
| Mobiles | iPhone 15, Samsung A35, Redmi Note 13... |
| Electronics | Sony Headphones, Canon Camera, iPad... |
| Beauty | Lakme Lipstick, Neutrogena Cream, WOW Serum... |
| Home & Kitchen | Prestige Mixer, IFB Washer, Aquaguard... |
| Sports | SG Cricket Bat, Nike Shoes, Yoga Mat... |
| Books | Atomic Habits, Harry Potter, Wings of Fire... |
| Toys | LEGO 900pc, RC Drone, Barbie Dreamhouse... |
| Health | Whey Protein, BP Monitor, Oximeter... |
| Automotive | Dash Cam, Tyre Inflator, OBD2 Scanner... |
| Furniture | Gaming Chair, Sofa, Dining Table... |
| Stationery | Parker Pen, Whiteboard Kit, Watercolor Pencils... |

---
Built with ❤️ using HTML, CSS, JavaScript
