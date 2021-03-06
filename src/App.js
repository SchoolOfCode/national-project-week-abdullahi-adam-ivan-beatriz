import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import QuestionExpanded from "./components/questionExpandedPost";
import QuestionInput from "./components/questionInput";
import QuestionList from "./components/questionList";
import TopHeadlinesList from "./components/articleList";
import { helpDevLinks } from "./testData";

function App() {
  let navigate = useNavigate();
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
    setQuestionId(data.payload[0].question_id);
    console.log(questionId);
    alert("Your question has been posted");
    setQuestionObject({
      title: "",
      code: "",
      name: "",
      question: "",
      triedalready: "",
      whatdontunderstand: "",
    });
    // navigate(`/questions/${questionId}`);
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
    setCommentObject({ name: "", comment: "" });
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
      <nav className="navbar">
        <Link to="/">
          <h1 className="navbar-links page-title">N00B OverFlow</h1>
        </Link>
        <Link to="/">
          <h1 className="navbar-links">Home</h1>
        </Link>
        <Link to="/Profile">
          <h1 className="navbar-links"> Profile</h1>
        </Link>
        <Link to="/articles">
          <h1 className="navbar-links">Articles</h1>
        </Link>
        <Link to="/questions/askquestion">
          <h1 className="navbar-links">Ask A Question</h1>
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
              questionId={questionId}
            />
          }
        />
        <Route
          path={"/articles"}
          element={<TopHeadlinesList articles={helpDevLinks} />}
        />
        <Route
          path="Profile"
          element={<h2 className="titleQuestions">Coming Soon</h2>}
        />
      </Routes>
    </div>
  );
}

export default App;
