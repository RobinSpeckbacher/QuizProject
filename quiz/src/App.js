import './App.css';
import React, { useState } from 'react';
import LandingPage from './Component/LandingPage/LandingPage';
import Question from "./Component/QuestionPage/Question"
function App() {
  const [isTrue, setIsTrue] = useState(false)
  const handleStartQuiz = () => {
    setIsTrue(true)
  }
  return (
    <div className="App">
      {isTrue? <Question/>: <LandingPage onStartQuiz={handleStartQuiz}/> }
    </div>
  );
}

export default App;
