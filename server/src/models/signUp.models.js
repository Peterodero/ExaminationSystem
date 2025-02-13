const details  = new Map();

let id = 100

function addDetails(detail){
	id++
	details.set(id, Object.assign(detail, {
		id:id,
		success:true
	}))
	console.log(details)
}

module.exports = {
	addDetails,
	details
}