const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Onkar",
  database: "registrationDB",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = db;
