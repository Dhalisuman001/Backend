const User = require("../model/UserModel");
const expressAsyncHandler = require("express-async-handler");
//----------------------------------------------------------------
//registered methods
///----------------------------------------------------------------
const signup = expressAsyncHandler(async (req, res) => {
  // check user exist or not
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist) throw new Error("Email already exists");
  try {
    // register user
    const user = await User.create({
      password: req?.body?.password,
      email: req?.body?.email,
    });
    res.json({ email: user?.email, password: user?.password });
  } catch (error) {
    res.json(error);
    console.log(error);
  }
});

module.exports = signup;
