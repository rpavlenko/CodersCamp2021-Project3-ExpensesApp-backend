const router = require('express').Router();
const { authToken } = require('../middleware/auth');

router.use('/api/v1/balance', authToken, require('./balance.router'));
router.use('/api/v1/categories', authToken, require('./categories.router'));
router.use('/api/v1/transactions', authToken, require('./transactions.router'));
router.use('/api/v1/users', require('./users.router'));

module.exports = router;
