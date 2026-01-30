import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { Dropdown } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Dropdown
        placeholder="Select Friend"
        fluid
        selection
        options={friendOptions}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
