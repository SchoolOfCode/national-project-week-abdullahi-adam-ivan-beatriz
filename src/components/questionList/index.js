import QuestionListItem from "../questionListItem";

function QuestionList({ questions, handleClick,setQuestionIndex }) {
  return (
    <div>
      <h2 className="titleQuestions">Questions</h2>
      {questions.map(function (question, index) {
        return (
          <QuestionListItem
            // question={question}
            {...question}
            index={index}
            setQuestionIndex={setQuestionIndex}
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
