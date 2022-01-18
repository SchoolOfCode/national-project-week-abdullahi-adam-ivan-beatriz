import "./App.css";
import { testData, testComment } from "./testData";
import QuestionExpanded from "./components/questionExpandedPost";
import Comment from "./components/questionExpandedPost/Comment";
import CommentList from "./components/questionExpandedPost/commentList";

function App() {
  // const [comments, setComments] = useState()
  // const [questions, setQuestions] = useState()
  return (
    <div>
      <QuestionExpanded {...testData[0]} />
      {/* <Comment {...testComment[0]} /> */}
      <CommentList {...testComment} />
    </div>
  );
}

export default App;
