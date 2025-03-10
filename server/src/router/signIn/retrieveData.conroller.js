// const {signIn} = require('./signIn.controller')
function retrieveData(req, res){
    return res.status(200).json("Peter");
}

module.exports = {
    retrieveData
}