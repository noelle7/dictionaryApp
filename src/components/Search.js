import searchIcon from '../assets/images/icon-search.svg';

import { word } from './api/word.js';
import { useState } from "react";

const Search = ( { setSearchedWord, inputError, setInputError, setErrorMessage } ) => {

	const [userInput, setUserInput] = useState('');

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (userInput === '') {
			setInputError(true)
		} else {
			setInputError(false)
		}

		try {
			const response = await word(userInput)
			console.log(response);
			
			// const updatedResponse = response.map( (item) => {
			// 	return {
			// 		...item,
			// 		meanings: {
			// 			...item.meanings,
			// 			id: crypto.randomUUID()
			// 		}
			// 	}
			// } )
			// console.log(updatedResponse);
			
			// setSearchedWord(updatedResponse[0])
			setSearchedWord(response[0])
			setInputError(false)
			setErrorMessage({
				isError: false,
				title: "",
				message: "",
			})

		} catch (error) {
			setSearchedWord({
			  meanings: [],
			  sourceUrls: [],
			})

			setErrorMessage({
			  isError: true,
			  title: error.response.data.title,
			  message: error.response.data.message,

			})
			console.log(error)
		}
	}

	return (
		<form action="" className='searchBar' onSubmit={handleSubmit}>
			<label htmlFor="word" className="sr-only">Enter a word</label>
			<input
				// className={
				// 	inputError
				// 	?
				// 	:
				// }
				type="text" 
				placeholder='search dictionary' onChange={handleChange} 
			/>
			{
				inputError && (
					<label className='inputErrorMessage'>Whoops, can't be empty...</label>
				)
			}
			<button className='button' type='submit'>
				<img src={searchIcon} className="searchIcon" alt="search icon" />
			</button>
		</form>
	)
}

export default Search;