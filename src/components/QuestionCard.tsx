import React from 'react';

type QuestionCardProps = {
    question: string;
    answers: string[];
    userAnswer: any  ;
    callback: any;
    questionNr: number;
    totalQuestions: number;

}


export const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    answers,
    userAnswer,
    callback ,
    questionNr, 
    totalQuestions}) =>( 
    <div>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}></p>     
        <div>
            {answers.map(answer =>(
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer }} />
                    </button>
                </div>
            ))}
        </div> 
    </div>

)
