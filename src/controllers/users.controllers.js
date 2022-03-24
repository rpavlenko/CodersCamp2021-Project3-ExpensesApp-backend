const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
require('dotenv').config();
const Users = require('../models/User');
const jwt = require('jsonwebtoken');

const ObjectId = require('mongoose').Types.ObjectId;

const loginUser = async (req, res) => {
  const userExist = await Users.findOne({ email: req.body.email });
  if (userExist && userExist.isActive) {
    const passwordValidation = await bcrypt.compare(
      req.body.password,
      userExist.password,
    );
    if (passwordValidation) {
      const jwtToken = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET);
      console.log(jwtToken);
      res.status(200).send({ code: 1, userExist, token: jwtToken });
    } else res.status(400).send({ code: 0 });
  } else res.status(400).send({ code: 0 });
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

transporter.verify((err, success) => {
  if (err) console.log(err);
  else console.log('ready for messages', success);
});

const verifyEmail = ({ _id, email }, res) => {
  const url = process.env.FRONT_URL;

  const mailOption = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: 'Email verification',
    html: `<p>Verify your email to complete the signup.</p><p>Click <a href=${
      url + 'verify/' + _id
    }>here</a>.</p>`,
  };

  transporter.sendMail(mailOption);
};

const isValidObjectId = (id) => {
  if (ObjectId.isValid(id)) {
    if (String(new ObjectId(id)) === id) return true;
    else return false;
  } else return false;
};

const activeUser = async (req, res) => {
  if (!isValidObjectId(req.body.userID))
    return res.status(400).send({ code: 0 });

  const userExist = await Users.findById(req.body.userID);
  if (userExist) {
    await Users.findByIdAndUpdate(req.body.userID, { isActive: true });
    res.status(200).send({ code: 1 });
  } else res.status(400).send({ code: 0 });
};

const registerUser = async (req, res) => {
  const userExist = await Users.findOne({ email: req.body.email });
  if (userExist) res.status(409).send({ code: 0 });
  else {
    const userData = {
      ...req.body,
      isActive: false,
      createdAt: Date(),
    };
    const user = new Users(userData);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save().then((result) => {
      verifyEmail(result, res);
    });
    res.status(200).send({
      code: 1,
      token: jwt.sign({ id: user._id }, process.env.JWT_SECRET),
    });
  }
};

const sendResetPasswordEmail = ({ _id, email }, res) => {
  const url = 'http://localhost:3000/';

  const mailOption = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: 'Password reset',
    html: `<p>Click to reset password</p><p>Click <a href=${
      url + 'reset-password/' + _id
    }>here</a>.</p>`,
  };

  transporter.sendMail(mailOption);
};

const resetPassword = async (req, res) => {
  const email = req.body.email;
  const userExist = await Users.findOne({ email });

  if (userExist && userExist.isActive) {
    const user = {
      _id: userExist._id,
      email: email,
    };

    await sendResetPasswordEmail(user, res);
    res.status(200).send({ code: 1 });
  } else {
    res.status(400).send({ code: 0 });
  }
};

const resetPasswordById = async (req, res) => {
  if (!isValidObjectId(req.body.userID))
    return res.status(400).send({ code: 0 });

  const user = await Users.findById(req.params.id);
  if (!user) return res.status(400).send('Invalid link or expired');

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  await user.save();
  res.status(200).send('Password reset sucessfully.');
};

const updatePassword = async (req, res) => {
  if (!isValidObjectId(req.body.userID))
    return res.status(400).send({ code: 0 });

  const user = await Users.findById(req.body.userID);
  if (!user) return res.status(400).send('User not exists');

  let isSamePassword, isCurrentPasswordCorrect;
  if (req.body.newPassword) {
    isSamePassword = await bcrypt.compare(req.body.newPassword, user.password);
  }

  if (req.body.currentPassword) {
    isCurrentPasswordCorrect = await bcrypt.compare(
      req.body.currentPassword,
      user.password,
    );
  }

  if (!isCurrentPasswordCorrect && isSamePassword) {
    res.status(400).send({ code: 0, msg: 'Enter correct password' });
  } else if (!isSamePassword) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.newPassword, salt);

    await user.save();
    res.status(200).send({ code: 1, msg: 'Password changed sucessfully.' });
  } else {
    res
      .status(400)
      .send('It seems you have entered same password as old password');
  }
};

module.exports = {
  loginUser,
  registerUser,
  activeUser,
  resetPassword,
  resetPasswordById,
  updatePassword,
};
