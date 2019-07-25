const mongoose = require("mongoose"); // import mongoose
const Schema = mongoose.Schema; // mongoose schema

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trin: true,
      minlength: 3
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User; // export file
