import "./App.css";
import { testData, testComment } from "./testData";
import QuestionExpanded from "./components/questionExpandedPost";

import CommentList from "./components/questionExpandedPost/commentList";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState(testComment);
  const [questions, setQuestions] = useState(testData);

  return (
    <div>
      <QuestionExpanded {...questions[0]} />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
