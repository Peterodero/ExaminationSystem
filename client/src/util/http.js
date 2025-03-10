const API_URL = 'http://localhost:5000'

export async function sendSignUpData(data){
	const response = await fetch(`${API_URL}/signUp`, {
		method:'POST',
		headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify(data)
	})
	
	const resData = await response.json();
	
	return resData;
}


export async function sendSignInData(data) {
	const response = await fetch(`${API_URL}/signIn`, {
		method:'POST',
		headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify(data)
	})
	
	const resData = await response.json();

	console.log(resData)
	
	return resData;
}

export async function getSignInData() {
	const response = await fetch(`${API_URL}/retrieve`)

	if (!response.ok) {
		const error = new Error('An error occurred while fetching the events');
		error.code = response.status;
		error.info = await response.json();
		throw error;
	  }
	  
	const data = await response.json();
	return data; 
	  
}