import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import './App.css';

const teams = [
  {text: 'Boston Red Sox', value:'redsox'},
  {text: 'New York Yankees', value:'yankees'},
  {text: 'Los Angeles Dodgers', value:'dodgers'},
  {text: 'Chicago Cubs', value:'cubs'},
]

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Dropdown
          placeholder="Select Team"
          fluid
          selection
          options={teams}
        />
        <Button>Click Me</Button>
    </div>
  );
}

export default App;
