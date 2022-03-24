const Transactions = require('../models/Transactions');
const sendErrorResponse = require('../utils/helpers').sendErrorResponse;

const getTransactions = async (req, res) => {
  const userId = req.user.id;

  try {
    const transactions = await Transactions.find({ userID: userId });
    res.json(transactions);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getTransaction = async (req, res) => {
  try {
    const transactions = await Transactions.findById(req.params.id);

    res.json(transactions);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const addTransactions = async (req, res) => {
  try {
    const transaction = await Transactions(req.body);
    transaction.save();
    res.json(transaction);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transactions.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.json(transaction);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transactions.findByIdAndRemove(req.params.id);
    res.json(transaction);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  getTransactions,
  getTransaction,
  addTransactions,
  updateTransaction,
  deleteTransaction,
};
