import { Routes, Route, Link } from "react-router-dom";
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
  const [comments, setComments] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionObject, setQuestionObject] = useState({
    title: "",
    code: "",
    name: "",
    question: "",
    triedalready: "",
    whatdontunderstand: "",
  });
  const [commentObject, setCommentObject] = useState({
    name: "",
    comment: "",
  });
  const [questionId, setQuestionId] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionAdded, setQuestionAdded] = useState(false);
  const [commentAdded, setCommentAdded] = useState(false);
  const [questionClicked, setQuestionClicked] = useState(false);

  async function fetchAllQuestion() {
    const response = await fetch(`${URL}/questions`, {
      method: "GET",
    });
    const data = await response.json();
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
    const data = await response.json();
    setComments(data.payload);
  }

  async function postComment() {
    const response = await fetch(`${URL}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...commentObject, questionId: questionId }),
    });

    const data = await response.json();
    console.log(commentObject, data.payload[0]);
    setComments([...comments, data.payload[0]]);
  }

  useEffect(() => {
    if (commentAdded) {
      postComment();
      setCommentAdded(false);
    }
  }, [commentAdded]);

  function addComment(comment) {
    setCommentAdded(true);
  }

  function addQuestions(question) {
    if (questions.includes(question)) {
      return;
    }
    setQuestionAdded(true);
    // all form fields returned as an object allows us to spread and place the new data at the end of our array
  }

  function handleQuestionClick(id) {
    setQuestionId(id);
    setQuestionClicked(true);
    console.log(questionId, comments);
  }

  useEffect(() => {
    if (questionClicked) {
      getComments();
      setQuestionClicked(false);
    }
  }, [questionClicked]);

  return (
    <div>
      <nav>
        <Link to="/">
          <h1>NOOBOVERFLOW</h1>
        </Link>
        <Link to="/questions/askquestion">
          <button>askQuestion</button>
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <QuestionList
              questions={questions}
              handleClick={handleQuestionClick}
              setQuestionIndex={setQuestionIndex}
            />
          }
        />
        <Route
          path={`/questions/${questionId}`}
          element={
            <QuestionExpanded
              {...questions[questionIndex]}
              commentObject={commentObject}
              setCommentObject={setCommentObject}
              onSubmitClick={addComment}
              questionId={questionId}
              comments={comments}
            />
          }
        />
        <Route
          path={"/questions/askquestion"}
          element={
            <QuestionInput
              questionObject={questionObject}
              setQuestionObject={setQuestionObject}
              onSubmitClick={addQuestions}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
