# HobbyHub Server: Backend for Local Hobby Group Organizer

---

## Overview

This repository contains the backend code for **HobbyHub**, a local hobby group organizer platform. The server is built with **Node.js**, **Express.js**, and **MongoDB**, and provides RESTful APIs for managing user authentication, hobby groups, and related data.

---

## Key Features

- RESTful API endpoints for CRUD operations on hobby groups.
- User authentication and authorization using Firebase Authentication tokens.
- Secure connection and data handling with MongoDB using Mongoose.
- Environment variables to securely store sensitive information like database URI and Firebase credentials.
- Validation and error handling for robust API responses.
- Role-based access control to protect private routes.
- Support for user management, including creating, updating, and retrieving users and groups.
- Integrated with client-side React app for seamless full-stack functionality.

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Firebase Admin SDK** (for verifying Firebase ID tokens)
- **dotenv** (environment variable management)
- **Cors** (Cross-Origin Resource Sharing)
- **Nodemon** (for development)
- Other utilities for logging, validation, and security

---


### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hobbyhub-server.git

