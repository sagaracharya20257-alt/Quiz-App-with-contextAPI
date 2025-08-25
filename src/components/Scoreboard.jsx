import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Scoreboard = () => {
  const { score, questions } = useContext(QuizContext);

  return (
    <div style={{ marginBottom: "10px" }}>
      <h3>Score: {score} / {questions.length}</h3>
    </div>
  );
};

export default Scoreboard;
