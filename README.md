📚 MEAN Tutorials App

A full-stack CRUD application built with MongoDB, Express, Angular 15, and Node.js.
This project allows users to create, view, update, delete, and search tutorials efficiently.

🚀 Overview

This application demonstrates a complete MEAN stack implementation, including:

A Node.js/Express backend providing REST APIs

A MongoDB database to store tutorials

An Angular frontend with a clean UI

Full CRUD operations + search functionality

It’s a perfect example of how a modern, containerizable MEAN stack app works.

🧩 Features
Backend (Node + Express)

RESTful API endpoints

MongoDB connection using Mongoose

CRUD operations:

Create a new tutorial

Retrieve single or all tutorials

Update a tutorial

Delete a tutorial

Search tutorials by title

Frontend (Angular 15)

Simple and clean UI

Integrated form validation

Angular service (HTTPClient) to communicate with backend

Search tutorials in real-time

📁 Project Structure
mean-app/
│
├── backend/
│   ├── app/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── config/db.config.js
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   ├── services/tutorial.service.ts
    │   ├── index.html
    ├── angular.json
    └── package.json

⚙️ Setup Instructions

Follow these steps to run the project locally:

🟦 Backend Setup (Node.js + Express)
1. Navigate to backend directory
cd backend

2. Install dependencies
npm install

3. Update your MongoDB connection

Edit this file:

app/config/db.config.js

Example:

module.exports = {
  url: "mongodb://localhost:27017/tutorials_db"
};

4. Start the server
node server.js


The backend will start at:

👉 http://localhost:3000/api/

🟨 Frontend Setup (Angular 15)
1. Navigate to frontend directory
cd frontend

2. Install dependencies
npm install

3. Ensure the Angular service points to the backend

Edit:

src/app/services/tutorial.service.ts

Example:

baseUrl = "http://localhost:3000/api/tutorials";

4. Start the Angular server
ng serve --port 8081


Your frontend will be available at:

👉 http://localhost:8081/

🧪 Testing the Application

Once both frontend and backend are running:

✔ Create tutorial

Fill out the form and click Submit

✔ View tutorial list

Displayed instantly on the UI

✔ Edit tutorials

Click any item to update

✔ Delete tutorials

Use the delete button

✔ Search tutorials

Search by title using the search bar

🐳 Docker Support (Optional Expansion)

If you want to containerize:

Frontend → build Angular → serve via Nginx
Backend → Node.js Express container
MongoDB → official MongoDB image

This repo can easily be extended with Dockerfiles and docker-compose.

🙌 Acknowledgments

This project is designed as a practical DevOps/MEAN stack demonstration that showcases API creation, frontend integration, and database operations in a clean, easy-to-understand structure.
