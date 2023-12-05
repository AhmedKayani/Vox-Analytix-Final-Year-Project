const mongoose = require("mongoose");

// Schema for the analysis results of the audio file.
const analysisSchema = new mongoose.Schema(
  {
    description: [
      {
        time: {
          begin: Number,
          end: Number,
        },
        emotions: [
          {
            name: String,
            score: Number,
          },
        ],
        text: String,
      },
    ],
    file_url: {
      type: String,
      require: true,
    },
    agent_name: {
      type: String,
      require: true,
    },
    reason: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    owner: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

const Analysis = mongoose.model("analysis", analysisSchema);

// Exporting the model so that it can be used in other files.
module.exports = Analysis;

// The Analysis will be created, updated and deleted in the controller. The controller will be called by the routes.
