import { useNavigate } from "react-router-dom";
function QuestionInput({
  questionId,
  onSubmitClick,
  questionObject,
  setQuestionObject,
}) {
  let navigate = useNavigate();

  function handleChangeTitle(event) {
    //these functions read the value of each input field and store the data ready for the form to be submit
    setQuestionObject({ ...questionObject, title: event.target.value });
  }

  function handleChangeName(event) {
    setQuestionObject({ ...questionObject, name: event.target.value });
  }

  function handleChangeQuestion(event) {
    setQuestionObject({ ...questionObject, question: event.target.value });
  }

  function handleChangeCode(event) {
    setQuestionObject({ ...questionObject, code: event.target.value });
  }

  function handleChangeTried(event) {
    setQuestionObject({ ...questionObject, triedalready: event.target.value });
  }

  function handleChangeUnderstand(event) {
    setQuestionObject({
      ...questionObject,
      whatdontunderstand: event.target.value,
    });
  }

  return (
    <div>
      <h2 className="titleQuestions">Ask Your Question</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitClick();

          // navigate(`/questions/${questionId}`);
        }}
        className="question-input"
      >
        <h3>Title:</h3>
        <input onChange={handleChangeTitle} value={questionObject.title} />
        <h3>Your Name:</h3>
        <input onChange={handleChangeName} value={questionObject.name} />
        <h3>Your Question:</h3>
        <textarea
          name="content"
          id="form-question"
          onChange={handleChangeQuestion}
          value={questionObject.question}
        />
        <h3>Do you have code?:</h3>
        <textarea
          name="content"
          id="form-question"
          onChange={handleChangeCode}
          value={questionObject.code}
        />
        <h3>What have you tired already?:</h3>
        <textarea
          name="content"
          id="form-question"
          onChange={handleChangeTried}
          value={questionObject.triedalready}
        />
        <h3>Your Comments:</h3>
        <textarea
          name="content"
          id="form-question"
          onChange={handleChangeUnderstand}
          value={questionObject.whatdontunderstand}
        />
        <button className="buttonQuestionInput">Submit</button>
      </form>
    </div>
  );
}

export default QuestionInput;
