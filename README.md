# 📝 Task Manager

A modern Task Manager web application built with **React.js** and **Vite** that allows users to securely manage their daily tasks using JWT authentication and a REST API.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Token Authentication
- Protected Routes
- Logout Functionality

### ✅ Task Management
- Create New Tasks
- View All Tasks
- Update Existing Tasks
- Delete Tasks
- Mark Tasks as Complete/Incomplete
- Real-time UI Updates

### 👤 User Profile
- View User Profile
- Update Personal Information
- Upload Profile Picture (API Integration)
- Responsive Profile Page

### 🎨 UI Features
- Responsive Design
- Clean Dashboard
- Modern User Interface
- Loading Indicators
- Success & Error Notifications
- Form Validation

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Axios
- React Toastify
- CSS

## Backend API
- Intern CRUD Task API

---

# 📂 Project Structure

```
src/
│
├── api/
│   └── axios.js
│
├── components/
│   ├── Navbar.jsx
│   ├── TaskCard.jsx
│   └── ProtectedRoute.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── Profile.jsx
│   └── NotFound.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── assets/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/task-manager.git
```

Go inside project

```bash
cd task-manager
```

Install dependencies

```bash
npm install
```

Start Development Server

```bash
npm run dev
```

---

# 🌐 API Used

Base URL

```
https://intern-crud-task-api.onrender.com
```

### Authentication

```
POST /api/auth/signup
POST /api/auth/login
```

### Tasks

```
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

### User

```
GET /api/users/profile
PUT /api/users/profile
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
VITE_API_URL=https://intern-crud-task-api.onrender.com
```

---

# 📸 Screenshots

Add screenshots here.

```
screenshots/
│
├── login.png
├── register.png
├── dashboard.png
├── profile.png
```

---

# 📌 Available Scripts

Run development server

```bash
npm run dev
```

Build project

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# 📖 How It Works

1. Register a new account.
2. Login with your credentials.
3. JWT token is stored securely.
4. Access the protected dashboard.
5. Create, update, and delete tasks.
6. Manage your profile.
7. Logout when finished.

---

# 🔒 Authentication Flow

```
User Login
      │
      ▼
Receive JWT Token
      │
      ▼
Store Token
      │
      ▼
Attach Token to Axios Requests
      │
      ▼
Access Protected APIs
```

---

# 🎯 Future Improvements

- Task Categories
- Task Priority
- Due Dates
- Search Tasks
- Filter Tasks
- Dark Mode
- Pagination
- Drag & Drop Tasks
- Email Notifications

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch

```
git checkout -b feature-name
```

3. Commit your changes

```
git commit -m "Added new feature"
```

4. Push the branch

```
git push origin feature-name
```

5. Open a Pull Request

---

---

# 📄 License

This project is developed for learning purposes and internship practice.
