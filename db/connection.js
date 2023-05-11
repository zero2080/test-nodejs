const mysql = require("mysql2");
require("dotenv").config();

let pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

module.exports = (callback) => {
  pool.getConnection((err, conn) => {
    if (!err) {
      callback(conn);
    } else {
      console.error(err);
    }
  });
};
