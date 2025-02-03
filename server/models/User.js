const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
    unique: true
  },
  email:{
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    lowercase: true
  } ,
  password:{
    type: String,
    required: [true, "Password is required"],
    trim: true,
    unique: true
  } ,
  role:{
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
