import React from 'react';
import myImage from './images/Carlo_Seppi_18.6.24.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-wrapper">
          <img src={myImage} className="left-image" alt="My Image" />
          <div className="content">
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
        <div className="website-text">
          <p className="cursive-text">
            Dr. sc. med. in Biomedical Engineering<br />
            M. Sc. in Mathematics
          </p>
        </div>
        <div className="App-center">
        As a mathematician with a PhD in Biomedical Engineering, I possess
strong analytical and problem-solving skills. My academic career
has equipped me to work both independently and collaboratively to
address complex challenges with innovative solutions. <br /><br />
I have hands-on experience applying mathematical approaches in various practical settings, including during civil service and PhD research. I have also taught and supervised master’s and PhD students,
helping them develop crucial skills and understanding of essential tools
and techniques.
{/*”Mr. Seppi demonstrated the ability to work independently with creativity and to think
outside of the box. [...] I know him as a motivated, enthusiastic and a dedicated
student [...] other co-workers and Ph.D. students [...] commented favourably about
working with him.” - Certificate of employment, University of Basel
”I liked how Carlo, kindly and patently, told me where in my code I went wrong and
gave advice on what I could try without giving the answer. He always responded to
emails very quickly. I really enjoyed the process and learnt a lot.” - Student feedback*/}
           </div>
      </header>
    </div>
  );
}

export default App;
