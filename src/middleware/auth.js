const jwt = require('jsonwebtoken');

exports.authToken = (req, res, next) => {
  const token = req.header('authorization-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const secret = process.env.JWT_SECRET;

    const decoded = jwt.verify(token, secret);
    req.user = decoded;

    next();
  } catch (err) {
    res.status(400).send({ message: 'Invalid token.' });
  }
};
