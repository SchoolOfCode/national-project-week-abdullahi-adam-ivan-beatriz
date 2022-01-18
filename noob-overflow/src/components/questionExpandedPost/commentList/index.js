import Comment from "../Comment";

function CommentList({ testComment }) {
  return (
    <div>
      {testComment.map(function (author, index) {
        return <Comment author={author} key={index} />;
      })}
    </div>
  );
}

export default CommentList;
