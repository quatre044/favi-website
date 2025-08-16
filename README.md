# FAVI Website

A modern full-stack web application for First-AVPR Venture, Inc.
- **Frontend:** React (Vite, responsive, accessible)
- **Backend:** Node.js + Express.js
- **Database:** MongoDB (Mongoose)
- **Admin:** React dashboard (JWT protected)

## Features
- Public pages: Home, About Us, Services, Contact, Products
- Admin dashboard: Manage content, view inquiries
- JWT authentication
- REST API
- Responsive and fast

## Getting Started

### Prerequisites
- Node.js
- npm/yarn
- MongoDB

### Setup

1. Clone the repo  
2. Install dependencies:
    - `cd backend && npm install`
    - `cd ../frontend && npm install`

3. Configure backend environment:
    - Copy `backend/.env.example` to `.env` and set your variables

4. Start backend:
    - `cd backend && npm run dev`

5. Start frontend:
    - `cd frontend && npm run dev`

6. Access:
    - Frontend: `http://localhost:5173`
    - Backend API: `http://localhost:3001`

### Admin Login
- Default admin user seeded on first start (see backend seed script or docs).

## Structure

- `frontend/` — React app
- `backend/` — Express API

## Deployment

- See instructions for deploying with Docker, Vercel, or Heroku in the docs.

## License

MIT