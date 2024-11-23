<div align="center">


<a name="readme-top"></a>

# Book Shop (REST API)

The Book Store REST-API is an Express-based application designed to manage books and orders efficiently. This project is built with TypeScript, integrates MongoDB using Mongoose, and emphasizes schema validation and proper error handling.The API provides endpoints for creating, reading, updating, and deleting books and orders, as well as calculating total revenue using MongoDB aggregation.

[![Express][express_img]][express_url]
[![TypeScript][typescript_img]][typescript_url]
[![MongoDB][mongodb_img]][mongodb_url]
[![Mongoose][mongoose_img]][mongoose_url]



</div>

## ✨ Features

### Products
  - Create: Add new books with properties such as title, author, price, category, description, quantity, and stock status.
  - Retrieve: Fetch all books or filter them by title, author, or category.
  - Retrieve Specific Book: Get details of a specific book using its unique ID.
  - Update: Modify book details like price, quantity, and stock status.
  - Delete: Soft-delete books, marking them as unavailable without permanently removing them.
    
### Orders
  - Place an Order: Create orders by specifying customer email, product ID, and quantity.
  - Inventory Management: Automatically reduce product quantity after an order and update the stock status (inStock).
  - Revenue Calculation: Aggregate total revenue from all orders using MongoDB.

## Data Flow Diagram

The following diagram represents the flow of data and interactions:
 <div align="center">
   
    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
    │   Interface  │ →  │    Schema    │ →  │     Model    │ →  │   DB Query   │
    └──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
   
 </div>


### API Endpoint


 <div align="center">
    <h3>Products</h2>

   
| Method     | URI                  | Action                                                 |
| ---------- | -------------------- | ------------------------------------------------------ |
| `POST`     | `/api/products`      | Create a new book                                      |
| `GET`      | `/api/products`      | Retrieve all books, filterable by searchTerm           |
| `GET/HEAD` | `/api/productId`     | Retrieve details of a specific book by its ID          |
| `PUT`      | `/api/productId`     | Update details of a specific book by its ID            |
| `DELETE`   | `/api/productId`     | Soft-delete a specific book by its ID                  |
</div>
    

 <div align="center">
    <h3>Orders</h2>
   
| Method     | URI                  | Action                                                 |
| ---------- | -------------------- | ------------------------------------------------------ |
| `POST`     | `/api/orders`        | Place a new order                                      |
| `GET/HEAD` | `/api/orders/revenue`| Calculate total revenue from all orders                |
 </div>



## ⚡️ Quick start




[express_img]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[express_url]: https://expressjs.com/

[typescript_img]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[typescript_url]: https://www.typescriptlang.org/

[mongodb_img]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb_url]: https://www.mongodb.com/

[mongoose_img]: https://img.shields.io/badge/Mongoose-880000?style=for-the-badge
[mongoose_url]: https://mongoosejs.com/

