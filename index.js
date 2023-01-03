const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/UserRoute");
const DbConnect = require("./config/Db");
const { errorHandler, notFound } = require("./middleware/errorHandler");
const PORT = process.env.PORT || 8080;
const app = express();
DbConnect();

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// user route middleware
app.use(`/api/users`, userRouter);

//error handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listining at http://localhost:${PORT}`);
});
