const bcrypt = require('bcrypt');
const Users = require('../models/User');

const loginUser = async (req, res) => {
  const userExist = await Users.findOne({ email: req.body.email });
  if(userExist){
    const passwordValidation = await bcrypt.compare(req.body.password, userExist.password);
    if(passwordValidation) res.status(200).send({ code: 1 });
  }else res.status(400).send({ code: 0 });
};

module.exports = {
  loginUser,
};
