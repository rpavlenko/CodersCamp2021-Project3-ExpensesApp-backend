const Transactions = require('../models/Transactions');
const sendErrorResponse = require('../utils/helpers').sendErrorResponse;

const getBalance = async (req, res) => {
  const userId = req.user.id;
  try {
    const transactions = await Transactions.find({ userID: userId });

    const expenses = transactions
      .filter((item) => item.type === 'Wydatek')
      .reduce((acc, item) => (acc += +item.amount), 0);

    const incomes = transactions
      .filter((item) => item.type === 'Przychód')
      .reduce((acc, item) => (acc += +item.amount), 0);

    const total = incomes - expenses;

    res.json({
      total: total,
      incomes: incomes,
      expenses: expenses,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  getBalance,
};
