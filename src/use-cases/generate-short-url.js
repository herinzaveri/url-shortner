module.exports = ({ shortid, urlsDb, Joi }) => {
  return async ({ url }) => {
    validateInput({ url });

    const path = shortid.generate();

    await urlsDb.addUrl({ full: url, short: path });

    return { path };
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
