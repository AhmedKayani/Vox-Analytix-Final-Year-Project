const mongoose = require("mongoose");

// Provides protection for passwords from hackers
const bcrypt = require("bcrypt");

// Provides validation for email
const validator = require("validator");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    img: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

// Static signup method and for saving to database
userSchema.statics.signup = async function (
  img,
  username,
  role,
  email,
  password
) {
  // Checking if the fields are empty
  if (!email || !password) {
    throw new Error("All fields must be filled.");
  }

  // Checking if the email is valid
  if (!validator.isEmail(email)) {
    throw new Error("Email is invalid");
  }

  // Checking if password is strong enough
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  }

  // Checking if the email is already in use
  const emailExists = await this.findOne({ email });
  if (emailExists) {
    throw new Error("Email already in use");
  }

  // Hasing the password for additional protection
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    img,
    username,
    role,
    email,
    password: hash,
  });

  return user;
};

// Static login method
userSchema.statics.login = async function (email, password) {
  // Checking if the fields are empty
  if (!email || !password) {
    throw new Error("All fields must be filled.");
  }

  // Checking if the email of the user exists
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("Email does not exist");
  }

  // Checking if the password is correct
  // user.password is the hashed password
  // password is the password that the user entered
  // isMatch is a boolean
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Password is incorrect");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
