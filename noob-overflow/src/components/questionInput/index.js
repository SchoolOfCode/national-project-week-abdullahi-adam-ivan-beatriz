import { useState } from "react";

function QuestionInput({ onSubmitClick }) {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [code, setCode] = useState("");
  const [triedAlready, setTriedAlready] = useState("");
  const [whatDontUnderstand, setWhatDontUnderstand] = useState("");

  function handleChangeTitle(event) {
    setTitle(event.target.value);
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeQuestion(event) {
    setQuestion(event.target.value);
  }

  function handleChangeCode(event) {
    setCode(event.target.value);
  }

  function handleChangeTried(event) {
    setTriedAlready(event.target.value);
  }
  function handleChangeUnderstand(event) {
    setWhatDontUnderstand(event.target.value);
  }

  function handleSubmit(event) {
    // Stop the page from refreshing as the form will try and submit and refresh by default
    event.preventDefault();
    onSubmitClick({
      title: title,
      name: name,
      question: question,
      code: code,
      triedAlready: triedAlready,
      whatDontUnderstand: whatDontUnderstand,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="question-input">
      <h3>Title:</h3>
      <input onChange={handleChangeTitle} value={title} />
      <h3>Your Name:</h3>
      <input onChange={handleChangeName} value={name} />
      <h3>Your Question:</h3>
      <input onChange={handleChangeQuestion} value={question} />
      <h3>Do you have code?:</h3>
      <input onChange={handleChangeCode} value={code} />
      <h3>What have you tired already?:</h3>
      <input onChange={handleChangeTried} value={triedAlready} />
      <h3>What dont you understand?:</h3>
      <input onChange={handleChangeUnderstand} value={whatDontUnderstand} />
      <button>Submit</button>
    </form>
  );
}

export default QuestionInput;
