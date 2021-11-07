import React, {FC, MouseEvent, useState} from 'react';
import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10

const App:FC = () => {

    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [number, setNumber] = useState(0)
    const [userAnswer, setUserAnswer] = useState([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)

    const startTrivia = async () => {

    }
    const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {

    }
    const nextQuestion = () => {
        
    }

  return (
    <div className={'App'}>
     <h1>REACT QUIZ</h1>
        <button className={'start'} onClick={startTrivia}>Start</button>
        <p className={'score'}>Score:</p>
        <p>Loading Question...</p>
        <QuestionCard
            questionNr={number + 1}
            question={questions[number].question}
            totalQuestions={TOTAL_QUESTIONS}
            callback={checkAnswer}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            answers={questions[number].answers}
        />
        <button className={'next'} onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
