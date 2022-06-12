import { Fragment, useContext, useEffect, useState } from "react";
import Question from "./Question";
import classes from "./QuestionList.module.css";

import he from "he";
import TriviaContext from "../../context/trivia-context";

const QuestionList = () => {
  const [questionsList, setQuestionsList] = useState(null);

  const triviaCtx = useContext(TriviaContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getQuestion(signal);

    return () => {
      controller.abort();
    };
  }, []);

  const getQuestion = async (signal) => {
    try {
      //domain address of the url is defined as a proxy in package.json
      const url = "/api.php?amount=10&difficulty=hard&type=boolean";

      const response = await fetch(url, {
        signal: signal,
        headers: {
          accepts: "application/json",
        },
      });

      if (!response || response === undefined) {
        throw new Error("Failed to fetch the questions.");
      }
      const questions = await response.json();

      //he.decode() is used to decode HTML entities i.e.&quot; present in the questions
      const parsedQuestionsList = questions.results.map((questionObj) => ({
        ...questionObj,
        question: he.decode(questionObj.question),
      }));

      triviaCtx.updateQuestionCategory(
        parsedQuestionsList[triviaCtx.currentQuestionCount].category
      );
      setQuestionsList(parsedQuestionsList);
    } catch (error) {
      console.log(error);
    }
  };

  const answerResultHandler = (answer) => {
    let result = "True";
    if (!questionsList) {
      return;
    }
    if (
      answer !== questionsList[triviaCtx.currentQuestionCount].correct_answer
    ) {
      result = "False";
    }

    const answerObj = {
      key: triviaCtx.currentQuestionCount,
      question: questionsList[triviaCtx.currentQuestionCount].question,
      answer: result,
    };

    triviaCtx.updateResult(answerObj);

    if (triviaCtx.currentQuestionCount < 9) {
      triviaCtx.updateQuestionCategory(
        questionsList[triviaCtx.currentQuestionCount + 1].category
      );
      triviaCtx.updateCurrentQuestionCount((prevQuestion) => prevQuestion + 1);
    }
  };

  return (
    <Fragment>
      <div className={`${!questionsList ? classes.loader : ""}`}></div>
      <div className={`${questionsList ? classes.questionbox : ""}`}>
        <Question
          question={
            questionsList
              ? questionsList[triviaCtx.currentQuestionCount].question
              : null
          }
          category={
            questionsList
              ? questionsList[triviaCtx.currentQuestionCount].category
              : null
          }
          onCheckAnswer={answerResultHandler}
        />
      </div>
    </Fragment>
  );
};

export default QuestionList;
