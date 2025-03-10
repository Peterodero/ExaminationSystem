const express = require('express');
const { evaluateAnswers } = require('./evaluateQuiz.controller');

const evaluateQuizRouter = express.Router();

evaluateQuizRouter.get("/evaluate-answers", evaluateAnswers)

module.exports = evaluateQuizRouter;