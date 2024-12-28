const bcrypt = require('bcryptjs');
const db = require('../database/db');

const registerUser = (req, res) => {
    const { firstName, lastName, mobileNumber, password } = req.body;

    // Validation check (to prevent empty data)
    if (!firstName || !lastName || !mobileNumber || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ message: 'Error hashing password' });
        }

        // Insert into database
        const query = 'INSERT INTO users (first_name, last_name, mobile_number, password) VALUES (?, ?, ?, ?)';
        db.query(query, [firstName, lastName, mobileNumber, hashedPassword], (err, results) => {
            if (err) {
                console.error(err);  // This will give us more details on the error
                return res.status(500).json({ message: 'Failed to register user' });
            }

            res.status(201).json({ message: 'User registered successfully', userId: results.insertId });
        });
    });
};

module.exports = { registerUser };
