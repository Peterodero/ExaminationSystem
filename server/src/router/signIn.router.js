const express = require('express');
const { signIn } = require('./signIn.controller');

const signInRouter = express.Router();

signInRouter.post('/signIn', signIn)

module.exports = signInRouter;