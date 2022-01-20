import CommentList from "./commentList";
import CommentInput from "./commentInput";
function QuestionExpanded({
  title,
  name,
  question,
  code,
  triedAlready,
  whatDontUnderstand,
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
        <p><b>Question:</b> {question}</p>
        <h4>Do you have code?</h4>
        <code>{code}</code>
        <p><b>What have you tried already?</b> {triedAlready}</p>
        <p><b>Your comment</b>{whatDontUnderstand}</p>
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
