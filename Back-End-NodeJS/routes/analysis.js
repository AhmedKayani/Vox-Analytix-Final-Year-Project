const express = require("express")
const { verifyToken } = require("../middleware/jwt")
const { createAnalysis, getAnalysis, deleteAnalysis } = require("../controller/analysis")

const router = express.Router()

// router.get("/",verifyToken, createAnalysis)
router.post("/", verifyToken,createAnalysis)
router.get("/",verifyToken, getAnalysis)
router.post("/:id",verifyToken, deleteAnalysis)

module.exports = router