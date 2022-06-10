module.exports = ({ generateShortUrl, Joi }) => {
  return async (req, res) => {
    const url = req.body.url;
    const host = req.headers.host;
    try {
      validateInput({ url });

      const { path } = await generateShortUrl({ url });

      res.send({ url: `${host}/${path}` });
    } catch (error) {
      res.status(400).send(error.message || "Something went wrong.");
    }
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
