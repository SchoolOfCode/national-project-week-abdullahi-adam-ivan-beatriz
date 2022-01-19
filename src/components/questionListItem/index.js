function QuestionListItem({ question, title, handleClick }) {
  return (
    <div className="question-list-item">
      <button
        onClick={(e) => {
          console.log(e.target);
          handleClick(e);
        }}
      >
        <h2>{title}</h2>
        <h3>{question}</h3>
      </button>
    </div>
  );
}
export default QuestionListItem;
