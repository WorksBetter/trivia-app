import { useContext } from "react";
import TriviaContext from "../../context/trivia-context";
import QuestionList from "../Questions/QuestionList";
import Result from "../UI/Result/Result";
import classes from "./Body.module.css";

const Body = () => {
  const triviaCtx = useContext(TriviaContext);

  return (
    <div
      className={`${classes.Body} ${
        triviaCtx.triviaState === "start"
          ? classes.textcenter
          : classes.textjustify
      }`}
    >
      {triviaCtx.triviaState === "start" && (
        <div>
          <p>You will be presented with 10 True or False questions.</p>
          <p>Can you score 100%?</p>
        </div>
      )}
      {triviaCtx.triviaState === "playing" && <QuestionList />}
      {triviaCtx.triviaState === "end" && (
        <div>
          {triviaCtx.resultList.map((result) => {
            return (
              <div key={result.key}>
                <Result quizResult={result} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
