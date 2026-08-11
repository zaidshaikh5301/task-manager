# Task Manager

A responsive task management application built with React and JavaScript, focused on authenticated user workflows, task CRUD operations, profile management, file uploads, and REST API integration.

## Overview

Task Manager is a frontend application that consumes a JWT-protected REST API to provide a complete task-management workflow. Users can authenticate, manage their tasks, update profile information, and work with uploaded files through a responsive interface.

## Features

- JWT-based user registration and login
- Protected application routes
- Create, view, update, and delete tasks
- Independent task-status updates
- User profile management
- Avatar/file upload and deletion support
- Axios-based API integration
- Authorization token handling
- Responsive desktop and mobile UI
- Loading and error handling

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 19 |
| Language | JavaScript (ES Modules) |
| Build Tool | Vite |
| Routing | React Router |
| HTTP Client | Axios |
| Styling | CSS |
| Authentication | JWT |
| Backend | REST API |

## Architecture

```text
React Pages / Components
          |
          v
     React Router
          |
          v
   API Service Layer
          |
          v
        Axios
          |
          v
   REST API + JWT
          |
          +---- Authentication
          +---- Tasks
          +---- Profile
          +---- Files
```

The frontend separates UI, routing, API communication, and authentication concerns. JWT credentials are attached to protected API requests through the Axios configuration.

## API

**Base URL**

```text
https://intern-crud-task-api.onrender.com/api
```

### Authentication

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/auth/signup` | Register a user |
| POST | `/auth/login` | Authenticate a user |
| POST | `/auth/logout` | Log out the current user |

### Tasks

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/tasks` | Create a task |
| GET | `/tasks` | Get the logged-in user's tasks |
| PATCH | `/tasks/{id}` | Update task details |
| DELETE | `/tasks/{id}` | Delete a task |
| PATCH | `/tasks/{id}/status` | Update task status |

### Profile

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/profile` | Get the current user's profile |
| PATCH | `/profile` | Update profile information |

### Files

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/files/upload` | Upload a file |
| DELETE | `/files/delete` | Delete an uploaded file |

Protected endpoints require the JWT access token in the `Authorization` header.

## Installation

### Prerequisites

- Node.js 18+
- npm
- Access to the REST API

### Setup

```bash
git clone https://github.com/zaidshaikh5301/task-manager.git
cd task-manager
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

### Production build

```bash
npm run build
npm run preview
```

## Screenshots

Add project screenshots to `docs/screenshots/` and reference them here. Recommended captures:

- Login / Registration
- Task dashboard
- Create/Edit task form
- Profile page
- Responsive mobile view

## Live Demo

No verified public deployment URL is currently configured in this repository. Add the deployment URL here once the Vite application is deployed.

## Project Structure

```text
src/
├── components/
├── context/
├── pages/
├── services/
├── utils/
├── App.jsx
└── main.jsx
```

## Future Improvements

- Automated frontend tests
- Advanced task filtering and search
- Pagination for large task collections
- Improved offline and API-error recovery
- CI checks and production deployment

## Author

**Zaid Shaikh**

- GitHub: https://github.com/zaidshaikh5301
- LinkedIn: https://linkedin.com/in/zaid-shaikh-823961345
