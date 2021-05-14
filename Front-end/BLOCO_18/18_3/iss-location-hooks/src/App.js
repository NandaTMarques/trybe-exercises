import React, { useContext } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import PeopleInSpace from './components/PeopleInSpace';
import ToggleMap from './components/ToggleMap';
import ISSContext from './context/ISSContext';

function App() {
  const { showMap } = useContext(ISSContext);

  return (
    <div className="App">
      <h1>
        Space Station
        {' '}
        <span className="purple-font">Tracker</span>
      </h1>
      <ToggleMap />
      {showMap && <ISSLocation />}
      <PeopleInSpace />
    </div>
  );
}

export default App;
