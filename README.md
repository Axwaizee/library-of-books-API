# Library of Books

A RESTful API for managing a library of books. This project implements CRUD (Create, Read, Update, Delete) operations for books with fields such as title, author, genre and published date.

## Features

- **Add a Book**: Add new books to the library by providing a title, author, genre and published date.
- **Get Books**: Retrieve a list of books, with optional filtering by title, author, genre or published date.
- **Get Book by ID**: Retrieve detailed information about a specific book by its ID.
- **Update Book**: Update the details of a book, including title, author, genre and published date.
- **Delete Book**: Remove a book from the library by its ID.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js to create the RESTful API.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **dotenv**: Module to load environment variables from a .env file.
- **MongoDB**: NoSQL database to store book information.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Axwaizee/library-of-books-API.git
   ```

2. Navigate to the project directory:

   ```bash
   cd library-of-books-API
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up your `.env` file based on `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Configure your MongoDB URI and server port in the `.env` file.

## Running the Project

1. Start the server:

   ```bash
   npm start
   ```

2. The server will run on the port specified in your `.env` file. By default, it runs on `http://localhost:3000`.

3. You can use tools like Postman or cURL to interact with the API endpoints.

## API Endpoints

- **POST /api/books**: Add a new book.
- **GET /api/books**: Get a list of books (optional filters: title, author, genre, publishedDate).
- **GET /api/books/:id**: Get a book by ID.
- **PUT /api/books/:id**: Update a book by ID.
- **DELETE /api/books/:id**: Delete a book by ID.

## Contributing

Feel free to submit issues, fork the repository, and make pull requests. Contributions are welcome!

## License

This project is licensed under the ISC License.
