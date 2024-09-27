import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizList from './components/QuizList';
import QuizPage from './components/QuizPage';
import ScoreSummary from './components/ScoreSummary';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-primary text-white p-4 shadow-md sticky top-0 z-10">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Quiz Application</h1>
          </div>
        </header>
        <main className="container mx-auto p-4 mt-8 flex-grow">
          <Routes>
            <Route path="/" element={<QuizList />} />
            <Route path="/quiz/:id" element={<QuizPage />} />
            <Route path="/score" element={<ScoreSummary />} />
          </Routes>
        </main>
        <footer className="bg-primary text-white p-4 sticky bottom-0 z-10">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 . All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;