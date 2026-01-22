# 🎮 Arcadia Game Store — Client (React)

This is the **frontend client** for **Arcadia**, a full-stack video game marketplace built with **React + Vite**.  
The platform allows users to browse games, manage carts and wishlists, view achievements, and provides administrators with a complete management dashboard.

---

## 🎯 Description

Arcadia is a modern digital game distribution platform inspired by **Steam** and **Epic Games Store**.

The frontend communicates with an **Express.js REST API** and uses **JWT authentication** to securely manage users, carts, wishlists, achievements, and administrative operations.

The platform supports **two main user roles**:

---

## 👤 Regular Users

- Browse the full game catalog
- Filter games by **platform** and **genre**
- View detailed game pages with:
  - Image carousel
  - System requirements
  - Achievements
  - Similar game recommendations
- Add games to cart
- Update cart quantities
- Manage wishlist
- Edit personal profile
- Persistent login using JWT

---

## 🛠️ Administrators

- Access a protected admin dashboard
- Manage **users**
  - Create users
  - Edit users
  - Delete users
  - Assign admin roles
- Manage **games**
  - Create and edit games
  - Set pricing
  - Assign genres
  - Configure supported platforms
  - Define system requirements
- Manage **achievements**
  - Create achievements
  - Assign achievements to games
  - Edit and delete achievements
- All admin routes are protected by role-based authorization

---

## 🧑‍💻 User Requirements

### 🔐 Authentication
- Secure login and registration
- JWT-based authentication
- Persistent sessions using localStorage

---

### 🎮 Game Store Features

- Browse full catalog
- Responsive game grid
- Platform filtering:
  - PC
  - PlayStation
  - Xbox
  - Nintendo Switch
- Genre filtering:
  - Action
  - RPG
  - Strategy
  - Shooter
  - Adventure
  - Puzzle

---

### 📦 Game Details

Each game includes:

- Image & screenshots carousel
- Price
- Publisher
- Release date
- Supported platforms
- Multiple genres
- Overview description
- System requirements:
  - Minimum
  - Recommended
- Achievements tab
- Similar games section

---

### 🛒 Cart System

- Add games to cart
- Increase / decrease quantity
- Remove items
- Clear entire cart
- Automatic subtotal calculation
- Checkout placeholder (future feature)

---

### ❤️ Wishlist

- Add / remove games from wishlist
- Toggle wishlist from game page
- View wishlist in profile
- Persisted per user

---

### 👤 Profile Management

- View profile information
- Edit username and email
- Update password
- Display account role
- Manage wishlist items

---

## 🧭 Application Routes

```text
/
├── login
├── signup
├── browse
│   └── details/:id
│       ├── overview
│       └── achievements
├── cart
├── profile
└── admin (protected)
    ├── users
    ├── games
    └── achievements
```

## 📂 Project Structure

```
arcadia-client/
├── public/
├── src/
│   ├── api/                 # API communication logic
│   │   ├── authApi.js
│   │   ├── gameApi.js
│   │   ├── cartApi.js
│   │   ├── wishlistApi.js
│   │   ├── achievementApi.js
│   │   └── userApi.js
│   │
│   ├── assets/              # Images, icons, videos
│   │
│   ├── components/          # Reusable UI components
│   │   ├── Card.jsx
│   │   ├── Navbar.jsx
│   │   ├── CategoriesTab.jsx
│   │   ├── ImageCarousel.jsx
│   │   ├── CartToast.jsx
│   │   ├── SimilarGamesCard.jsx
│   │   ├── Overview.jsx
│   │   └── AchievementsLayout.jsx
│   │
│   ├── context/             # Auth + global session state
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── Homepage.jsx
│   │   ├── BrowsePage.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── CartPage.jsx
│   │   ├── Profile.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── admin/
│   │       ├── AdminLayout.jsx
│   │       ├── AdminRoute.jsx
│   │       ├── AdminSidebar.jsx
│   │       ├── AdminUsers.jsx
│   │       ├── AdminGames.jsx
│   │       └── AdminAchievements.jsx
│   │
│   ├── routes/
│   │   └── router.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/              # CSS Modules
│     
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Technologies Used

### Frontend
- **React**
- **Vite**
- **React Router DOM**
- **Context API**
- **CSS Modules**
- **React Icons**

### Communication
- **REST API**
- **Fetch API**
- **JWT Authentication**

### Backend (separate repository)
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT**
- **Role-based middleware**

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/arcadia-client.git
cd arcadia-client
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Environment Variables
Create a .env file in the root directory:
```bash
VITE_SERVER_URL=http://localhost:5000
```
### 4️⃣ Run the development server
```bash
npm run dev
```

🔐 Admin Access

Admin dashboard route:

/admin

Requirements:
- Logged-in user
- Valid JWT token
- User role must be admin