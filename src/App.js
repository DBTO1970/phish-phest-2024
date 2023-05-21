import logo from './ph980811_01.jpg';
import './App.css';
import Countdown from './modules/Countdown';
// import RandomShow from './modules/RandomShow';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
          B-Town Throw-Down
        </h1>
      <img src={logo} className="App-logo" alt="logo" />
        
        <Countdown />
        {/* <RandomShow /> */}
        
      </header>
      
    </div>
  );
}

export default App;
