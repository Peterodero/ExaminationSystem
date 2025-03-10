import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {useMutation} from "@tanstack/react-query";

import FormInput from "./FormInput";
import { hasMinLength, isEmail, isNotEmpty,isEqualsToOtherValue } from "../util/validation";
import useInput from "../hooks/useInput";
import { sendSignUpData } from "../util/http";



export default function SignUp(){
	
	const [content, setContent] = useState('');
	
	const navigate = useNavigate();
	
	const {handleChange: handleSignUpChange, handleBlur:handleSignUpBlur, formData, didEdit} = useInput({
		email:"",
		firstPassword:"",
		secondPassword:"",
		setContent
		
	},
	{
		email: false,
		firstPassword: false,
		secondPassword:false
	});
	
	const {mutate} = useMutation({
		mutationFn: sendSignUpData
	})
	
	
	const emailIsInvalid = didEdit.email && !isEmail(formData.email)
 	const firstPasswordIsInvalid = didEdit.firstPassword && !hasMinLength(formData.firstPassword,6) 

	const secondPasswordIsInvalid = didEdit.secondPassword && !hasMinLength(formData.secondPassword,6) 


	 let passWordNotMatch =  !isEqualsToOtherValue(formData.firstPassword, formData.secondPassword);

	 function handleSubmit(event){
		event.preventDefault(); 
		
		if(passWordNotMatch){
			setContent("Passwords do not match")

			return;
		}
		
		mutate({data:formData});
		navigate('/signIn');
		
	 }
	 
	 
	return(
		<div className="sign"> 
			<h1>Welcome to DoExam Platform</h1>
			<h2>Fill in the details to create an account</h2>
			
			<form className="loginForm" onSubmit={handleSubmit}>
				
				<FormInput 
					type="email" 
					name="email" 
					placeholder="Student/Employer email"
					className="inputs"
					id="email"
					label="Enter Username:"
					onChange={handleSignUpChange}
					onBlur={() => handleSignUpBlur('email')}
					value={formData.email}
					error={emailIsInvalid && "Please input the correct email address"}
				
				 />
				<FormInput
					type="password" 
					name="firstPassword" 
					placeholder="Enter Password"
					className="inputs"
					id="firstPassword"
					label="Enter Password:"
					onChange={handleSignUpChange}
					onBlur={() => handleSignUpBlur('firstPassword')}
					value={formData.firstPassword}
					error={firstPasswordIsInvalid && "Please input the correct password"}
					
				/>
					
				<FormInput
					type="password" 
					name="secondPassword" 
					placeholder="Confirm Password"
					className="inputs"
					id="secondPassword"
					label="Confirm Password:"
					onChange={handleSignUpChange}
					onBlur={() => handleSignUpBlur('secondPassword')}
					value={formData.secondPassword}
					error={secondPasswordIsInvalid && "Please input the correct password"}
					/>	
				
				<p className="inputError">{content}</p>
				
				<div>
					<button type="submit" className="submit">Register</button>
				</div>
				
				<p>Already have an account? <Link to="/signIn">Sign In</Link> Or Proceed <Link to="/">Home</Link></p>
			
				
			</form>
		</div>
	)
}