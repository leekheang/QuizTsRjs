import React, { useState } from 'react';
import { QuestionState ,fectchQuizQuestions , Difficulty} from './API';
import { QuestionCard } from './components/QuestionCard';

type AnswerObject = {
  question: string;
  answer: string;
  corrent: boolean;
  correntAnswer: string;
}

const TOTAL_QUESTIONS = 10;
const  App = () => {
  const [loading, setLoading ] = useState(false);
  const [questions , setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers]  = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)


  console.log(fectchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY ))
  
  const startTrivia = async () => {

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  } 
  const nextQuestion = () => {

  }

  return <>
      <div className="App">
        <h1>QUIZ</h1>
        <button className="start" onClick={startTrivia}>
          Start
        </button>
        {/* <QuestionCard 
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}

           /> */}
           <p className="score">Score:</p>
           <p>Loading Questions.............</p>
        <button className="next" onClick={nextQuestion}>Next Question</button>
      </div>
  </>
}

export default App;
