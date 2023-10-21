const express = require("express")
const { getUser, deleteUser, registerUser, loginUser, logoutUser} = require("../controller/user")

const router = express.Router()

router.get("/", getUser)
router.delete("/:id", deleteUser)
router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)

module.exports = router