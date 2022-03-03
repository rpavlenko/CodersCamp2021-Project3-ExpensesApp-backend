const Transactions = require('../models/Transactions');

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.find();
    res.json(transactions);
  } catch (err) {
    res.json({ message: err });
  }
};

const getTransaction = async (req, res) => {
  try {
    const transactions = await Transactions.findById(req.params.id);
    res.json(transactions);
  } catch (err) {
    res.json({ message: err });
  }
};


const addTransactions = async (req, res) => {
  try {
    const transaction = await Transactions(req.body);
    transaction.save();
    res.json(transaction);
  } catch (err) {
    res.json({ message: err });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transactions.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(transaction);
  } catch (err) {
    res.json({ message: err });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transactions.findByIdAndRemove(req.params.id);
    res.json(transaction);
  } catch (err) {
    res.json({ message: err });
  }
};


module.exports = {
  getTransactions,
  getTransaction,
  addTransactions,
  updateTransaction,
  deleteTransaction,
};
