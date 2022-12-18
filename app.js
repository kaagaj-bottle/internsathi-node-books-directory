const config = require("./utilities/config");
const express = require("express");
const app = express();

const booksRouter = require("./controllers/books");

app.use(express.json());

app.use("/api/books", booksRouter);

module.exports = app;
