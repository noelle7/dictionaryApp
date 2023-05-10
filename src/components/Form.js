import { useState, useEffect } from "react";
import axios from "axios";

function Form() {

// API call inside handleSubmit function instead of useEffect
		axios({
			url: "https://api.dictionaryapi.dev/api/v2/entries/en/hello",
			method: "GET",
			dataResponse: "json",
		}).then((response) => {
			console.log(response);
		});


	return (
		<>
			<h2>This is a Form</h2>
			<form action="">
				<label htmlFor=""></label>
				<input type="text" name="" id="" />
				<button>Submit</button>
			</form>
		</>
	);
}

export default Form;
