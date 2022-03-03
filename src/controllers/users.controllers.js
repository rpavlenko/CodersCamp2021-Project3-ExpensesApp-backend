const bcrypt = require('bcrypt');
const Users = require('../models/User');

const loginUser = async (req, res) => {
  const userExist = await Users.findOne({ email: req.body.email });
  if(userExist){
    const passwordValidation = await bcrypt.compare(req.body.password, userExist.password);
    if(passwordValidation) res.status(200).send({ code: 1 });
    else res.status(400).send({ code: 0 });
  }else res.status(400).send({ code: 0 });
};

const registerUser = async (req, res) => {
  const userExist = await Users.findOne({ email: req.body.email });
  if(userExist) res.status(409).send({ code: 0 });
  else {
    const userData = {
      ...req.body,
      isActive: true,
      createdAt: Date()
    };
    const user = new Users(userData);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.status(200).send({ code: 1 });
  }
};

module.exports = {
  loginUser,
  registerUser
};
