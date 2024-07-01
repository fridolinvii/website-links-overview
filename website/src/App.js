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
                onClick={() => window.location.href = "mailto:job@carloseppi.xyz"}
              >
                <img src={require('./images/letter.png')} alt="Mail" className="button-image" />
              </button>
            </p>
            </div>
            </div>
          
           

       
        <div className="App-center">
        <h1>Carlo Seppi</h1>
        <p>Welcome to my website. Here you will find links to my profiles on <a href="https://github.com/fridolinvii">GitHub</a>, <a href="https://www.researchgate.net/profile/Carlo-Seppi">ResearchGate</a>, <a href="https://www.linkedin.com/in/carlo-seppi-0a2222169">LinkedIn</a>, and my <a href="mailto:job@carloseppi.xyz">email address</a>.
        </p>
        <p>With a PhD in Biomedical Engineering and a Masters in Mathematics, 
          I bring exceptional analytical and problem-solving skills to the table. 
          My academic journey and extracurricular activities have enhanced my ability 
          to tackle complex challenges and develop innovative solutions.
        </p>
        <p>P.S. If you want to host your own website like this, you can find the source code on my <a href="URL">GitHub</a> page.</p>

           </div>
      
           </div>
      </header>
    </div>
  );
}

export default App;
