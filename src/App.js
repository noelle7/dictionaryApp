
import './App.css';
import { word } from './components/api/word.js';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Display from './components/Display';

const App = () => {

  const [searchedWord, setSearchedWord] = useState({
    meanings: [],
    sourceUrls: [],
  })
  const [inputError, setInputError] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    isError: false,
    title: '',
    message: '',
  })

  useEffect(() => {
    const data = async () => {
      try {
        const response = await word('developer')
        console.log(response[0])
        setSearchedWord(response[0])
        setErrorMessage({
          isError: false,
          title: '',
          message: '',
        })
      } catch (error) {
        console.log(error)
      }
    }

    // if (dark) {
    //   setTheme('dark')
    // }

    data()
  }, [])


  return (
    <div className="app">
      <Header />
      <Search 
        setSearchedWord={setSearchedWord}
        inputError={inputError}
        setInputError={setInputError}
        setErrorMessage={setErrorMessage}
        // dictionaryApi={dictionaryApi}
        // word={word}
      />
      <Display 
        searchedWord={searchedWord}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default App;
