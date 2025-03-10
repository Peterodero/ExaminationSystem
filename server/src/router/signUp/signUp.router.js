const express = require('express');

const {signUp} = require('./signUp.controller');

const signUpRouter = express.Router();

signUpRouter.post('/signUp', signUp);

module.exports = signUpRouter;