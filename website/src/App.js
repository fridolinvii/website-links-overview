import myImage from './images/Carlo_Seppi_18.6.24.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-wrapper">
          <img src={myImage} className="left-image" alt="My Image" />
          <div className="content">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
              {/*  Edit <code>src/App.js</code> and save to reload. */}
            </p>
            <p>
            <button
              className="App-button"
              onClick={() => window.open("https://github.com/fridolinvii", "_blank")}
            >
               <img src={require('./images/github.png')} alt="GitHub" className="button-image" />
            </button> 
            <button
              className="App-button"
              onClick={() => window.open("https://www.researchgate.net/profile/Carlo-Seppi", "_blank")}
            >
              <img src={require('./images/researchgate.png')} alt="ResearchGate" className="button-image" />
            </button> 
            <button
              className="App-button"
              onClick={() => window.open("https://www.linkedin.com/in/carlo-seppi-0a2222169", "_blank")}
            >
              <img src={require('./images/linkedin.png')} alt="LinkedIn" className="button-image" />
</button>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;