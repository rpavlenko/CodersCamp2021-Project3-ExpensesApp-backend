const router = require('express').Router();
const { getBalance } = require('../controllers/balance.controllers');

router.get('/', getBalance);

module.exports = router;
