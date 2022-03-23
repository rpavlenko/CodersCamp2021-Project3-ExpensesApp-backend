const mongoose = require('mongoose');

const TransactionsSchema = mongoose.Schema({
  userID: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Transactions', TransactionsSchema);
