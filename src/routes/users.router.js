const router = require('express').Router();
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
router.patch('/update-password', updatePassword);
router.post('/reset-password', resetPassword);
router.post('/reset-password/:id', resetPasswordById);

module.exports = router;
