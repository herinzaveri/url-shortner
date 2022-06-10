const Joi = require("joi");

// import use cases
const useCases = require("../use-cases");

// import actions
const makeGetUrlsAction = require("./get-urls.controller");
const makeGenerateShortUrlAction = require("./generate-short-url.controller");
const makeRedirectAction = require("./redirect.controller");

// make actions
const getUrlsAction = makeGetUrlsAction({
  getUrls: useCases.getUrls,
  Joi,
});
const generateShortUrlAction = makeGenerateShortUrlAction({
  generateShortUrl: useCases.generateShortUrl,
  Joi,
});
const redirectAction = makeRedirectAction({
  getFullUrlByShortUrl: useCases.getFullUrlByShortUrl,
  increaseCounterByShortUrl: useCases.increaseCounterByShortUrl,
  Joi,
});

// export all actions
module.exports = {
  getUrlsAction,
  generateShortUrlAction,
  redirectAction,
};
