import { useContext } from "react";
import TriviaContext from "../../context/trivia-context";

import classes from "./Header.module.css";

const Header = () => {
  const triviaCtx = useContext(TriviaContext);

  return (
    <div className={classes.Header}>
      {triviaCtx.triviaState === "start" && (
        <h2>Welcome to the Trivia Challenge!</h2>
      )}

      {triviaCtx.triviaState === "playing" && (
        <h2>{triviaCtx.questionCategory}</h2>
      )}

      {triviaCtx.triviaState === "end" && (
        <h2>You Scored {triviaCtx.correctAnswerCount}/10</h2>
      )}
    </div>
  );
};

export default Header;
