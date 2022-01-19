import { useState, useEffect } from "react";
import "./App.css";
import { testData, testComment } from "./testData";
import QuestionExpanded from "./components/questionExpandedPost";
import CommentList from "./components/questionExpandedPost/commentList";
import QuestionInput from "./components/questionInput";
import CommentInput from "./components/questionExpandedPost/commentInput";
import QuestionList from "./components/questionList";

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
  const [commentObject, setCommentObject] = useState({
    author: "",
    comment: "",
  });
  const [questionId, setQuestionId] = useState(0);
  const [questionAdded, setQuestionAdded] = useState(false);
  const [commentAdded, setCommentAdded] = useState(false);
  const [questionClicked, setQuestionClicked] = useState(false);

  async function fetchAllQuestion() {
    const response = await fetch(`${URL}/questions`, {
      method: "GET",
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

  async function getComments() {
    const response = await fetch(`${URL}/comments/${questionId}`, {
      method: "GET",
    });
    const data = response.json();
    setComments(data.payload);
  }

  async function postComment() {
    const response = await fetch(`${URL}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...commentObject, questionId: questionId }),
    });
    const data = response.json();
    setComments([...comments, data.payload[0]]);
  }

  useEffect(() => {
    if (commentAdded) {
      postComment();
    }
  }, [commentAdded]);

  function addComment(comment) {
    if (comments.includes(comment)) {
      return;
    }
    setCommentAdded(true);
    // put both the author and comment as the object returned from on submit click
  }

  function addQuestions(question) {
    if (questions.includes(question)) {
      return;
    }
    setQuestionAdded(true);
    // all form fields returned as an object allows us to spread and place the new data at the end of our array
  }

  function handleQuestionClick(e) {
    setQuestionId(e.target.id);
    setQuestionClicked(true);
    console.log(e.target.id);
  }

  useEffect(() => {
    if (questionClicked) {
      getComments();
      setQuestionClicked(false);
    }
  }, [questionClicked]);

  return (
    <div>
      <QuestionList questions={questions} handleClick={handleQuestionClick} />
      <QuestionInput
        questionObject={questionObject}
        setQuestionObject={setQuestionObject}
        onSubmitClick={addQuestions}
      />
      <QuestionExpanded {...questions[0]} />
      <CommentList comments={comments} />
      <CommentInput
        commentObject={commentObject}
        setCommentObject={setCommentObject}
        onSubmitClick={addComment}
      />
    </div>
  );
}

export default App;
