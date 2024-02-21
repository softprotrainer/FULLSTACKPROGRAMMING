import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (


     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
import React from 'react';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="home">
        <h1>Welcome to my portfolio website!</h1>
        <p>Here you can find information about me
           and my projects.</p>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>Hi, my name is ABC and I'm a 
           junior FullStack developer. I am a fresher 
        .</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Portfolio</h3>
            <p>personal Portfolio website</p>
          </li>
          <li>
            <h3>calculator</h3>
            <p>Simple math calculator</p>
          </li>
          {/* <li>
            <h3>Project 3</h3>
            <p>Description of Project 3</p>
          </li> */}
        </ul>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <p>You can reach me at FullStackDeveloper@gmail.com 
           or 12345678.</p>
      </section>
    </div>
  );
}


export default App;
