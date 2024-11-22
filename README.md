# Level_2 Assignment_2

## Overview

This project is a web application built using Node.js, Express, and MongoDB. It provides APIs for managing cars and processing orders, along with calculating revenue from these orders. This is for my Advance Web Development Course Assignment.

## Features

- **Car Management**:

  - Create, update, delete, and fetch car details.
  - Categories include Sedan, SUV, Truck, Coupe, and Convertible.
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

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB

## Getting Started

Follow these steps to set up the project locally:

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
