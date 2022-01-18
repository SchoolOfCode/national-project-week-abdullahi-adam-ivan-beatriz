import Comment from "../Comment";

function CommentList({ comments }) {
  return (
    <div>
      {comments.map(function (author, index) {
        return <Comment {...author} key={index} />;
      })}
    </div>
  );
}

export default CommentList;
