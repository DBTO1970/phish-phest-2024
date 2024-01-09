import React from 'react';
import logo from './NewStarlake2.PNG';
import './App.css';
import Countdown from './modules/Countdown';
import RandomShow from './modules/RandomShow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
          Yes, a FESTIVAL!!!<br /><em>What DID Dela Wear?</em>
      </h1>
      <img src={logo} className="App-logo" alt="logo" />
      <Countdown />
      {/* <RandomShow /> */}
      
      </header>
      
    </div>
  );
}

export default App;
