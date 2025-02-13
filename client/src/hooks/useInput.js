import { useState } from "react"

export default function useInput(defaultValue){
	
	const [formData, setFormData] = useState(defaultValue);
	
	const [didEdit,setDidEdit] = useState(false)
	
	const setContent = defaultValue.setContent


	function handleChange(event){
		setContent("")
		
		setFormData((prevState)=> {
			return{
				...prevState,
				[event.target.name]: event.target.value
			}
		})
		
		setDidEdit(true);
	}
	
	return{
		handleChange,
		formData,
		didEdit
	}
}