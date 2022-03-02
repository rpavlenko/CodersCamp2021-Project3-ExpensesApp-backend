const Transactions = require('../models/Transactions');

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.find();
    res.json(transactions);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getTransactions,
};
