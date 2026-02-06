# TaskPlanet – Full Stack Social Feed App

TaskPlanet is a full-stack social feed application where users can register, log in, create posts, view a live feed, and delete their own posts.  
The project demonstrates real-world frontend and backend integration with authentication, protected routes, and clean UI.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Material UI (MUI)
- React Router v6
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## ✨ Features

- User Registration & Login
- JWT-based Authentication
- Create Post
- View Live Feed (no page refresh)
- Delete Own Posts
- Success & Error Alerts (Snackbar)
- Protected API Routes
- Clean Material-UI based design

---

## 📁 Project Structure

```text
3W-assignment-project/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   └── project/
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── api/
│       │   ├── utils/
│       │   └── main.jsx
│       ├── package.json
│       └── vite.config.js
│
└── README.md
⚙️ Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


⚠️ Do not commit .env to GitHub.

▶️ How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/your-username/task-planet-app.git
cd task-planet-app

2️⃣ Start Backend
cd backend
npm install
npm start


Backend runs on:
👉 http://localhost:5000

3️⃣ Start Frontend
cd frontend/project
npm install
npm run dev


Frontend runs on:
👉 http://localhost:5173

🔐 Authentication Flow

User registers or logs in

Backend returns JWT token

Token is stored in localStorage

Protected routes require valid token

Only post owners can delete their posts
