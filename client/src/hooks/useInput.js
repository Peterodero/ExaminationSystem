import { useState } from "react"

export default function useInput(defaultValue, edit){
	
	const [formData, setFormData] = useState(defaultValue);
	
	const [didEdit,setDidEdit] = useState(edit)
	
	const setContent = defaultValue.setContent


	function handleChange(event){
		setContent("")
		
		setFormData((prevState)=> {
			return{
				...prevState,
				[event.target.name]: event.target.value
			}
		})
		
		// setDidEdit(true);
	}

	function handleBlur(identifier){
		setDidEdit(prevEdit => ({
			...prevEdit,
			[identifier]:true
		}))
	}
	
	return{
		handleChange,
		handleBlur,
		formData,
		didEdit
	}
}