const mysql2 = require("mysql2");
const config = require("../config");

// create mysql connection
const mysqlDB = mysql2.createPool({
  host: config.mysql.host,
  user: config.mysql.username,
  password: config.mysql.password,
  port: config.mysql.port,
  database: config.mysql.dbName,
});
const mysql = mysqlDB.promise();

console.log("Connected to mysql");

// Make all DBs
const makeUrlsDb = require("./urls.db");
const urlsDb = makeUrlsDb({ mysql });

// Export all DBs
module.exports = { urlsDb };
