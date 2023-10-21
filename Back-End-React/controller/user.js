const User = require("../model/user")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
require("dotenv").config()

const registerUser = async (req,res) => {
    
        const hash = bcrypt.hashSync(req.body.password, Number(process.env.SALT))
        const newUser = new User({
            ...req.body,
            password: hash
        })
        await newUser.save()
        res.status(201).send("User has been Created!")
    
}

const loginUser = async (req,res) => {
    const user = await User.findOne({
        username : req.body.username
    })

    if (!user) return res.send("User not found")

    const isCompare = bcrypt.compareSync(req.body.password, user.password)

    if(!isCompare) return res.send("Password incorrect!")

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_KEY
    )

    const { password, ...info } = user._doc
    res
            .cookie("accessToken", token, {
                httpOnly: true,
            })
            .status(200)
            .send(info)

}

const logoutUser = async (req,res) => {
    res
        .clearCookie("accessToken", {
            sameSite: "none",
            secure: true
        })
        .status(200)
        .send("User has been logged out!")
}

const getUser = async (req,res) => {
    try {
        const users = await User.find({})
        res.send(users)   
    } catch (error) {
        res.send(error)
    }
}
const deleteUser = async (req,res) => {
    
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getUser,
    deleteUser
}
