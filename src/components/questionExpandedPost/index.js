import CommentList from "./commentList";
import CommentInput from "./commentInput";
import Highlight from "react-highlight";

function QuestionExpanded({
  title,
  name,
  question,
  code,
  triedalready,
  whatdontunderstand,
  questionId,
  comments,
  commentObject,
  setCommentObject,
  onSubmitClick,
}) {
  return (
    <div className="expandedQuestion">
      <section className="questionPost">
        <h2 className="title"> {title}</h2>
        <h3> {name}</h3>
        <p>
          <b>Question:</b> {question}
        </p>
        <h4>Do you have code?</h4>
        <Highlight language="javascript">
          <code>{code}</code>
        </Highlight>
        <p>
          <b>What have you tried already?</b> {triedalready}
        </p>
        <p>
          <b>Your comment:</b>
          {" " + whatdontunderstand}
        </p>
      </section>
      <section className="comment-section">
        <CommentList questionId={questionId} comments={comments} />
        <CommentInput
          commentObject={commentObject}
          setCommentObject={setCommentObject}
          onSubmitClick={onSubmitClick}
        />
      </section>
    </div>
  );
}
export default QuestionExpanded;
