const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/api/users", userRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

app.post("/register", async (req, res) => {
    const { firstName, lastName, mobileNumber, password } = req.body;
  
    if (!firstName || !lastName || !mobileNumber || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
      const query = `INSERT INTO users (first_name, last_name, mobile_number, password, created_date, updated_date) 
                     VALUES (?, ?, ?, ?, NOW(), NOW())`;
  
      db.query(query, [firstName, lastName, mobileNumber, hashedPassword], (err, result) => {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({ message: "Database error." });
        }
        res.status(201).json({ message: "User registered successfully." });
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  });
  