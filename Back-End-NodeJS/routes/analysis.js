const express = require("express");
const { verifyToken } = require("../middleware/jwt");
const {
  createAnalysis,
  saveAnalysis,
  getAnalysis,
  deleteAnalysis,
} = require("../controller/analysis");

const router = express.Router();

// router.get("/",verifyToken, createAnalysis)

// For analyzing the audio file. Also saves it to the database.
router.post("/", verifyToken, createAnalysis);

// For saving the analysis to the database.
router.post("/save", verifyToken, saveAnalysis);

// For getting the data from the database.
router.get("/dataAnalysis", verifyToken, getAnalysis);

// For deleting the analysis from the database.
router.post("/:id", verifyToken, deleteAnalysis);

module.exports = router;
