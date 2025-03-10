require('dotenv').config();

const express = require('express');
const axios = require("axios");
const cors = require('cors');

const signUpRouter = require('./router/signUp/signUp.router');
const signInRouter = require('./router/signIn/signIn.router');
const genQuizRouter = require('./router/generateQuiz/genQuiz.router');
const evaluateQuizRouter = require('./router/evaluateQuiz/evaluateQuiz.router');

const app = express();

app.use(express.json());
app.use(cors({
	origin: 'http://localhost:5173' 
}));


app.use(signUpRouter);
app.use(signInRouter);
app.use(genQuizRouter)
app.use(evaluateQuizRouter);

module.exports = app;