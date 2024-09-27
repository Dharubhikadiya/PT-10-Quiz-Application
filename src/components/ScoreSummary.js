import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ScoreSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions, userAnswers } = location.state || { score: 0, totalQuestions: 0, userAnswers: [] };
  const [showAnswers, setShowAnswers] = useState(false);

  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreMessage = () => {
    if (percentage >= 80) return "Excellent!";
    if (percentage >= 60) return "Good job!";
    if (percentage >= 40) return "Not bad!";
    return "Keep practicing!";
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-4xl font-bold text-primary mb-8 text-center">Quiz Results</h2>
      <div className="text-center mb-8">
        <p className="text-6xl font-bold text-secondary">{score}/{totalQuestions}</p>
        <p className="text-2xl mt-2 text-gray-600">{percentage}% Correct</p>
      </div>
      <p className="text-3xl font-semibold text-center text-accent mb-8">{getScoreMessage()}</p>
      <div className="space-y-4 mb-8">
        <button 
          onClick={() => navigate('/')}
          className="w-full bg-secondary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary transition-colors duration-300"
        >
          Try Another Quiz
        </button>
        <button 
          onClick={() => setShowAnswers(!showAnswers)}
          className="w-full bg-light text-primary py-3 px-6 rounded-lg text-lg font-semibold hover:bg-accent hover:text-white transition-colors duration-300"
        >
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </button>
        </div>
        {showAnswers && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Answer Review</h3>
            {userAnswers.map((answer, index) => (
              <div key={index} className="border-b pb-4">
                <p className="font-semibold text-lg mb-2">{answer.question}</p>
                <p className={`mb-1 ${answer.userAnswer === answer.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                  Your answer: {answer.userAnswer}
                </p>
                {answer.userAnswer !== answer.correctAnswer && (
                  <p className="text-green-600">Correct answer: {answer.correctAnswer}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
  );
}

export default ScoreSummary;