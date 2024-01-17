// const User = require("../model/user")
// const jwt = require("jsonwebtoken")
// const bcrypt = require('bcrypt');
// require("dotenv").config()

// const registerUser = async (req,res) => {

//         const hash = bcrypt.hashSync(req.body.password, Number(process.env.SALT))
//         const newUser = new User({
//             ...req.body,
//             password: hash
//         })
//         await newUser.save()
//         res.status(201).send("User has been Created!")

// }

// const loginUser = async (req,res) => {
//     const user = await User.findOne({
//         username : req.body.username
//     })

//     if (!user) return res.send("User not found")

//     const isCompare = bcrypt.compareSync(req.body.password, user.password)

//     if(!isCompare) return res.send("Password incorrect!")

//     const token = jwt.sign(
//         {
//             id: user._id
//         },
//         process.env.JWT_KEY
//     )

//     const { password, ...info } = user._doc
//     res
//             .cookie("accessToken", token, {
//                 httpOnly: true,
//             })
//             .status(200)
//             .send(info)

// }

// const logoutUser = async (req,res) => {
//     res
//         .clearCookie("accessToken", {
//             sameSite: "none",
//             secure: true
//         })
//         .status(200)
//         .send("User has been logged out!")
// }

// const getUser = async (req,res) => {
//     try {
//         const users = await User.find({})
//         res.send(users)
//     } catch (error) {
//         res.send(error)
//     }
// }
// const deleteUser = async (req,res) => {

// }

// module.exports = {
//     registerUser,
//     loginUser,
//     logoutUser,
//     getUser,
//     deleteUser
// }

const User = require("../model/user");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.JWT_KEY, { expiresIn: "3d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Login mehod created in the user model.js
    const user = await User.login(email, password);

    // Create token
    const token = createToken(user._id);

    // Get the user role
    const role = user.role;

    // Get the user picture
    const img = user.img;

    // Get the user name
    const username = user.username;

    res.status(200).json({ email, username, role, img, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// sign up user
const signupUser = async (req, res) => {
  const { img, username, role, email, password } = req.body;

  try {
    // Signup mehod created in the user model.js
    const user = await User.signup(img, username, role, email, password);

    // Create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
