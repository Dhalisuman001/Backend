const mongoose = require("mongoose");

///create schema
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter email"],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamp: true,
  }
);

//compile schema into model
const User = mongoose.model("User", userSchema);
module.exports = User;
