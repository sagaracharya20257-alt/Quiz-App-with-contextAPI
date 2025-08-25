import React, { useContext } from "react";
import { QuizContext, QuizProvider } from "./context/QuizContext";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Scoreboard from "./components/Scoreboard";
import Result from "./components/Result";

const QuizApp = () => {
  const { questions, currentQuestionIndex } = useContext(QuizContext);

  const quizFinished = currentQuestionIndex >= questions.length;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>React Quiz App</h1>
      {!quizFinished ? (
        <>
          <Scoreboard />
          <Question />
          <NextButton />
        </>
      ) : (
        <Result />
      )}
    </div>
  );
};

const App = () => (
  <QuizProvider>
    <QuizApp />
  </QuizProvider>
);

export default App;
