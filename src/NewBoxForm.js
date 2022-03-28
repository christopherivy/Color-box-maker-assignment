import React, { useState } from "react";
import { v4 as uuid } from 'uuid';


const NewBoxForm = ({ createBox }) => {
	const [ formData, setFormData ] = useState({
		height: "",
		width: "",
		backgroundColor: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(formData => ({
			...formData,
			[ name ]: value
		}));
	};

	const getInput = (e) => {
		e.preventDefault();
		createBox({ ...formData, id: uuid() });
		setFormData({ height: "", width: "", backgroundColor: "" });
	};

	return (
		<div>
			<form onSubmit={ getInput } >
				<label htmlFor="height">Add Height</label>
				<input
					onChange={ handleChange }
					type="text"
					name="height"
					value={ formData.height }
					id="height"
				/>
				<label htmlFor="height">Add Width</label>
				<input
					onChange={ handleChange }
					type="text"
					name="width"
					value={ formData.width }
					id="width"
				/>
				<label htmlFor="height">Background Color</label>
				<input
					onChange={ handleChange }
					type="text"
					name="backgroundColor"
					value={ formData.backgroundColor }
					id="backgroundColor"
				/>
				<button id="newBoxButton" >Add your new Box!!</button>
			</form>
		</div>
	);
};

export default NewBoxForm;