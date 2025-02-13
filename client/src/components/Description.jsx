import { useNavigate } from "react-router-dom"
import logo from '../assets/quiz-logo.png'


export default function Description(){
	
	const navigate = useNavigate();
	
	function navigateHandler(){
		navigate('signUp')
	}
	
	return(
		<main>
			<div className="main">
				<img src={logo} alt="logo"/>
				<h2>DoExam</h2>
			</div>
			<h1>The best examination platform</h1>
			<h2>Made for work designed to love</h2>
			<p>You can proceed with get started to register in this admirable platform to do exams for free</p>
			
			<button onClick={navigateHandler}>Get Started </button>
		</main>
	)
}