function Comment({ author, comment }) {
  return (
    <div class="comment">
      <h3>{author}</h3>
      <p>{comment}</p>
    </div>
  );
}

export default Comment;
