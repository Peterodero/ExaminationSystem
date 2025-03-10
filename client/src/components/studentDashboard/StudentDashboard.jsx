
import profileLogo from '../../assets/profile.png';
import notificationLogo from '../../assets/notification.png';
import NoExam from './NoExam';
import { useState } from 'react';
import NewExam from './NewExam';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSignInData } from '../../util/http';

export default function StudentDashboard(){

		
	const [questions, setQuestions] = useState([]);
	
	
	const [startExams, setStartExams] = useState(false);
	const navigate = useNavigate();

	const {data} = useQuery({
		queryKey:['signIn'],
		queryFn: getSignInData
	})
	

	function handleNavigate(){
		navigate('/')
	}

	const GEMINI_API_KEY =" AIzaSyBsm7086P-LUdJ61s07sIR-v7PApUAJqjI"
	
	const handleStartExams = async () => {
		setStartExams(true);

		try {
			// const response = await axios.post("http://localhost:5000/generate-questions");
			// console.log(response);
			// setQuestions(response.data.questions || []);

			const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					contents: [
						{ parts: [{ text: "Generate 10 different questions on JavaScript. Each question should have four options (A, B, C, D) with one correct answer. Format the response as JSON.Please be consistent every time I ask you to generate questions" }] }
					]
				})
			});
		
			const data = await response.json();
			console.log(data);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			// console.log(data.questions[0].question)

			if (data.candidates && data.candidates.length > 0) {
				let textResponse = data.candidates[0].content.parts[0].text.trim();
				textResponse = textResponse.replace(/```json/g, "").replace(/```/g, "").trim();


				if (!textResponse.startsWith("{") && !textResponse.startsWith("[")) {
					throw new Error("Invalid JSON format: Response does not start with '{' or '['");
				}

				const questions = JSON.parse(textResponse); // Convert JSON string to object

				const newQuestions = questions.questions

				console.log("Extracted Questions:", questions);


				
				
				// console.log(newQuestions);

		
			setQuestions(newQuestions || []);


				return newQuestions;
			} else {
				console.error("No valid response from API");
			}

		} catch (error) {
			console.error("Error fetching questions:", error);
		}
	};


	
	return(

		<div>
			<header className='studentDiv'>
			<div className='studentDivDetails'>
				<button onClick={handleNavigate}>Home</button>
				{ !startExams && <button onClick={handleStartExams}>Start Exams</button>}
			</div>
			<div className='studentInfo'>
					<img src={notificationLogo} alt='notification'/>
				<h2>{data}</h2>		
				<img src={profileLogo} alt="profile"/>		
			</div>
			
		</header>
		
		{ startExams ? <NewExam questions={questions}/> : 	<NoExam/>}
			
			<div className='studentLogout'>
				<button>Logout</button>
			</div>
			
		</div>
		
	)
}