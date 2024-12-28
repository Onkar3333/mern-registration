const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // your MySQL username
  password: 'Onkar', // your MySQL password
  database: 'registrationDB', // your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database');
});
module.exports = db;
