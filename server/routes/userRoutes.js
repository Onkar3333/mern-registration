const express = require('express');
const { registerUser } = require('../controllers/userController');

const router = express.Router();

// POST request for registering a user
router.post('/', registerUser);

module.exports = router;
