import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchQuizById } from '../api/quizApi';

function QuizPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        setLoading(true);
        const quizData = await fetchQuizById(id);
        setQuiz(quizData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load quiz. Please try again.');
        setLoading(false);
      }
    };

    loadQuiz();
  }, [id]);

  useEffect(() => {
    if (quiz && currentQuestionIndex >= quiz.questions.length) {
      navigate('/score', { 
        state: { 
          score, 
          totalQuestions: quiz.questions.length,
          userAnswers 
        } 
      });
    }
  }, [currentQuestionIndex, quiz, score, userAnswers, navigate]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (!quiz) return;  // Safety check

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const newUserAnswers = [...userAnswers, { 
      question: currentQuestion.question,
      userAnswer: selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer
    }];
    setUserAnswers(newUserAnswers);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    setSelectedAnswer('');
  };

  if (loading) return <div className="text-center text-2xl">Loading quiz...</div>;
  if (error) return <div className="text-center text-2xl text-red-500">{error}</div>;
  if (!quiz) return null;

  if (currentQuestionIndex >= quiz.questions.length) {
    return <div className="text-center text-2xl">Quiz completed. Redirecting to results...</div>;
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold text-primary mb-8 text-center">{quiz.title}</h2>
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-semibold text-secondary mb-6">
        Question {currentQuestionIndex + 1} of {quiz.questions.length}
      </h3>
      <p className="text-xl mb-8">{currentQuestion.question}</p>
      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            className={`w-full text-left p-4 rounded-lg transition-colors duration-300 ${
              selectedAnswer === option
                ? 'bg-accent text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
        </div>
        <button
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
          className="mt-8 w-full bg-secondary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {currentQuestionIndex === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
}

export default QuizPage;