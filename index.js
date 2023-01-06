require("./passport");
const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRouter = require("./routes/UserRoute");
const DbConnect = require("./config/Db");
const { errorHandler, notFound } = require("./middleware/errorHandler");
const cookieSession = require("cookie-session");
const passport = require("passport");
const PORT = process.env.PORT || 8080;
const app = express();
DbConnect();

//social
app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://login-register-mern-social.netlify.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// user route middleware
app.use(`/api/users`, userRouter);
app.use(`/auth`, authRoute);

//error handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listining at http://localhost:${PORT}`);
});
