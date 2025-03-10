// eslint-disable-next-line react/prop-types
export default function FormInput({label,id,type,name,placeholder,className,onChange,onBlur, value, error}){
	return(
	
		<div>
			<label htmlFor={id}>{label} </label>
			<input
				id={id}
				className={className}
				placeholder={placeholder}
				type={type}
				name={name} 
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				required/>
				
				<p className="inputError">{error}</p>
		</div>
				
	
		
	)
}