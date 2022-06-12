import { Button } from "@mui/material";
import { useContext } from "react";
import TriviaContext from "../../context/trivia-context";

import classes from "./Footer.module.css";

const Footer = () => {
  const triviaCtx = useContext(TriviaContext);

  const onClickHandler = () => {
    // the button appears either at the start or at the end, 
    // in both cases, the next trivia state would be 'playing'
    triviaCtx.updateTriviaState("playing");
  };

  return (
    <div className={classes.Footer}>
      {triviaCtx.triviaState !== "playing" ? (
        <Button variant="outlined" onClick={onClickHandler}>
          {triviaCtx.triviaState === "start" ? "BEGIN" : "PLAY AGAIN"}
        </Button>
      ) : (
        <p>{triviaCtx.currentQuestionCount + 1} of 10</p>
      )}
    </div>
  );
};

export default Footer;
