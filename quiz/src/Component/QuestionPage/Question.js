import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Question.css"
const decodeHtmlEntities = (html) => {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

const TriviaComponent = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchTriviaQuestions = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=5');
        const decodedQuestions = response.data.results.map((question) => ({
          ...question,
          question: decodeHtmlEntities(question.question),
          incorrect_answers: question.incorrect_answers.map((answer) => decodeHtmlEntities(answer)),
          correct_answer: decodeHtmlEntities(question.correct_answer),
        }));
        setQuestions(decodedQuestions);
      } catch (error) {
        console.error('Error fetching trivia questions:', error);
      }
    };

    fetchTriviaQuestions();
  }, []);

  

  return (
    <div className='flexCenter'>
   
      <ul className='questions'>
        {questions.map((question, index) => (
          <li key={index}>
            <p>{question.question}</p>
            <ul className='answers'>
              {[...question.incorrect_answers, question.correct_answer].map((answer, ansIndex) => (
                <li key={ansIndex} >{answer}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button>Check answer</button>
    </div>
  );
};

export default TriviaComponent;
