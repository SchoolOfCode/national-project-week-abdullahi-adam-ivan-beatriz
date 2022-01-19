function QuestionListItem({ question_id, question, title, handleClick }) {
  return (
    <div
      onClick={(e) => {
        handleClick(question_id);
      }}
      className="question-list-item"
    >
      <h2>{title}</h2>
      <p>{question}</p>
    </div>
  );
}
export default QuestionListItem;
