# Library Management System (Frontend)

This is the **Frontend** of the full-stack Library Management System (LMS) built with **React**, enabling users to browse, borrow, review, and manage books. It is designed to provide seamless user experience for both **Library Members** and **Admins**.

## Live Demo

Deployed on: [Vercel](https://)

---

## Features

- **Authentication** – Secure login/register with JWT
- **Role-based Access** – Admins and Members have different permissions
- **Book Management** – View books with details, search functionality
- **Rating & Review System** – Submit and view ratings after return
- **Borrow & Return** – Borrow available books and manage due dates
- **Admin Dashboard** – Manage books, users, history, and reviews
- **Responsive UI** – Optimized for all screen sizes

---

## Tech Stack

| Tech            | Usage              |
| --------------- | ------------------ |
| React           | Frontend framework |
| React Router    | Routing            |
| Redux Toolkit   | State management   |
| Axios           | API requests       |
| React-Bootstrap | UI components      |
| Vite            | Build tool         |

---

## Project Structure

frontend/

├── public/

├── src/

│ ├── assets/ # Images & styles

│ ├── components/ # Reusable UI components

│ ├── features/ # Redux slices (auth, user, books, borrow, review)

│ ├── hooks/ # Custom React hooks

│ ├── pages/ # Route-level pages

│ ├── redux/ # Redux store config

│ ├── routes/ # Application routes

│ ├── services/ # API configs

│ ├── utils/ # Utility functions (e.g. password validation)

│ ├── App.jsx # App root component

│ └── main.jsx # App entry point

---

## Pages Overview

| Page               | Description                        |
| ------------------ | ---------------------------------- |
| `/` (Home)         | Featured books, search, categories |
| `/login`           | Login page                         |
| `/signup`          | Member registration                |
| `/books/:id`       | View book details and ratings      |
| `/profile`         | Member profile with history        |
| `/admin/dashboard` | Admin dashboard                    |
| `/admin/books`     | Manage books                       |
| `/admin/users`     | Manage users                       |

---

## Authentication & Security

- JWT-based token system
- Password hashing (bcrypt)
- Access control: private routes & admin-only pages
- Token stored securely in local storage
- Input validation and sanitization

---

## Getting Started (Frontend)

### 1. Clone the repo

```bash
git clone https://github.com/arq-angel/online-fe-lms.git
cd online-fe-lms
```

### 2. Install dependencies

```bash
yarn
```

### 3. Set environment variables

```bash
VITE_API_BASE_URL=https://your-backend-api.com/api/v1
```

### 4. Start the app

```bash
yarn dev
```

## Planned Sprints & Development Goals

Sprint 1: Setup & User Auth

Sprint 2: Book Management APIs

Sprint 3: Redux Integration & Pages

Sprint 4: Borrowing System

Sprint 5: Admin Dashboard + Review Flow

Sprint 6: Testing & QA

Sprint 7: UI Polish & Deployment

## Deployment

Frontend: Vercel

CI/CD: GitHub Actions (optional)

## Testing

Unit testing with Jest & React Testing Library

Integration tests for auth, borrow, review

E2E testing with Cypress (optional)

## Contributors

Frontend Developer: Your Name

Backend Developer: Collaborator Name (if any)

## License

This project is open source and available under the MIT License.
