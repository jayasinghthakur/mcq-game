import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import data from '../data/questions.json'; // Import your questions data
import "../styles/App.css";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === data[currentIndex].correctOption;
    setScore(isCorrect ? score + 1 : score);

    setUserAnswers([...userAnswers, { question: data[currentIndex].question, answer: selectedOption }]);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="app">
      {currentIndex < data.length ? (
        <Question
          question={data[currentIndex].question}
          options={data[currentIndex].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <Score score={score} userAnswers={userAnswers} />
      )}
    </div>
  );
};

export default App;