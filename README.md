
# Contact Management App

This is a RESTful API for managing contacts, with features for authentication, email notifications, liking/disliking, and blocking/unblocking contacts.

## Features

- **User Authentication**: Users can register and log in, receiving a JSON Web Token (JWT) for secure access.
- **Contact Management**: Users can create, view, update, and delete contacts.
- **Email Notifications**: Users can send emails to contacts using the Nodemailer library.
- **Like and Dislike Contacts**: Users can like and dislike contacts, and the likes count is tracked.
- **Block and Unblock Contacts**: Users can block or unblock contacts to manage their interactions.

---

## Technologies Used

- **Node.js** and **Express.js**: For building the server and REST API.
- **MongoDB**: For storing user and contact data.
- **JWT**: For secure authentication.
- **Nodemailer**: For sending emails to contacts.
- **bcrypt**: For password hashing.

---

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed
- **MongoDB** instance running locally or on a cloud platform like MongoDB Atlas
- Create a `.env` file in the root directory with the following environment variables:
  ```plaintext
  MONGODB_URI=<Your MongoDB URI>
  JWT_SECRET=<Your JWT Secret>
  EMAIL=<Your email for Nodemailer>
  EMAIL_PASS=<Your email password for Nodemailer>
  ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/internship-pentatech-it-solutions/Ainoo-Ebenezer-Contact.git
   cd contact-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:8000`.

---

## API Endpoints

### Authentication

- **Register**: `POST /auth/register`  
  **Body**: `{ "username": "username", "email": "email@example.com", "password": "password" }`

- **Login**: `POST /auth/login`  
  **Body**: `{ "email": "email@example.com", "password": "password" }`

### Contact Management

- **Create Contact**: `POST /contacts`  
  **Protected Route**. **Body**: `{ "name": "Contact Name", "email": "contact@example.com", "phone": "1234567890", "description": "CE rep", "blocked": "True", "liked": "True" }`

- **Get All Contacts**: `GET /contacts`  
  **Protected Route**

- **Get Single Contact**: `GET /contacts/:id`  
  **Protected Route**

- **Update Contact**: `PUT /contacts/:id`  
  **Protected Route**

- **Delete Contact**: `DELETE /contacts/:id`  
  **Protected Route**

### Additional Features

- **Send Email to Contact**: `POST /send-email`  
  **Protected Route**. **Body**: `{ "contactEmail": "contact@example.com", "subject": "Subject", "message": "Email message content" }`

- **Like Contact**: `PUT /contacts/:id/like`  
  **Protected Route**. **Increments likes count for the contact.**

- **Dislike Contact**: `PUT /contacts/:id/dislike`  
  **Protected Route**. **Decrements likes count for the contact.**

- **Block Contact**: `PUT /contacts/:id/block`  
  **Protected Route**. **Marks the contact as blocked.**

- **Unblock Contact**: `PUT /contacts/:id/unblock`  
  **Protected Route**. **Removes the blocked status of the contact.**

---

## Testing

To test each feature, you can use **Postman** or **cURL**. Make sure to add the `Authorization` header with the token received from logging in.

---

## Contact

For any issues or feature requests, feel free to open an issue or reach out to the project maintainers.

Happy Coding! 🎉
