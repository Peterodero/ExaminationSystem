import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function NewExam({questions}){

	const [score, setScore] = useState(null);
	const [answers, setAnswers] = useState({});


	const handleAnswerChange = (index, answer) => {
        setAnswers({ ...answers, [index]: answer });
    };

    // Submit answers for evaluation
    const submitExam = async () => {
        try {
            const response = await fetch("http://localhost:5000/evaluate-answers", {
                userResponses: answers,
            });
            setScore(response.data.score);
        } catch (error) {
            console.error("Error submitting answers:", error);
        }
    };

	console.log("Answer is " + answers)

	return(
		<main className="newExamMain">

			<h2>Answer the questions below</h2>
		{questions.length > 0 ? (

				//q represents the current question object .index represents the position of the question in the array.

				questions.map((q, index) => (        
				<div key={index} className="question-container">
					<p><strong>Q{index + 1}: {q.question}</strong></p>
					<ul className="questions">

					{/* Converts q.options (an object) into an array of [key, value] pairs. 
						key: The option label (A, B, C, D).
						value: The actual answer text.

						[["A", "var"], ["B", "let"], ["C", "const"], ["D", "All of the above"]] => after object.entries()

					*/}

					{Object.entries(q.options).map(([key, value]) => (  
						<li key={key}>
						<label>
							<input 
							type="checkbox" 
							name={`question-${index}`} 
							value={key}
							checked={answers[index] === key}
							onChange={() => handleAnswerChange(index, key)}
							/>
							{key}: {value}
						</label>
						</li>
					))}
					</ul>
				</div>
				))
			) : (
				<p>Loading questions.Please wait...</p>
			)}

		<button onClick={submitExam} className="submit-button">Submit Exam</button>

	 {score !== null && <h2>Your Score: {score}</h2>}

		</main>
	)
}
