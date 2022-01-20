function QuestionInput({ onSubmitClick, questionObject, setQuestionObject }) {
  // const [title, setTitle] = useState(""); //stored each field of the form as a state, gives us nice utility with the setField function built in
  // const [name, setName] = useState("");
  // const [question, setQuestion] = useState("");
  // const [code, setCode] = useState("");
  // const [triedAlready, setTriedAlready] = useState("");
  // const [whatDontUnderstand, setWhatDontUnderstand] = useState("");

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitClick();
      }}
      className="question-input"
    >
      <h1>Ask a question</h1>
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
      <h3>What dont you understand?:</h3>
      <textarea
        name="content"
        id="form-question"
        onChange={handleChangeUnderstand}
        value={questionObject.whatdontunderstand}
      />
      <button className="buttonQuestionInput">Submit</button>
    </form>
  );
}

export default QuestionInput;
