import Comment from "../Comment";

function CommentList({ comments, questionId }) {
  let commentArr = comments.filter((comment) => {
    return comment.question_id === questionId;
  });

  return (
    <div>
      {commentArr.map(function (comment, index) {
        console.log(comment);
        return <Comment {...comment} key={index} />;
      })}
    </div>
  );
}

export default CommentList;
