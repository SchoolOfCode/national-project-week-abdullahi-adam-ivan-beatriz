import QuestionListItem from "../questionListItem";

function QuestionList({ questions, handleClick }) {
  return (
    <div>
    <h1 className="titleQuestions">Questions</h1>
      {questions.map(function (question, index) {
        return (
          <QuestionListItem
            {...question}
            id={question.question_id}
            key={question.question_id}
            handleClick={handleClick}
            // onClick={(e) => {
            //   console.log(e.target);
            //   handleClick(e);
            // }}
          />
        );
      })}
    </div>
  );
}
export default QuestionList;
