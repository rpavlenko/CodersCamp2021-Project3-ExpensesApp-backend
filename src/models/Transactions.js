const mongoose = require('mongoose');

const TransactionsSchema = mongoose.Schema({
  userID: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  },
  categoryID: {
    type: mongoose.SchemaTypes.ObjectId
  },
  name: {
    type: String,
    required: true
  },
  amout: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Transactions', TransactionsSchema);
