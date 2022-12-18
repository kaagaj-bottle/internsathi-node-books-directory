const config = require("./utilities/config");
const express = require("express");
const app = express();

app.use(express.json());

module.exports = app;
