const express = require('express');
const router = express.Router();
const { loginUser, registerUser, activeUser } = require('../controllers/users.controllers');

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/verify', activeUser);

module.exports = router;
