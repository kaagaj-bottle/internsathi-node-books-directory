const welcomePageRouter = require("express").Router();
const config = require("../utilities/config");
const logger = require("../utilities/logger");
const welcomePageHtml = require("../utilities/welcomePageHtml");

welcomePageRouter.get("", async (request, response) => {
  response.send(welcomePageHtml);
});

module.exports = welcomePageRouter;
