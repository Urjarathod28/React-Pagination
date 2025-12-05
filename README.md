# 📦 React Pagination & Infinite Scroll Project

A full-stack MERN project featuring:

-   ✅ Pagination
-   ✅ Infinite Scroll
-   ✅ Large dataset handling
-   ✅ API-based data fetching
-   ✅ MongoDB storage + seeder API

------------------------------------------------------------------------

## 🖼 Project Screenshots

<img width="1139" height="826" alt="Screenshot 2025-12-04 194810" src="https://github.com/user-attachments/assets/12417e5d-9c35-4160-94fd-81e454b61669" />

<img width="1139" height="826" alt="Screenshot 2025-12-04 194810" src="https://github.com/user-attachments/assets/36c7e527-7820-4541-8a0e-aeb1b755d035" />


------------------------------------------------------------------------

## 🚀 Project Features

### **Frontend (React + Vite)**

-   Pagination (Next, Previous, Page Numbers)\
-   Infinite Scroll (auto-load on scroll bottom)\
-   Toast notifications\
-   Product listing UI (CSS included)\
-   API integration for paginated data\
-   Axios for API calls

### **Backend (Node + Express + MongoDB)**

-   REST API with pagination\
-   MongoDB connection via Mongoose\
-   Product model + controller\
-   Seeder API to insert dummy products\
-   CORS enabled\
-   ES Module structure (import/export)

------------------------------------------------------------------------

## 📁 Folder Structure

### **Frontend**

    frontend/
    ├── src/
    │   ├── components/
    │   │   └── InfinateScrollList.jsx
    │   ├── pages/
    │   │   └── Home.jsx
    │   ├── api/
    │   │   └── api.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── style.css
    ├── package.json
    └── vite.config.js

### **Backend**

backend/
├── package.json        # Node.js dependencies & scripts
├── .env                # Environment variables
└── src/
    ├── config/         # Database configuration (db.js)
    ├── controllers/    # Route controllers
    │   ├── productController.js
    │   └── swddController.js
    ├── models/         # MongoDB schemas
    │   └── productModel.js
    ├── routes/         # API routes
    │   └── productRoute.js
    ├── seeder/         # Seeder scripts
    │   └── seedProducts.js
    └── app.js          # Main server entry point


------------------------------------------------------------------------

## ⚙️ Installation Guide

### **1️⃣ Clone the Project**

    cd frontend
    npm run dev

------------------------------------------------------------------------

## 🖥️ Backend Setup

### **2️⃣ Install Dependencies**

    cd backend
    npm install

### **3️⃣ Add MongoDB URL**

Create a file:

    backend/.env

Add:

    MONGO_URI=mongodb://127.0.0.1:27017/ReactPagination
    PORT=5000
    JWT_SECRET=RG735950

### **4️⃣ Start Backend**

    npm run dev

------------------------------------------------------------------------

## 🌱 Insert Dummy Data into MongoDB

Seeder API:

    GET /api/products/seed

Example in browser:

    http://localhost:5000/api/products/seed

This inserts **200 sample products**.

------------------------------------------------------------------------

## 🔌 API Endpoints

### **Get Paginated Products**

    GET http://localhost:5000/api/products?page=1&limit=20

### **Response Example**

    {
      "page": 1,
      "limit": 20,
      "total": 200,
      "totalPages": 10,
      "products": [
        {
          "_id": "69316abda0a6d7346156b34d",
          "title": "Product 1",
          "description": "This is product number 1",
          "price": 118
        },
        ...
      ]
    }

------------------------------------------------------------------------

## ⚡ Infinite Scroll Logic (Frontend)

Uses **IntersectionObserver**:

``` js
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    loadMore();
  }
});
```

------------------------------------------------------------------------

## 📝 Scripts

### **Backend**

``` json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### **Frontend**

``` json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

------------------------------------------------------------------------

## 📦 Technologies Used

### **Frontend**

-   React (Vite)
-   Axios
-   CSS

### **Backend**

-   Node.js + Express\
-   MongoDB + Mongoose\
-   Nodemon\
-   CORS\
-   dotenv

------------------------------------------------------------------------

## 🎉 Enjoy building with Pagination + Infinite Scroll!
