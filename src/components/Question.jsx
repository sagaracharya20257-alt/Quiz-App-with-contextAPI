import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Option from "./Option";

const Question = () => {
  const { questions, currentQuestionIndex } = useContext(QuizContext);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <div>
        {currentQuestion.options.map((opt, index) => (
          <Option key={index} option={opt} />
        ))}
      </div>
    </div>
  );
};

export default Question;
