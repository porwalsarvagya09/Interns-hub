# Web App with Admin Panel

This project is a basic web application with:
- **Home page**
- **Intern/Volunteer Registration form**
- **Admin view to see applicants**
- Backend API for storing and retrieving applicants

Built using **MERN stack** and deployed on **Render**.

---

## 📂 Folder Structure
```
project/
│
├── client/ # Frontend (React + Vite + Tailwind CSS)
│ ├── src/
│ └── .env # Frontend environment variables
│
├── server/ # Backend (Express + MongoDB)
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ └── .env # Backend environment variables
│
└── README.md
```


---

## 🔧 Technologies Used
### Frontend
- React.js
- Vite
- Tailwind CSS
- ShadCN UI

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv

---

## ⚙️ Environment Variables
### Backend env
PORT=5000
MONGODB_URI=your-mongodb-connection-string
FRONTEND_URL=https://your-frontend-url.deploy.com

### Frontend env
VITE_API_URL=https://your-backend-url.deploy.com

---
## Clone the repo
-git clone https://github.com/your-username/project.git
-cd project

## Install dependencies for frontend & backend

-cd client && npm install
-cd ../server && npm install

## Start backend

-cd server
-npm run dev

## Start frontend
-cd client
-npm run dev

## ✨ Features
User registration form

Admin dashboard

Deployed with environment variables for security

Responsive design

---

If you want, You can also make a **better deployment checklist** so your admin data fetching works in production without CORS issues.  

