// import logo from './logo.svg';
// import Inconsolata from './assets/fonts/inconsolata'
import './App.css';
import Header from './components/Header';
import Form from './components/Form'
import Result from './components/Result';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Form />
      <Result />
    </div>
  );
}

export default App;