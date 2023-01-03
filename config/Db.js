const mongoose = require("mongoose");

const DbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URl ||
        "mongodb+srv://Suman:Suman001@cluster0.pcpvei3.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("Db connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DbConnection;
