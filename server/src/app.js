const express = require('express');

const cors = require('cors');

const signUpRouter = require('./router/signUp.router');
const signInRouter = require('./router/signIn.router');

const app = express();

app.use(cors({
	origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use(signUpRouter);
app.use(signInRouter);

module.exports = app;