import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Option = ({ option }) => {
  const { selectedOption, setSelectedOption } = useContext(QuizContext);

  return (
    <button
      onClick={() => setSelectedOption(option)}
      style={{
        margin: "5px",
        padding: "10px",
        backgroundColor: selectedOption === option ? "#90ee90" : "#f0f0f0",
        border: "1px solid #333",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {option}
    </button>
  );
};

export default Option;
