import { Link, useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import { useState } from "react";

import { isEmail, /*isNotEmpty,*/ hasMinLength } from '../util/validation.js';
import useInput from "../hooks/useInput.js";
import { useMutation } from "@tanstack/react-query";
import { sendSignInData } from "../util/http.js";


export default function Login() {

	const [content, setContent] = useState('');

	const navigate = useNavigate();

	const { mutate } = useMutation({
		mutationFn: sendSignInData
	})

	const { handleChange: handleLoginChange, handleBlur: handleLoginBlur, formData, didEdit } = useInput({
		email: "",
		password: "",
		setContent
	},
		{
			email: false,
			password: false
		}
	)

	const emailIsInvalid = !isEmail(formData.email) && didEdit.email //isNotEmpty(formData.email)
	const passwordIsInvalid = !hasMinLength(formData.password, 6) && didEdit.password;

	function handleSubmitLogin(event) {
		event.preventDefault();

		if (emailIsInvalid || passwordIsInvalid) {
			setContent("Invalid login details")
			return;
		}
		const trial = formData.email;
		const trial2 = trial.split('@');
		console.log(trial2[0]);

		mutate(formData)
		console.log(formData)

		navigate('/student');
	}

	return (
		<div className="sign">
			<h1>Hi, Welcome back to DoExam Platform</h1>
			<h2>Login to Continue</h2>
			<p>Please fill in your details to log in</p>
			<form className="loginForm" onSubmit={handleSubmitLogin}>

				<FormInput
					type="email"
					name="email"
					placeholder="Student/Employer email"
					className="inputs"
					id="email"
					label="Username:"
					onChange={handleLoginChange}
					onBlur={() => handleLoginBlur('email')}
					value={formData.email}
					error={emailIsInvalid && 'Please enter a valid email address'}
				
				/>
				<FormInput
					type="password"
					name="password"
					placeholder="Password"
					className="inputs"
					id="password"
					label="Password:"
					onChange={handleLoginChange}
					onBlur={() => handleLoginBlur('password')}
					value={formData.password}
					error={passwordIsInvalid && 'Please enter a valid password'}
				
				/>

				<p className="inputError">{content}</p>

				<div>
					<button  className="submit">Sign In</button>
				</div>


			</form>

			<p>Do not have an account?  <Link to='/signUp'> Sign Up</Link> Or Proceed <Link to="/">Home</Link></p>
		</div>
	)
}