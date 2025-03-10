const { addDetails } = require("../../models/signUp.models");

function signUp(req, res){
	const signUpDetails = req.body;
	
	console.log(signUpDetails);
	addDetails(signUpDetails)
}

module.exports = {
	signUp
}
