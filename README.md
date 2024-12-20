# Level_2 Assignment_2

## Overview

This is for my Advance Web Development Course Assignment. As my student id ends with the digit 4, I have to submit Set number 3 which is a Car Store. It provides APIs for managing cars and processing orders, along with calculating revenue from these orders.

## Technologies Used

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![mongoose](https://img.shields.io/badge/Mongoose-592F00?style=for-the-badge&logo=mongoose&logoColor=white) ![vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Live website link

Live website link: [Batch-4-assignment-2](https://batch-4-assignment-2.vercel.app/)

## Features

- **Car Management**:

  - Create, update, delete, and fetch car details.
  - Enforce validation for car attributes like brand, model, year, price, and quantity.

- **Order Processing**:

  - Place orders for cars.
  - Calculate total revenue from all orders.
  - Validate order details such as email, car selection, and quantity.

- **API Endpoints**:

  - `/api/cars`: Manage car inventory.
  - `/api/orders`: Manage and process orders.

- **Sepecific API Endpoints**:

  - get method `/api/cars/`: Get all cars.
  - get method `/api/cars/:carId`: get a car by ID.
  - post method `/api/cars/`: Create a new car.
  - put method `/api/cars/:carId`: Update a car.
  - delete method `/api/cars/:carId`: Delete a car.

  - post method `/api/orders/`: Create a new order.
  - get method `/api/orders/revenue`: Calculate total revenue from all orders.

## Errors Handling

- **Error Handling**: The application handles errors gracefully, returning appropriate error responses to the client. proper error messages are sent to the user.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Variables**:

   - Create a `.env` file in the root of the project.
   - Add the following environment variables:
     ```
     PORT=3000
     DATABASE_URL=<your-mongodb-connection-string>
     ```

4. **Build the project**:

   ```bash
   npm run build
   ```

5. **Start the server**:

   - For production:
     ```bash
     npm start
     ```
   - For development:
     ```bash
     npm run dev
     ```

6. **Access the application**:
   - Open your browser and go to `http://localhost:3000` to view the application.

## Linting and Formatting

This project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and formatting.

- **Lint** the code:

  ```bash
  npm run lint
  ```

- **Fix Lint Issues**:

  ```bash
  npm run lint:fix
  ```

- **Format the code**:
  ```bash
  npm run format
  ```
