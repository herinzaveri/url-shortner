module.exports = ({ getFullUrlByShortUrl, increaseCounterByShortUrl, Joi }) => {
  return async (req, res) => {
    const url = req.params.url;

    try {
      validateInput({ url });

      const [{ full }] = await Promise.all([
        getFullUrlByShortUrl({ url }),
        increaseCounterByShortUrl({ url }),
      ]);

      if (full) {
        res.redirect(full);
      } else {
        res.send("Cannot redirect as no full url found");
      }
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
