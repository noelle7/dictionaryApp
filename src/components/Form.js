import { useState } from "react";
import Result from "./Result";

const Form = () => {

	const [userInput, setUserInput] = useState("");
	const [word, setWord] = useState("");
	const [phonetic, setPhonetic] = useState("");
	const [filteredData, setFilteredData] = useState([]);
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

			setWord(apiData[0].word);
			// setMeanings(apiData[0].meanings);
			setPhonetic(apiData[0].phonetics[2].text);

			setFilteredData(apiData[0].meanings.map((meaning) => ({
					partOfSpeech: meaning.partOfSpeech,
					synonyms: meaning.synonyms,

					definitions: meaning.definitions.map((def) => ({
						definition: def.definition,
						examples: def.example,
					})),
				}))
			);

			// const filteredArray = word.filter( (wordObj, index) => {
			// 	return (
			// 		wordObj.meaning = apiData[0].meanings.map((meaning) => ({
			// 				partOfSpeech: meaning.partOfSpeech,
			// 				synonyms: meaning.synonyms,
			// 				definitions: meaning.definitions.map((def) => ({
			// 						definition: def.definition,
			// 						examples: def.example,
			// 					})),
			// 				}))
			// 	)
			// })
			// console.log(setFilteredData);

			// setFilteredData(filteredArray)

			setError(false);

		} catch (error) {
			setError(true);
		}
	};

	return (
		<section>
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
				<button type="submit">Submit</button>
				{
					error 
					? (
					<p className="errorMessage"> Whoops, can't be empty...</p>
					) : null
				}
			</form>

			{	
				filteredData.length > 0 
				&& <Result 
					filteredData={filteredData}
					word={word}
					phonetic={phonetic} 
					/>
			}
		</section>
	);
};

export default Form;
