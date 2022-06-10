module.exports = ({ getUrls, Joi }) => {
  return async (req, res) => {
    try {
      const urls = await getUrls();

      res.send(urls);
    } catch (error) {
      res.status(400).send(error.message || "Something went wrong.");
    }
  };
};
