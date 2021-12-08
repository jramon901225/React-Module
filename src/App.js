import logo from './logo.svg';
import './App.css';

//Components
import Greetings from './components/Greetings';
import Calculadora from './components/Calculadora'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greetings name = "Manuel"/>
        <Calculadora firstValue = {5} secondValue={2} operator = {"suma"}/>
      </header>
    </div>
  );
}

export default App;
