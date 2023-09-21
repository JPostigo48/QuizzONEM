import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const questions = [
		{
			questionText: 'Problema 1',
			answer: 1,
		},
		{
			questionText: 'Problema 2',
			answer: 1012,
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answer: 540,
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answer: 169,
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answer: 96,
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answer: 48,
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answer: 20,
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answer: 16,
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answer: 240,
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answer: 19,
		},
	];

	const [numberAttempts, setNumberAttempts] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0,
    9:0,
  });
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [answers, setAnswers] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0,
    9:0,
  });
	const [califications, setCalifications] = useState({
    0:"Todavía no respondido",
    1:"Todavía no respondido",
    2:"Todavía no respondido",
    3:"Todavía no respondido",
    4:"Todavía no respondido",
    5:"Todavía no respondido",
    6:"Todavía no respondido",
    7:"Todavía no respondido",
    8:"Todavía no respondido",
    9:"Todavía no respondido",
  });

	const handleAnswer = (i) => {
    if (answers[i]!=questions[i].answer) {
      setNumberAttempts({...numberAttempts, [i]:numberAttempts[i]+1})
      setCalifications({...califications, [i]:"Respuesta incorrecta"})
    } else {
      setCalifications({...califications, [i]:"Respuesta correcta"})
    }
    console.log(califications)
    console.log(answers)
	};
	return (
		<div className='app'>
      {questions.map((e,i) => (
        <div>
          {console.log(i)}
          <div className='question-section'>
            <div className='question-count'>
              <span>Pregunta {i + 1}</span>/{questions.length}
            </div>
          </div>
          <div className='answer-section'>
            <input onChange={e=>setAnswers({...answers, [i]:e.target.value})} />
            {/* {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))} */}
          </div>
          <button onClick={()=> handleAnswer(i)}>Comprobar</button>
          <p>{califications[i]} ({numberAttempts[i]} intentos)</p>
        </div>
      ))
        // <>
				// 	<div className='question-section'>
				// 		<div className='question-count'>
				// 			<span>Question {currentQuestion + 1}</span>/{questions.length}
				// 		</div>
				// 		<div className='question-text'>{questions[currentQuestion].questionText}</div>
				// 	</div>
				// 	<div className='answer-section'>
        //     <input onChange={e=>setAnswer(e.target.value)} />
				// 		{/* {questions[currentQuestion].answerOptions.map((answerOption) => (
				// 			<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
				// 		))} */}
				// 	</div>
				// </>
      }
		</div>
	);
}

export default App
