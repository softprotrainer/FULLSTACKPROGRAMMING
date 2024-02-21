import React from 'react';
const Question = ({ question, onAnswer }) => {
return (
<div>
<h3>{question.text}</h3>
<div>
{question.options.map((option, index) => (
<div key={index}>
<input
type="radio"
id={option}
name={question.id}
value={option}
onChange={() => onAnswer(question.id, option)}
/>
<label htmlFor={option}>{option}</label>
</div>
))}
</div>
</div>
);
};
export default Question;