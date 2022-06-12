import classes from "./Result.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Result = ({ quizResult }) => {
  return (
    <div className={classes.Result}>
      {quizResult.answer === "True" ? (
        <AddIcon className={classes.icon} />
      ) : (
        <RemoveIcon className={classes.icon} />
      )}
      {quizResult.question}
    </div>
  );
};

export default Result;
