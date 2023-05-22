import logo from './NewStarlake2.PNG';
import './App.css';
import Countdown from './modules/Countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
          B-Town Throw-Down
        </h1>
      <img src={logo} className="App-logo" alt="logo" />
        
        <Countdown />
       
        
      </header>
      
    </div>
  );
}

export default App;
