const URLS_TABLE_NAME = "urls";

module.exports = ({ mysql }) => {
  return Object.freeze({
    getUrls,
    addUrl,
    getFullUrlByShortUrl,
    increaseCounterByShortUrl,
  });

  async function getUrls() {
    const query = `SELECT *
                      FROM ${URLS_TABLE_NAME}`;

    const values = [];

    const [result] = await mysql.query(query, values);

    return result;
  }

  async function addUrl({ full, short }) {
    const query = `INSERT 
                    INTO ${URLS_TABLE_NAME} (full, short)
                    VALUES (?,?)`;

    const values = [full, short];

    const [result] = await mysql.query(query, values);

    return result;
  }

  async function getFullUrlByShortUrl({ short }) {
    const query = `SELECT *
                    FROM ${URLS_TABLE_NAME}
                    WHERE short = ?`;

    const values = [short];

    const [result] = await mysql.query(query, values);

    return result[0];
  }

  async function increaseCounterByShortUrl({ short }) {
    const query = `UPDATE ${URLS_TABLE_NAME}
                    SET clicks = clicks + 1
                    WHERE short = ?`;

    const values = [short];

    const [result] = await mysql.query(query, values);

    return result;
  }
};
