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
    <div>
      <section className="questionPost">
        <h2>Title: {title}</h2>
        <h3>Author: {name}</h3>
        <p>Question: {question}</p>
        <h4>Do you have code?</h4>
        <code>{code}</code>
        <p>What have you tried already? {triedAlready}</p>
        <p>What dont you understand?{whatDontUnderstand}</p>
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
