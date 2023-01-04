const User = require("../model/UserModel");
const expressAsyncHandler = require("express-async-handler");

//---------------------------------
//Login methods
//--------------------------------

const login = expressAsyncHandler(async (req, res) => {
  // if user is found
  const user = await User.findOne({ email: req?.body?.email });
  console.log(user);
  if (!user) throw new Error("Account does not exist");

  // check if password is valid
  if (user && user.password === req?.body?.password) {
    res.json({ email: user?.email, password: user?.password });
  } else {
    res.status(401);
    throw new Error(`Invalid password`);
  }
});

module.exports = login;
