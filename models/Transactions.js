const mongoose = require('mongoose');

const TransactionsSchema = mongoose.Schema({});

module.exports = mongoose.model('Transactions', TransactionsSchema);
