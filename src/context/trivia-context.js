import React from "react";

const TriviaContext = React.createContext({
  triviaState: "start",
  questionCategory: "",
  resultList: [],
  currentQuestionCount: 0,
  correctAnswerCount: 0,
  updateResult: (answer) => {},
  updateTriviaState: (latestState) => {},
  updateQuestionCategory: (latestCategory) => {},
  updateCurrentQuestion: (latestQuestionCount) => {},
  updateCurrentAnswerCount: (latestCorrectAnswerCount) => {},
});

export default TriviaContext;
