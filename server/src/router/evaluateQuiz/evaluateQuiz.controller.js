const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText";
const GEMINI_API_KEY = "AIzaSyBsm7086P-LUdJ61s07sIR-v7PApUAJqjI ";
// const API_KEY = process.env.GEMINI_API_KEY;

async function evaluateAnswers(req, res){
    try {
        const { userResponses } = req.body;

        const response = await axios.post(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            prompt: `Evaluate these answers and return a score: ${JSON.stringify(userResponses)}`,
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    evaluateAnswers
}