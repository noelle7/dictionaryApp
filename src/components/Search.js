// import SearchButton from '../assets/images/icon-search.svg';

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
			setSearchedWord(response[0])
			setInputError(false)

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
				{/* <SearchButton /> */}
				submit
			</button>
		</form>
	)
}

export default Search;