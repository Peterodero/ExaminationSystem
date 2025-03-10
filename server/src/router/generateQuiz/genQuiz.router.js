const express = require('express');
const { generateQuestions } = require('./genQuiz.controller');

const genQuizRouter = express.Router();

genQuizRouter.get("/questions", generateQuestions)

module.exports = genQuizRouter; 