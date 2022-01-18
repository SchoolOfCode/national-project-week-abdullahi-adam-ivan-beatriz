import { useState } from "react";
import "./App.css";
import { testData, testComment } from "./testData";
import QuestionExpanded from "./components/questionExpandedPost";
import CommentList from "./components/questionExpandedPost/commentList";
import QuestionInput from "./components/questionInput";
import CommentInput from "./components/questionExpandedPost/commentInput";

function App() {
  //storing both comments and questions in state allows us to rerender on change
  const [comments, setComments] = useState(testComment);
  const [questions, setQuestions] = useState(testData);

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
    setQuestions([...questions, question]); // all form fields returned as an object allows us to spread and place the new data at the end of our array
    console.log(questions);
  }

  return (
    <div>
      <QuestionInput onSubmitClick={addQuestions} />
      <QuestionExpanded {...questions[0]} />
      <CommentList comments={comments} />
      <CommentInput onSubmitClick={addComment} />
    </div>
  );
}

export default App;
