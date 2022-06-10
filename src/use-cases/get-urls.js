module.exports = ({ urlsDb, Joi }) => {
  return async () => {
    return await urlsDb.getUrls();
  };
};
