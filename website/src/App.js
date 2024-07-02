import React from 'react';
import './App.css';
import config from './config'; // Importing the generated configuration

const imagePath = config.imagePath;


function App() {

   return (
    <div className="App">
      <header className="App-all">
      <div class="container">
        <div class="container_small">
          <div className="App-picture">
            <div className="content-wrapper">
            <img src={require(`${imagePath}`)} className="left-image" alt="Profile_picture" />
            </div>
            <div className="website-text">
            <p className="cursive-text">
            {process.env.REACT_APP_TITLE_1} < br />
            {process.env.REACT_APP_TITLE_2} 
            </p>            
            </div>
          </div>
          <div className="App-button-bar">
            
              <button
                className="App-button"
                onClick={() => window.open(process.env.REACT_APP_GITHUB_URL, "_blank")}
              >
                <img src={require('./images/github.png')} alt="GitHub" className="button-image" />
              </button>
              <button
                className="App-button"
                onClick={() => window.open(process.env.REACT_APP_RESEARCHGATE_URL, "_blank")}
              >
                <img src={require('./images/researchgate.png')} alt="ResearchGate" className="button-image" />
              </button>
              <button
                className="App-button"
                onClick={() => window.open(process.env.REACT_APP_LINKEDIN_URL, "_blank")}
              >
                <img src={require('./images/linkedin.png')} alt="LinkedIn" className="button-image" />
              </button>
              <button
                className="App-button"
                onClick={() => window.location.href = `mailto:${process.env.REACT_APP_MAIL}`}
              >
                <img src={require('./images/letter.png')} alt="Mail" className="button-image" />
              </button>
            
          </div>
        </div>
          
           

       
        <div className="App-center">
        <h1>{process.env.REACT_APP_NAME}</h1>
        <p>Welcome to my website. Here you will find links to my profiles on <a href={process.env.REACT_APP_GITHUB_URL}>GitHub</a>, <a href={process.env.REACT_APP_RESEARCHGATE_URL}>ResearchGate</a>, <a href={process.env.REACT_APP_LINKEDIN_URL}>LinkedIn</a>, and my <a href={`mailto:${process.env.REACT_APP_MAIL}`}>email address</a>.
        </p>
        <p>{process.env.REACT_APP_DESCRIPTION}</p>
         <p>P.S. If you want to host your own website like this, you can find a step-by-step guide on <a href="https://github.com/fridolinvii/website-links-overview">GitHub</a> page.</p>
           </div>
      
           </div>
      </header>
    </div>
  );
}

export default App;
