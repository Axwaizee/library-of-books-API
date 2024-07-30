const express = require("express");
const Book = require("../models/Book");
const router = express();
router.use(express.json());

router.post("/", async (req, res, next) => {
	try {
		const { title, author, genre, publishedDate } = req.body;
		if (title && author && genre && publishedDate) {
			const book = new Book({ title, author, genre, publishedDate });
			await book.save();
			res.status(201).send(book);
		} else {
			res.status(400).send({
				error: "Book must have title, author, genre and publishedDate",
			});
		}
	} catch (error) {
		next(error);
	}
});

router.get("/", async (req, res, next) => {
	try {
		const { title, author, genre, publishedDate } = req.query;

		const whereClause = {};
		if (title) whereClause.title = new RegExp(title, "i");
		if (author) whereClause.author = new RegExp(author, "i");
		if (genre) whereClause.genre = new RegExp(genre, "i");
		if (publishedDate) whereClause.publishedDate = publishedDate;

		const books = await Book.find(
			whereClause,
			"title author genre publishedDate"
		);
		res.status(200).send(books);
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;

		const book = await Book.findById(
			id,
			"title author genre publishedDate"
		);
		res.status(200).send(book || []);
	} catch (error) {
		next(error);
	}
});

router.put("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const { title, author, genre, publishedDate } = req.body;

		const bookInfo = {};
		if (title) bookInfo.title = title;
		if (author) bookInfo.author = author;
		if (genre) bookInfo.genre = genre;
		if (publishedDate) bookInfo.publishedDate = publishedDate;

		const book = await Book.findByIdAndUpdate(id, bookInfo, { new: true });
		res.status(200).send(book);
	} catch (error) {
		next(error);
	}
});

router.delete("/:id",async (req, res, next) => {
	try {
		const { id } = req.params;

		const book = await Book.findById(id);
		await book.deleteOne()
		res.status(200).send(book);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
