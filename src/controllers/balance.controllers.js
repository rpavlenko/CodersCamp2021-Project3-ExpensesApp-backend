const Transactions = require('../models/Transactions');
const sendErrorResponse = require('../utils/helpers').sendErrorResponse;

const getBalance = async (req, res) => {
  const userId = req.userId;
  try {
    const transactions = await Transactions.find({ userID: userId });
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    res.json(total);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  getBalance,
};
