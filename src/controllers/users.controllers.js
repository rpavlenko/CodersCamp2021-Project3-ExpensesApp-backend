const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
require('dotenv').config();
const Users = require('../models/User');

const loginUser = async (req, res) => {
  const userExist = await Users.findOne({ email: req.body.email });
  if(userExist && userExist.isActive){
    const passwordValidation = await bcrypt.compare(req.body.password, userExist.password);
    if(passwordValidation) res.status(200).send({ code: 1 });
    else res.status(400).send({ code: 0 });
  }else res.status(400).send({ code: 0 });
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS
  }
});

transporter.verify((err, success) => {
  if(err) console.log(err);
  else console.log('ready for messages', success);
});

const verifyEmail = ({_id, email}, res) => {
  const url = "http://localhost:3000/";

  const mailOption = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Email verification",
    html: `<p>Verify your email to complete the signup.</p><p>Click <a href=${url + 'verify/' + _id}>here</a>.</p>`
  };

  transporter.sendMail(mailOption);
};

const activeUser = async (req, res) => {
  const userExist = await Users.findById(req.body.userID);
  if(userExist){
    await Users.findByIdAndUpdate(req.body.userID, {'isActive': true});
    res.status(200).send({ code: 1 });
  }
  else res.status(400).send({ code: 0 }); 
};

const registerUser = async (req, res) => {
  const userExist = await Users.findOne({ email: req.body.email });
  if(userExist) res.status(409).send({ code: 0 });
  else {
    const userData = {
      ...req.body,
      isActive: false,
      createdAt: Date()
    };
    const user = new Users(userData);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save().then(result => {
      verifyEmail(result, res);
    });
    res.status(200).send({ code: 1 });
  }
};

module.exports = {
  loginUser,
  registerUser,
  activeUser
};
