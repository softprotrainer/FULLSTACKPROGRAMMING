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

export default App;
*/
import React, { useState } from 'react';
import './App.css';
import Question from './Components/Question';
const App = () => {
const [answers, setAnswers] = useState([]);
const [questions] = useState([
{
id: 1, text: 'What is your favorite color?', options: ['Red', 'Green', 'Blue', 'Yellow', 'Other'], }, {
id: 2, text: 'Which programming language do you prefer?', options: ['JavaScript', 'Python', 'Java', 'C++', 'Other'], }, {
id: 3, text: 'What is your favorite animal?', options: ['Dog', 'Cat', 'Elephant', 'Dolphin', 'Other'], }, {
id: 4, text: 'How do you like to spend your weekends?', options: ['Reading', 'Watching Movies', 'Outdoor Activities', 'Gaming', 'Other'], }, {
id: 5, text: 'What type of music do you enjoy?', options: ['Pop', 'Rock', 'Classical', 'Hip Hop', 'Other'], }, ]);
const handleAnswer = (questionId, option) => {
const updatedAnswers = answers.filter((answer) => answer.questionId !== questionId);
setAnswers([...updatedAnswers, { questionId, option }]);
};
return (

<div className="App">
<h1>Online Survey Application</h1>
<div>
{questions.map((question) => (
<Question key={question.id} question={question} onAnswer={handleAnswer} />
))}
</div>
<h2>Your answers:</h2>
<ul>
{answers.map((answer, index) => (
<li key={index}>
Question {answer.questionId}: {answer.option}
</li>
))}
</ul>
</div>
);
};
export default App;