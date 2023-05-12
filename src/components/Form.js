import { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
	const [userInput, setUserInput] = useState("");
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// error handling here

		// // API call inside handleSubmit function instead of useEffect
		// axios({
		// 	url: "https://api.dictionaryapi.dev/api/v2/entries/en/hello",
		// 	// method: "GET",
		// 	// dataResponse: "json",
		// }).then((response) => {
		// 	console.log(response);
		// });

		fetchWordDefinitions(userInput);

		setUserInput("");
	};

	const apiBaseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
	// const DEFINITIONS_DIV = document.getElementById("definitions");

	const fetchWordDefinitions = async (word) => {
		console.log(`Making request for definitions of ${word}...`);
		const response = await fetch(apiBaseUrl + word);
		const apiData = await response.json();
		console.log(apiData);
		console.log(apiData[0].word);
		// return apiData[0].meanings
		// 	.flatMap((m) => m.definitions)
		// 	.flatMap((d) => d.definition);

	};

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
	// 			DEFINITIONS_DIV.innerHTML += `<p>Error: Could not retrive any defintions for ${word}.</p>`;
	// 		});
	// };

	// const fetchWordData = async (word) => {
	// 	const url = new URL ('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
	// 	url.search = new URLSearchParams({
	// 		q: word,
	// 	})

	// 	try {
	//         // fetch request
	//         const response = await fetch(url);
	//         const apiData = await response.json();
	//         console.log(apiData);
	//         setUserInput(apiData.word)
	//         setError(false)
	//     } catch (error) {
	//         // do something with that error
	//         setError(true);
	//     }
	// }

	// const fetchWeatherData = async (city) => {
	//     // constructing the URL
	//     const url = new URL('https://api.openweathermap.org/data/2.5/weather');
	//     url.search = new URLSearchParams({
	//         appid: "cf0574abdade79720c384eef8564c083",
	//         q: city,
	//         // q short for query
	//         units: 'metric',

	//     });

	//     try {
	//         // fetch request
	//         const response = await fetch(url);
	//         const apiData = await response.json();
	//         // console.log(apiData);
	//         setTemp(apiData.main.temp)
	//         setError(false)
	//     } catch (error) {
	//         // do something with that error
	//         setError(true);
	//     }
	// }

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
				{error ? <p> Please try searching again</p> : null}
			</form>
		</>
	);
};

export default Form;
