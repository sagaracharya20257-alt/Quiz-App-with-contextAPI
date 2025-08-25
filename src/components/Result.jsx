import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Result = () => {
  const { score, questions, restartQuiz } = useContext(QuizContext);

  const percentage = ((score / questions.length) * 100).toFixed(2);

  return (
    <div>
      <h2>Quiz Completed 🎉</h2>
      <p>You scored {score} out of {questions.length} ({percentage}%)</p>
      <button
        onClick={restartQuiz}
        style={{
          padding: "10px 20px",
          marginTop: "15px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
