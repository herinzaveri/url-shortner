module.exports = ({ urlsDb, Joi }) => {
  return async ({ url }) => {
    validateInput({ url });

    return await urlsDb.increaseCounterByShortUrl({ short: url });
  };

  function validateInput({ url }) {
    const schema = Joi.object({
      url: Joi.string().required(),
    });
    const { error } = schema.validate({ url });
    if (error) {
      throw new Error(error.message);
    }
  }
};
