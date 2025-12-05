📦 React Pagination & Infinite Scroll Project
![alt text](<Screenshot 2025-12-04 194827.png>) ![alt text](<Screenshot 2025-12-04 194810.png>)
Full-stack project with React, Node.js, Express, MongoDB, supporting:
✅ Pagination
✅ Infinite Scroll
✅ Large dataset handling
✅ API-based data fetching
✅ MongoDB storage + seeder API

🚀 Project Features
Frontend (React + Vite)

Pagination (Next, Previous, Page Numbers)

Infinite Scroll (auto-load when scrolling to bottom)

Toast notifications

Product listing UI (CSS included)

API integration for fetching paginated data

Axios for API calls

Backend (Node + Express + MongoDB)

REST API with pagination support

Database connection with Mongoose

Product model & controller

Seeder API to insert dummy data

CORS enabled

Clean folder structure using ES modules (import/export)

📁 Folder Structure
Frontend
frontend/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   └── Pagination.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── hooks/
│   │   └── useInfiniteScroll.js
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js

Backend
backend/
├── config/
│   └── db.js
├── controllers/
│   └── productController.js
├── models/
│   └── productModel.js
├── routes/
│   └── productRoute.js
├── seeder/
│   └── seedProducts.js
├── server.js
└── package.json

⚙️ Installation Guide
1️⃣ Clone the Project
git clone https://github.com/your-username/react-pagination-project.git
cd react-pagination-project

🖥️ Backend Setup
2️⃣ Install Dependencies
cd backend
npm install

3️⃣ Add MongoDB URL

Create:

backend/.env


Add:

MONGO_URL=mongodb://127.0.0.1:27017/paginationDB
PORT=5000

4️⃣ Start Backend
npm run dev

🌱 Insert Dummy Data Into MongoDB

Run seeder API to generate sample products:

GET /api/products/seed

Example using browser:

http://localhost:5000/api/products/seed


This inserts 200 dummy products.

🎨 Frontend Setup
5️⃣ Install Dependencies
cd frontend
npm install

6️⃣ Start Frontend
npm run dev

🔌 API Endpoints
Get Paginated Products
GET /api/products?page=1&limit=20

Response Example
{
  "success": true,
  "page": 1,
  "limit": 20,
  "totalProducts": 200,
  "totalPages": 10,
  "products": [...]
}

⚡ Infinite Scroll Logic (Frontend)

Uses IntersectionObserver

Automatically loads next page when user reaches bottom

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    loadMore();
  }
});

📝 Scripts
Backend
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

Frontend
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}

📦 Technologies Used
Frontend

React (Vite)

Axios

Zustand / Context (optional)

CSS Modules

Backend

Node.js + Express

MongoDB + Mongoose

Nodemon

CORS

dotenv