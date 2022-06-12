import { useState } from "react";
import TriviaContext from "./trivia-context";

const TriviaProvider = (props) => {
  const [triviaState, setTriviaState] = useState("start");
  const [questionCategory, setQuestionCategory] = useState("");
  const [resultList, setResultList] = useState([]);
  const [currentQuestionCount, setCurrentQuestionCount] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  const updateTriviaResultHandler = (currentAnswer) => {
    setResultList((prevList) => [...prevList, currentAnswer]);
    if (currentAnswer.answer === "True") {
      setCorrectAnswerCount((prevState) => prevState + 1);
    }
    //if its the last question then change the trivia state to 'end' and reset the other states
    if (currentAnswer.key === 9) {                      
      setTriviaState("end");
      setQuestionCategory("");
      setCurrentQuestionCount(0);
    }
  };

  const updateTriviaStateHandler = (latestState) => {
    setTriviaState(latestState);
    setResultList([]);
    setCorrectAnswerCount(0);
  };

  const updateQuestionCategoryHandler = (latestCategory) => {
    setQuestionCategory(latestCategory);
  };

  const updateCurrentQuestionCountHandler = (latestQuestionCount) => {
    setCurrentQuestionCount(latestQuestionCount);
  };

  const updateCorrectAnswerCount = (latestCorrectAnswerCount) => {
    setCorrectAnswerCount(latestCorrectAnswerCount);
  };

  const triviaContext = {
    triviaState: triviaState,
    questionCategory: questionCategory,
    resultList: resultList,
    currentQuestionCount: currentQuestionCount,
    correctAnswerCount: correctAnswerCount,
    updateResult: updateTriviaResultHandler,
    updateTriviaState: updateTriviaStateHandler,
    updateQuestionCategory: updateQuestionCategoryHandler,
    updateCurrentQuestionCount: updateCurrentQuestionCountHandler,
    updateCorrectAnswerCount: updateCorrectAnswerCount,
  };

  return (
    <TriviaContext.Provider value={triviaContext}>
      {props.children}
    </TriviaContext.Provider>
  );
};

export default TriviaProvider;
