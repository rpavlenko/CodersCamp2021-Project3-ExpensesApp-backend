const express = require('express');
const router = express.Router();
const {
  loginUser,
  registerUser,
  activeUser,
  resetPassword,
  resetPasswordById,
  updatePassword,
} = require('../controllers/users.controllers');

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/verify', activeUser);
router.post('/reset-password', resetPassword);
router.patch('/reset-password', updatePassword);
router.post('/reset-password/:id', resetPasswordById);

module.exports = router;
