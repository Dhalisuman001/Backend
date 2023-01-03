const User = require("../model/UserModel");
const expressAsyncHandler = require("express-async-handler");

//---------------------------------
//Login methods
//--------------------------------

const login = expressAsyncHandler(async (req, res) => {
  // if user is found
  const user = await User.findOne({ email: req?.body?.email });

  // check if password is valid
  if (user && (await user.password) === req.body.password) {
    res.json(user);
  } else {
    res.status(401);
    throw new Error(`Invalid password`);
  }
});

module.exports = login;
