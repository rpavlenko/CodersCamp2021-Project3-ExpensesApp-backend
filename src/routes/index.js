const router = require('express').Router();
const { authToken } = require('./middleware/auth');

router.use('/balance', authToken, require('./balance.router'));
router.use('/categories', authToken, require('./categories.router'));
router.use('/transactions', authToken, require('./transactions.router'));
router.use('/users', require('./users.router'));

module.exports = router;
