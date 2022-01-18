function Comment({ author, comment }) {
  return (
    <div className="comment">
      <h3>Author: {author}</h3>
      <p>{comment}</p>
    </div>
  );
}

export default Comment;
