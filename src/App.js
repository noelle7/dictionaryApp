
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

  const [font, setFont] = useState('sans-serif');
  const [theme, setTheme] = useState('lite')

  let dark = window.matchMedia('prefer-color-scheme: dark').matches

  useEffect(() => {
    const data = async () => {
      try {
        const response = await word('developer')
        setSearchedWord(response[0])
        setErrorMessage({
          isError: false,
          title: '',
          message: '',
        })
      } catch (error) {
      }
    }

    if (dark) {
      setTheme('dark')
    }

    data()
  }, [])


  return (
    <div className={`app ${font} ${theme}`}>
      <Header 
        font={font} 
        setFont={setFont}
        theme={theme}
        setTheme={setTheme} 
      />
      <Search 
        setSearchedWord={setSearchedWord}
        inputError={inputError}
        setInputError={setInputError}
        setErrorMessage={setErrorMessage}
      />
      <Display 
        searchedWord={searchedWord}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default App;

