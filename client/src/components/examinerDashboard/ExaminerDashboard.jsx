import ExamsSet from "./ExamsSet";

export default function ExaminerDashboard(){
	return(
		<main className="examinerDashboard">
			<aside className="sidebar">
				<button>Exam List</button>
				<button>Set Exam</button>
				<button>Marked Scripts</button>
				<button>Logout</button>
			</aside>
			<section>
				<h1>
					Welcome to DoExam Examiner Dashboard
				</h1>
				
				<ExamsSet/>
				
				<button>Set Exams</button>
			</section>
		</main>
	)
}