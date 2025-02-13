import QUESTIONS from '../../util/questions.js';

export default function NewExam(){
	return(
		<main className="newExamMain">
			
			{QUESTIONS.map((question)=> (
				<ul key={question.id}>
					<h2 className='questionHeading'>{question.text}</h2>
					<div className='answersDiv'>


						<ul>{QUESTIONS[0].answers.map((answer) => (
							<li key={answer} className='answerList'>
								<input type='radio' className='radiobutton' />{answer}
							</li>
						))}</ul>
					</div>
				</ul>
				))}
			
			
			<button>Submit</button>

		</main>
	)
}