import { Link } from "react-router-dom";

export default function NoExam(){
	return(
		<main className='noExamMain'>
				<h1>You do not have any current exam ongoing</h1>
				<p>Proceed to <Link>Upcoming Exam</Link> to view your next exams</p>
				<h2>OR</h2>
				<p>Proceed to <Link>Previos Exams</Link> to view your last exams</p>
				<p>Click <Link to={'/'}>here</Link> to proceed to homepage</p>
		</main>
	)
}