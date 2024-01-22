import React, {useState} from 'react'
import "./LandingPage.css"

const LandingPage = ({onStartQuiz}) => {
    return (
    <div className='flexCenter'>
        <div className='quizCard'>
            <h1>Quizzical</h1>
            <p>Some Describtion Here</p>
            <button id="startBtn" onClick={onStartQuiz}>Start Quiz</button>
        </div>
    </div>
  )
}

export default LandingPage