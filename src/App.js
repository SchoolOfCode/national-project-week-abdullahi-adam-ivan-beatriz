import { useState, useEffect } from "react";
import "./App.css";
import { testData, testComment } from "./testData";
import QuestionExpanded from "./components/questionExpandedPost";
import CommentList from "./components/questionExpandedPost/commentList";
import QuestionInput from "./components/questionInput";
import CommentInput from "./components/questionExpandedPost/commentInput";

function App() {
  const URL = "https://nooboverflow.herokuapp.com";
  //storing both comments and questions in state allows us to rerender on change
  const [comments, setComments] = useState(testComment);
  const [questions, setQuestions] = useState(testData);
  const [questionObject, setQuestionObject] = useState({
    title: "",
    code: "",
    name: "",
    question: "",
    triedalready: "",
    whatdontunderstand: "",
  });
  const [questionAdded, setQuestionAdded] = useState(false);

  async function fetchAllQuestion() {
    const response = await fetch(`${URL}/questions`, {
      method: "GET",
      mode: "no-cors",
    });

    const data = await response.json();
    console.log(data, data.payload);
    setQuestions([...data.payload]);
  }

  useEffect(() => {
    fetchAllQuestion();
  }, []);

  async function postNewQuestion() {
    const response = await fetch(`${URL}/questions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
      body: JSON.stringify(questionObject),
    });
    console.log(questionObject);
    const data = await response.json();
    console.log(data);
    setQuestions([...questions, data.payload[0]]);
  }
  useEffect(() => {
    if (questionAdded) {
      postNewQuestion();
      setQuestionAdded(false);
    }
  }, [questionAdded]);

  function addComment(comment) {
    if (comments.includes(comment)) {
      return;
    }
    setComments([...comments, comment]); // put both the author and comment as the object returned from on submit click
  }

  function addQuestions(question) {
    if (questions.includes(question)) {
      return;
    }
    setQuestionAdded(true);
    setQuestions([...questions, question]); // all form fields returned as an object allows us to spread and place the new data at the end of our array
    console.log(questions);
  }

  return (
    <div>
      <QuestionInput
        questionObject={questionObject}
        setQuestionObject={setQuestionObject}
        onSubmitClick={addQuestions}
      />
      <QuestionExpanded {...questions[0]} />
      <CommentList comments={comments} />
      <CommentInput onSubmitClick={addComment} />
    </div>
  );
}

export default App;
