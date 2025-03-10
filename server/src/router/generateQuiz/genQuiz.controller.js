const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText";
const GEMINI_API_KEY =" AIzaSyBsm7086P-LUdJ61s07sIR-v7PApUAJqjI" ;

const axios = require('axios');
// const API_KEY = process.env.GEMINI_API_KEY;

async function generateQuestions(req, res){
    try {
        const response = await axios.post(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            prompt: "Generate 5 multiple-choice exam questions with answers.",
        });

        console.log(response);

        return res.json(response.data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    generateQuestions
}