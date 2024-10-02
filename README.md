# Product List Application

This is a fullstack application with a React frontend and a Node.js backend that displays and allows the deletion of products.

## Prerequisites
- Node.js (https://nodejs.org/)
- npm (comes with Node.js)

## Installation and Running

1. Clone the repository: git clone <repository-url>
Navigate to the project folder: cd StarterCode

2. Install dependencies for both frontend and backend:

##For the backend:
-cd backend
-npm install
-npm start

##For the frontend (open a new terminal window/tab):
-cd frontend
-npm install
-npm start

3. Access the application: Open your browser and go to http://localhost:3000.

## API Endpoints
- GET /api/products: Fetch all products.
- DELETE /api/products/:id: Delete a product by its ID.

## Notes
- The backend will run on http://localhost:5000.
- The frontend will run on http://localhost:3000.
- CORS is configured to allow smooth communication between the frontend and backend.
