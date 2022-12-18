const config = require("./utilities/config");
const logger = require("./utilities/logger");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const booksRouter = require("./controllers/books");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to the database");
  })
  .catch((err) => {
    logger.error("couldn't connect to the database: ", err);
  });

app.use(express.json());

app.use("/api/books", booksRouter);

module.exports = app;
