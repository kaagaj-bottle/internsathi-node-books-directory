const booksRouter = require("express").Router();
const config = require("../utilities/config");
const logger = require("../utilities/logger");
const Book = require("../models/book");

//gets one all the books in the database
booksRouter.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    response.json(books);
  } catch (err) {
    logger.error(err);
  }
});

//gets single book from database as per given id
booksRouter.get("/:id", async (request, response) => {
  const id = request.params.id;

  if (!id) {
    return response.end("Error: id parameter missing");
  }
  try {
    const book = await Book.findById(id);
    response.json(book);
  } catch (err) {
    response.status(401).end("Error: couldn't find the book");
    logger.error(err);
  }
});

//posts book to the database
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

  //checks if any input is missing
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

  //saves to the database and also checks for error if any
  try {
    const savedBook = await newBook.save();
    response.json(savedBook);
  } catch (err) {
    response.status(401).end("error saving book to database");
    logger.error(err);
  }
});

//updates the book as per given id
booksRouter.put("/:id", async (request, response) => {
  const id = request.params.id;

  if (!id) {
    return response.end("Error: id parameter missing");
  }

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

  //checks if any input is missing
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

  const book = {
    title,
    author,
    price,
    publisher,
    description,
    datePublished,
    genre,
    url,
  };

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true });
    response.json(updatedBook);
  } catch (err) {
    logger.error(err);
    response.end("Error: book with given id not found");
  }
});

module.exports = booksRouter;
