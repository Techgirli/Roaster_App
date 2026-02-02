import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import React, { useState } from 'react'
import { Dropdown,Button } from 'semantic-ui-react'
import './App.css';
import axios from 'axios'

const teams = [
  {text: 'Boston Red Sox', value:'redsox'},
  {text: 'New York Yankees', value:'yankees'},
  {text: 'Los Angeles Dodgers', value:'dodgers'},
  {text: 'Chicago Cubs', value:'cubs'},
]

function App() {

  const [team, setTeam] = useState(0)

  const handleChange = ({event, data}) => {
    setTeam(data.value)
  } 

  const fetchRoster = async() => { 
   const url = `http://127.0.0.1:4094/roster/${team}`
    const response = await axios.get(url)
    console.log(response)
  }

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
          onChange={handleChange} 
        />
        <Button onClick={fetchRoster}>Get Roaster</Button>
    </div>
  );
}

export default App;
