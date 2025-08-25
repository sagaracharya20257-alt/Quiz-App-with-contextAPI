import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const NextButton = () => {
  const { nextQuestion, selectedOption } = useContext(QuizContext);

  return (
    <button
      onClick={nextQuestion}
      disabled={!selectedOption}
      style={{
        marginTop: "15px",
        padding: "10px 20px",
        backgroundColor: selectedOption ? "#007bff" : "#ccc",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: selectedOption ? "pointer" : "not-allowed",
      }}
    >
      Next
    </button>
  );
};

export default NextButton;
