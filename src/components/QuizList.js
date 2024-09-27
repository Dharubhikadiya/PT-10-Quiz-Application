import React from 'react';
import { Link } from 'react-router-dom';

const quizzes = [
  { id: 1, title: 'General Knowledge', description: 'Test your general knowledge with this quiz!' },
  { id: 2, title: 'Science Quiz', description: 'Explore the wonders of science with these questions.' },
  { id: 3, title: 'History Trivia', description: 'Journey through time with this history quiz.' },
];

function QuizList() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-primary text-center mb-8">Available Quizzes</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <Link 
            key={quiz.id} 
            to={`/quiz/${quiz.id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-secondary mb-2">{quiz.title}</h3>
              <p className="text-gray-600">{quiz.description}</p>
            </div>
            <div className="bg-accent text-white p-4 text-center">
              Start Quiz
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuizList;