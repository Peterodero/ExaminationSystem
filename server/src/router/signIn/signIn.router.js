const express = require('express');
const { signIn } = require('./signIn.controller'); 
const { retrieveData } = require('./retrieveData.conroller');

const signInRouter = express.Router();

signInRouter.post('/signIn', signIn)
signInRouter.get('/retrieve', retrieveData)

module.exports = signInRouter;