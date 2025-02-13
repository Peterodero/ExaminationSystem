import profileLogo from '../../assets/profile.png';
import notificationLogo from '../../assets/notification.png';
import NoExam from './NoExam';
import { useState } from 'react';
import NewExam from './NewExam';

export default function StudentDashboard(){
	
	const [startExams, setStartExams] = useState(false)
	
	function handleStartExams(){
		setStartExams(true);
	}
	
	return(
		<div>
			<header className='studentDiv'>
			<div className='studentDivDetails'>
				<button>Home</button>
				{ !startExams && <button onClick={handleStartExams}>Start Exams</button>}
			</div>
			<div className='studentInfo'>
					<img src={notificationLogo} alt='notification'/>
				<h2>Peter Odero</h2>		
				<img src={profileLogo} alt="profile"/>		
			</div>
			
		</header>
		
		{ startExams ? <NewExam/> : 	<NoExam/>}
			
			<div className='studentLogout'>
				<button>Logout</button>
			</div>
			
		</div>
		
	)
}