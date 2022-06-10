const express = require("express");
const router = express.Router();

const controllers = require("./controllers");

router.get("/", (req, res) => {
  res.send("<h1>Welcome to Url Shortner</h1>");
});

router.get("/urls", controllers.getUrlsAction);

router.post("/shorten", controllers.generateShortUrlAction);

router.get("/:url", controllers.redirectAction);

module.exports = router;
