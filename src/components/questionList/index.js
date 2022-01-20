import QuestionListItem from "../questionListItem";

function QuestionList({ questions, handleClick }) {
  return (
    <div>
    <h1 className="titleQuestions">Questions</h1>
      {questions.map(function (question, index) {
        return (
          <QuestionListItem
            // question={question}
            {...question}
            id={question.question_id}
            key={question.question_id}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}
export default QuestionList;
