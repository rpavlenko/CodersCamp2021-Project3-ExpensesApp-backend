const sendErrorResponse = (res, error) => {
  return res.status(400).json({ message: error });
};

module.exports = {
  sendErrorResponse,
};
