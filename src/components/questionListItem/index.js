import { useNavigate } from "react-router-dom";

function QuestionListItem({
  index,
  setQuestionIndex,
  question_id,
  question,
  title,
  handleClick,
}) {
  let navigate = useNavigate();
  return (
    <div
      onClick={(e) => {
        setQuestionIndex(index);
        handleClick(question_id);
        navigate(`/questions/${question_id}`);
      }}
      className="question-list-item"
    >
      <h2>{title}</h2>
      <p>{question}</p>
    </div>
  );
}
export default QuestionListItem;