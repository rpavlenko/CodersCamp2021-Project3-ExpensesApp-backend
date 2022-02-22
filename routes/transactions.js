const express = require('express');
const router = express.Router();
const Transactions = require('../models/Transactions');

router.get('/', async (req, res) => {
  try {
    const transactions = await Transactions.find();
    res.json(transactions);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
