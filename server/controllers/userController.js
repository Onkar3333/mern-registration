const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../database/db");

const registerUser = async (req, res) => {
  const { firstName, lastName, mobile, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const sql = "INSERT INTO users (firstName, lastName, mobile, password) VALUES (?, ?, ?, ?)";
  const values = [firstName, lastName, mobile, hashedPassword];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).send("User registered successfully");
    }
  });
};

const loginUser = (req, res) => {
  const { mobile, password } = req.body;
  const sql = "SELECT * FROM users WHERE mobile = ?";
  db.query(sql, [mobile], async (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
      res.status(401).send("Invalid credentials");
    } else {
      const token = jwt.sign({ id: results[0].id }, "SECRET_KEY", { expiresIn: "1h" });
      res.status(200).send({ success: true, message: "Login successful", token });
    }
  });
};

module.exports = { registerUser, loginUser };
