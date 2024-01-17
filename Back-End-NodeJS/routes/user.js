// const express = require("express")
// const { getUser, deleteUser, registerUser, loginUser, logoutUser} = require("../controller/user")

// const router = express.Router()

// router.get("/", getUser)
// router.delete("/:id", deleteUser)
// router.post("/register", registerUser)
// router.post("/login", loginUser)
// router.post("/logout", logoutUser)

// module.exports = router

const express = require("express");

// Controller functions
const { loginUser, signupUser } = require("../controller/user");

const router = express.Router();

// Login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

module.exports = router;
