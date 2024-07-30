require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.json());

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB);

mongoose.connection.on("connected", () => {
	console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
	console.error("Failed to connect to MongoDB:", err);
});

const booksRouter = require("./routes/books");
app.use("/api/books", booksRouter);


app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
