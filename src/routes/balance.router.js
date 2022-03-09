const express = require('express');
const router = express.Router();
const { getBalance } = require('../controllers/balance.controllers');

router.get('/', getBalance);

module.exports = router;
