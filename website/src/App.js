import React from 'react';
import myImage from './images/Carlo_Seppi_18.6.24.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-all">
      <div class="container">
        <div class="container_small">
          <div className="App-picture">
            <div className="content-wrapper">
            <img src={myImage} className="left-image" alt="My Image" />
            </div>
            <div className="website-text">
            <p className="cursive-text">
             Dr. sc. med. in Biomedical Engineering<br />
             M. Sc. in Mathematics
            </p>            
            </div>
          </div>
          <div className="App-button-bar">
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
              <button
                className="App-button"
                onClick={() => window.location.href = "mailto:example@example.com"}
              >
                <img src={require('./images/letter.png')} alt="Mail" className="button-image" />
              </button>
            </p>
            </div>
            </div>
          
           

       
        <div className="App-center">
        As a mathematician with a PhD in Biomedical Engineering, I possess
strong analytical and problem-solving skills. My academic career
has equipped me to work both independently and collaboratively to
address complex challenges with innovative solutions.
           </div>
      
           </div>
      </header>
    </div>
  );
}

export default App;
