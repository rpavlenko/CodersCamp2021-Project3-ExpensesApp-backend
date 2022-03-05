const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/users.controllers');
const { registerUser } = require('../controllers/users.controllers');

router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;
