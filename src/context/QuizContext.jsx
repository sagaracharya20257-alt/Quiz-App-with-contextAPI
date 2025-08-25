import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "Which language is used in React?",
      options: ["Python", "JavaScript", "C++", "Java"],
      answer: "JavaScript",
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const nextQuestion = () => {
    if (selectedOption) {
      if (selectedOption === questions[currentQuestionIndex].answer) {
        setScore((prev) => prev + 1);
      }
      setSelectedOption(""); // reset for next question
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedOption("");
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        score,
        selectedOption,
        setSelectedOption,
        nextQuestion,
        restartQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
