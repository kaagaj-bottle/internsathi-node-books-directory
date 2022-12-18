const booksRouter = require("express").Router();
const config = require("../utilities/config");
const Book = require("../models/book");

booksRouter.get("/", async (request, response) => {
  response.json("Hello, world");
});

module.exports = booksRouter;
