const mongoose = require("mongoose")

const analysisSchema = new mongoose.Schema( {
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
    file_url : {
        type: String,
        require: true
    },
    owner: {
        type: String,
        require: false,
        
    }
},{ timestamps: true })



const Analysis = mongoose.model("analysis",analysisSchema)

module.exports = Analysis