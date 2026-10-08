# ✅ Task Manager

A responsive task management app built with React and Vite. It handles JWT authentication, task CRUD, profile management and file uploads against a REST API.

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- JWT registration and login
- Protected routes
- Create, view, update and delete tasks
- Update task status on its own
- Profile management
- Avatar upload and delete
- Axios setup that attaches the auth token automatically
- Loading and error handling
- Responsive on desktop and mobile

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| UI | React 19 |
| Language | JavaScript (ES Modules) |
| Build tool | Vite |
| Routing | React Router |
| HTTP | Axios |
| Auth | JWT |

## 🏗️ Architecture

```
Pages / Components → React Router → API service layer → Axios → REST API (JWT)
```

## 📌 API

Base URL: `https://intern-crud-task-api.onrender.com/api`

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/auth/signup` | Register |
| POST | `/auth/login` | Login |
| POST | `/auth/logout` | Logout |
| POST | `/tasks` | Create task |
| GET | `/tasks` | List user's tasks |
| PATCH | `/tasks/{id}` | Update task |
| DELETE | `/tasks/{id}` | Delete task |
| PATCH | `/tasks/{id}/status` | Update status |
| GET | `/profile` | Get profile |
| PATCH | `/profile` | Update profile |
| POST | `/files/upload` | Upload file |
| DELETE | `/files/delete` | Delete file |

Protected endpoints need the JWT in the `Authorization` header.

## 📁 Project Structure

```
src/
├── components/
├── context/
├── pages/
├── services/
├── utils/
├── App.jsx
└── main.jsx
```

## ⚙️ Getting Started

```bash
git clone https://github.com/zaidshaikh5301/task-manager.git
cd task-manager
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## 🔮 Roadmap

- [ ] Search, filtering and pagination
- [ ] Automated tests
- [ ] CI and deployment

## 👨‍💻 Author

**Zaid Shaikh**

[GitHub](https://github.com/zaidshaikh5301) · [LinkedIn](https://www.linkedin.com/in/zaid-shaikh-823961345/)
