
# MERN Project

This project is a MERN (MongoDB, Express, React, Node) stack application. Follow the steps below to set up and run the project locally.

---

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)
- [Contribution](#contributing)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chiragxarora/Remember-Not.git
   cd Remember-Not
   ```

2. Install frontend and backend dependencies separately, in appropriate directories.

   **For Backend:**
   ```bash
   npm install
   ```

   **For Client:**
   ```bash
   cd client
   npm install
   ```

---

## Configuration

In order to run the backend server, you’ll need to create a `config.env` file in the root directory with your environment-specific configurations. Use the template below:

```plaintext
DATABASE=<your-mongodb-connection-string>
DATABASE_PASSWORD=<your-mongodb-password>
PORT=<port-number>
JWT_SECRET=<your-jwt-secret>
JWT_EXPIRES_IN=<jwt-expiration-time>
JWT_COOKIE_EXPIRES_IN=<jwt-cookie-expiration-time>
SKIP_PREFLIGHT_CHECK=true
```

### Steps to Configure MongoDB

1. [Create a MongoDB Cluster](https://www.mongodb.com/cloud/atlas/register) on MongoDB Atlas or set up a local MongoDB instance.
2. Obtain the connection string and replace `<your-mongodb-connection-string>` with your MongoDB URI.
3. Replace `<your-mongodb-password>` with your database password.

### JWT Configuration

Set the `JWT_SECRET` to a random, secure string for token signing, and adjust `JWT_EXPIRES_IN` and `JWT_COOKIE_EXPIRES_IN` to define how long the JWT tokens and cookies should remain valid.

---

## Running the Application

1. Start the backend server:
   ```bash
   npm run server
   ```

2. Start the React app:
   ```bash
   cd client
   npm run start
   ```

The backend will be running on the specified `PORT`, and the frontend will typically be on `http://localhost:3000`.

---

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas or local MongoDB instance
- **Authentication**: JWT (JSON Web Tokens)

---

## Contributing

Thank you for trying out this project! Contributions are welcome and greatly appreciated. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear messages.
4. Push your branch to your forked repository.
5. Create a pull request, and we’ll review it as soon as possible.

Thank you for helping improve this project!

