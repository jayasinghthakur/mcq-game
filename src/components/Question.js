import React, { useState } from 'react';

const Question = ({ question, options, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswer(selectedOption);
      setSelectedOption('');
    }
  };

  return (
    <div className="question">
      <h1>{question}</h1>
      <div className="options">
        {options.map((option) => (
          <div key={option} className={`option ${selectedOption === option ? 'selected' : ''}`} onClick={() => handleOptionSelect(option)}>
            {option}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} className="submit-btn">
        Next
      </button>
    </div>
  );
};

export default Question;