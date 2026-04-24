# 🚀 TaskFlow API (Backend)

A fully functional REST API for a task management application with secure user authentication and task operations.

---

## 🔥 Features

* User Signup & Login (JWT Authentication)
* Password hashing using bcrypt
* Protected routes with middleware
* CRUD operations for tasks
* User-specific data isolation
* MongoDB database integration

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (Authentication)
* bcryptjs

---

## 📁 Folder Structure

/server
├── controllers
├── models
├── routes
├── middleware
├── config
└── index.js

---

## 🔐 Authentication

* JWT-based authentication
* Token required for protected routes
* Stored in Authorization header

---

## 📡 API Endpoints

### Auth Routes

POST /api/auth/signup
POST /api/auth/login

---

### Task Routes (Protected)

GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
PATCH /api/tasks/:id
DELETE /api/tasks/:id

---

## ⚙️ Environment Variables

Create a `.env` file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:

npm install

3. Run server:

npm run dev

---

## 🌍 Deployment

Backend deployed on Render
Database hosted on MongoDB Atlas

---

## 🧠 Key Highlights

* Secure authentication system
* Clean MVC architecture
* Scalable API design
* Proper error handling

---

## 👨‍💻 Author

Ashish
