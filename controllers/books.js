const booksRouter = require("express").Router();
const config = require("../utilities/config");
const logger = require("../utilities/logger");
const Book = require("../models/book");

booksRouter.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    response.json(books);
  } catch (err) {
    logger.error(err);
  }
});

booksRouter.post("/", async (request, response) => {
  const {
    title,
    author,
    price,
    publisher,
    description,
    datePublished,
    genre,
    url,
  } = request.body;

  if (
    !(
      title &&
      author &&
      price &&
      publisher &&
      description &&
      datePublished &&
      genre &&
      url
    )
  ) {
    return response.status(401).json({ err: "missing input or inputs" });
  }

  const newBook = new Book({
    title,
    author,
    price,
    publisher,
    description,
    datePublished,
    genre,
    url,
  });

  try {
    const savedBook = await newBook.save();
    response.json(savedBook);
  } catch (err) {
    logger.error(err);
  }
});

module.exports = booksRouter;
