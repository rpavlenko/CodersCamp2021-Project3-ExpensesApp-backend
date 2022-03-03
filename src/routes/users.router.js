const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/users.controllers');

router.get('/login', loginUser);

module.exports = router;
