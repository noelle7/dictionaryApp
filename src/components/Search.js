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
		}
	}

	return (
		<form action="" className='searchBar' onSubmit={handleSubmit}>
			<label htmlFor="word" className="sr-only">Enter a word</label>
			<input
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