function signIn(req,res){
	const loginDetails = req.body

	const name = loginDetails.email;
	console.log(loginDetails)
	
	const finalName = name.split('@');
	
	const username = finalName[0];
	console.log(typeof username);

	return res.status(200).json(username)
	
	
}

module.exports = {
	signIn,
}