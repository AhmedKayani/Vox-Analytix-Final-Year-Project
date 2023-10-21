const Analysis = require("../model/analysis")
const axios = require("axios")

const createAnalysis = async (req,res) => {
    try {
        const link = req.body.url;
        
        const axiosResponse = await axios.post("http://127.0.0.1:5000/upload", { url: link });
        const formattedData = formatData(axiosResponse.data);
        console.log(formattedData)
    
        // Assuming you want to save this data in the MongoDB database
        const analysis = new Analysis({
          description: formattedData, // You need to specify a description
          file_url: link,
          owner: req.userId, // You need to specify the owner
        });
    
        await analysis.save();
        res.status(201).send(formattedData);
      } catch (error) {
        console.error(error);
        res.status(500).send("Error processing data");
      }
    
}

const formatData = (data) => {
    // Assuming that data is an array with a single object inside it
    if (Array.isArray(data) && data.length > 0) {
        const results = data[0].results;
        if (results && results.predictions && results.predictions.length > 0) {
            const predictions = results.predictions[0];
            const filteredEmotions = filterEmotions(predictions.models.prosody.grouped_predictions[0].predictions);
            return filteredEmotions;
        }
    }
    return {};
}

const filterEmotions = (predictions) => {
    const desiredEmotions = ["Anger"]; // Customize desired emotions here
    const filteredData = predictions
        .filter(prediction => {
            const matchingEmotions = prediction.emotions.filter(emotion => desiredEmotions.includes(emotion.name));
            return matchingEmotions.length > 0;
        })
        .map(prediction => {
            return {
                time: prediction.time,
                emotions: prediction.emotions.filter(emotion => desiredEmotions.includes(emotion.name)),
                text: prediction.text
            };
        });
    return filteredData;
}

const deleteAnalysis = async (req,res) => {
    try{
        const analysis = await Analysis.findOneAndDelete({ _id:req.params.id, owner: req.userId})
        if(!analysis){
            return res.send({error: "Error on deleting!"})
        }
        res.send(analysis)
    }catch(e){
        res.send(e)
    }
}
const getAnalysis = async (req,res) => {
    try{
        const analysis = await Analysis.find({owner: req.userId})
        res.send(analysis)
    }catch(e){
        res.send(e)
    }
}

module.exports = {
    createAnalysis,
    deleteAnalysis,
    getAnalysis
}