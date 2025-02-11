# Full Stack Authentication App (NestJS + React)

This is a simple full-stack authentication application built with **NestJS** for the backend and **React (Vite) + Chakra UI** for the frontend.

## 📌 Features
- User Signup (with email, name, and password)
- User Login (JWT-based authentication)
- Protected Welcome Page
- Backend: NestJS with MongoDB
- Frontend: React (Vite) with Chakra UI

## 🛠 Tech Stack
- **Backend:** NestJS, MongoDB, Mongoose, JWT
- **Frontend:** React (Vite), Chakra UI, Axios
---

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone <repository-url>
cd <project-folder>
```

### 2️⃣ Setup the Backend (NestJS + MongoDB)
#### **Install dependencies**
```sh
cd backend
npm install
```


#### **Run the Backend**
```sh
npm run start:dev
```

📌 **API will be available at:** `http://localhost:3000`

---

### 3️⃣ Setup the Frontend (React + Chakra UI)
#### **Install dependencies**
```sh
cd frontend
npm install
```

#### **Run the Frontend**
```sh
npm run dev
```

📌 **App will be available at:** `http://localhost:5173`

---

## 🧑‍💻 API Endpoints (Backend)
| Method | Endpoint       | Description       |
|--------|--------------|------------------|
| `POST` | `/auth/signup` | Register a new user |
| `POST` | `/auth/login`  | Authenticate user |
| `GET`  | `/welcome`     | Protected route (requires token) |

---

## 🔐 Authentication Flow
1. **Signup:** User registers with email, name, and password.
2. **Login:** User logs in with credentials and receives a JWT token.
3. **Protected Route:** User can access protected content with a valid token.
