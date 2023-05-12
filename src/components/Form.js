import { useState, useEffect } from "react";
import axios from "axios";

const Form = ({ setWordDefinitions}) => {
	const [userInput, setUserInput] = useState("");
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		fetchWordDefinitions(userInput);

		setUserInput("");
	};
	
	const fetchWordDefinitions = async (word) => {
		const apiBaseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
		console.log(`Making request for definitions of ${word}...`);
		
		if (word === null || word === "") {
			return alert("Error: You must enter a word to fetch");
			// return error;
		}

	    try {
			const response = await fetch(apiBaseUrl + word);
			const apiData = await response.json();
			console.log(apiData);
			console.log(apiData[0].word);
			setWordDefinitions(apiData[0].word)
			displayWord(apiData);
			setError(false)
			// return apiData[0].meanings
			// 	.flatMap((m) => m.definitions)
			// 	.flatMap((d) => d.definition);
	    } catch (error) {
	        // do something with that error
	        setError(true);
	    }
	};

	const displayWord = (wordArray) => {

		wordArray.forEach( (wordObject) => {
			console.log(wordObject);
			const word = wordObject.word;
			const partOfSpeech = wordObject.meanings.partOfSpeech;

		});
	}

	// *************************

	// const getWordDefinitions = () => {
	// 	const word = document.getElementById("word").value;
	// 	if (word == null || word == "") {
	// 		return alert("Error: You must enter a word to fetch");
	// 	}
	// 	DEFINITIONS_DIV.innerHTML = "";
	// 	fetchWordDefinitions(word)
	// 		.then((defintions) => {
	// 			defintions.forEach((d) => {
	// 				DEFINITIONS_DIV.innerHTML += `<p>${d}</p>`;
	// 			});
	// 		})
	// 		.catch((_) => {
	// 			DEFINITIONS_DIV.innerHTML += `<p>Error: Could not retrieve the definition for ${word}.</p>`;
	// 		});
	// };

	return (
		<>
			<form action="" onSubmit={handleSubmit}>
				<label htmlFor="word" className="sr-only">
					Enter a word
				</label>
				<input
					type="text"
					id="word"
					placeholder="search a word"
					value={userInput}
					onChange={handleChange}
				/>
				<button>Submit</button>
				{	
					error 
					? <p className="errorMessage"> Whoops, can't be empty...</p> 
					: null
				}
			</form>
		</>
	);
};

export default Form;
