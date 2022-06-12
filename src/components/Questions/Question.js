import { Button } from "@mui/material";
import { Fragment } from "react";

import classes from "./Question.module.css";

const Question = (props) => {
  const onAnswerClickHanlder = (event) => {
    props.onCheckAnswer(event.target.value);
  };

  return (
    <Fragment>
      <p>{props.question}</p>
      {props.question ? (
        <div>
          <Button
            className={classes.button}
            variant="outlined"
            value="True"
            onClick={onAnswerClickHanlder}
          >
            True
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            value="False"
            onClick={onAnswerClickHanlder}
          >
            False
          </Button>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Question;
