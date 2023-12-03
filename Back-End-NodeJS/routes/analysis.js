const express = require("express");
const { verifyToken } = require("../middleware/jwt");
const {
  createAnalysis,
  getAnalysis,
  deleteAnalysis,
} = require("../controller/analysis");

const router = express.Router();

// router.get("/",verifyToken, createAnalysis)

// For analyzing the audio file. Also saves it to the database.
router.post("/", verifyToken, createAnalysis);

// For getting the data from the database.
router.get("/", verifyToken, getAnalysis);
router.post("/:id", verifyToken, deleteAnalysis);

module.exports = router;
