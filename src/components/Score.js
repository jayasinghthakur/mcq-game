import React from 'react';

const Score = ({ score, userAnswers }) => {
  return (
    <div className="score">
      <h1>Your Score: {score}/{userAnswers.length}</h1>
      <div className="user-answers">
        <h2>Your Answers:</h2>
        <ul>
          {userAnswers.map((item, index) => (
            <li key={index}>
              <strong>Q: {item.question}</strong> | Your Answer: {item.answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Score;