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
	
	return resData;
}