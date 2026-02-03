import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import React, { useState } from 'react';
import { Dropdown, Button, Table } from 'semantic-ui-react'; // Import Table components
import './App.css';
import axios from 'axios';

const teams = [
  { text: 'Boston Red Sox', value: 'redsox' },
  { text: 'New York Yankees', value: 'yankees' },
  { text: 'Los Angeles Dodgers', value: 'dodgers' },
  { text: 'Chicago Cubs', value: 'cubs' },
];

function App() {
  const [team, setTeam] = useState('');
  const [roster, setRoster] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (event, data) => {
    setTeam(data.value);
  };

  const fetchRoster = async () => {
    try {
      const url = `http://127.0.0.1:4094/roster/dodgers`;
      const response = await axios.get(url);
      setRoster(response.data); // Fixed typo: setRoster, not setRoaster
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="App">
      <h1>MLB Roster</h1>
      <Dropdown
        placeholder="Select Team"
        fluid
        selection
        options={teams}
        onChange={handleChange}
      />
      <Button onClick={fetchRoster}>Get Roster</Button>

      {roster.length > 0 ? (
        <Table celled inverted selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {roster.map((player, index) => (
              <Table.Row key={index}>
                <Table.Cell>{player}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : error ? (
        <div>
          <h1>Error fetching roster. Please try again.</h1>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      ) : (
        <h1>Please select a team and click "Get Roster"</h1>
      )}
    </div>
  );
}

export default App; 
