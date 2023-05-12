// import logo from './logo.svg';
// import Inconsolata from './assets/fonts/inconsolata'
import './App.css';
import Header from './components/Header';
import Form from './components/Form'
import Result from './components/Result';
import { useState } from 'react';

const App = () => {

  const [word, setWordDefinitions] = useState(""); 

  return (
    <main className="App">
      <Header />
      <Form setWordDefinitions={setWordDefinitions} />
      <Result wordDefinitions={word} />
    </main>
  );
}

export default App;