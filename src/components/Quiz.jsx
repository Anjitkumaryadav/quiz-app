import React, { useState } from "react";
import QuestionList from "./QuestionList";
import '../App.css'

function Quiz() {
  const questions = [
    {
      question: "What is node?",
      options: [
        "css framework",
        "runtime environment",
        "React framework",
        "testing tools",
      ],
      answer: "runtime environment",
    },
    {
      question: "2+2?",
      options: ["4", "6", "7", "43"],
      answer: "4",
    },
    {
      question: "2+5?",
      options: ["4", "7", "7", "43"],
      answer: "7",
    },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const handleClick = (option) =>{
    setCurrentAnswer(option)
  }
  return (
    <div>
      <QuestionList
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        handleClick={handleClick}
        currentAnswer = {currentAnswer}
      />
      <button>next question</button>
    </div>
  );
}

export default Quiz;
