const userRouter = require("express").Router();
const { SignUpController, SignInController } = require("../controller");

//user register route --> doamin/api/v/users/register
userRouter.route("/register").post(SignUpController);

//user register route --> doamin/api/v/users/register
userRouter.route("/login").get(SignInController);

module.exports = userRouter;
