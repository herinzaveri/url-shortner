const Joi = require("joi");
const shortid = require("shortid");

// import all DBs
const DB = require("../data-access");

// import all use cases
const makeGetUrls = require("./get-urls");
const makeGenerateShortUrl = require("./generate-short-url");
const makeGetFullUrlByShortUrl = require("./get-full-url-by-short-url");
const makeIncreaseCounterByShortUrl = require("./increase-counter-by-short-url");

// make all use cases
const getUrls = makeGetUrls({
  urlsDb: DB.urlsDb,
  Joi,
});
const generateShortUrl = makeGenerateShortUrl({
  shortid,
  urlsDb: DB.urlsDb,
  Joi,
});
const getFullUrlByShortUrl = makeGetFullUrlByShortUrl({
  urlsDb: DB.urlsDb,
  Joi,
});
const increaseCounterByShortUrl = makeIncreaseCounterByShortUrl({
  urlsDb: DB.urlsDb,
  Joi,
});

// export all use cases
module.exports = {
  getUrls,
  generateShortUrl,
  getFullUrlByShortUrl,
  increaseCounterByShortUrl,
};
