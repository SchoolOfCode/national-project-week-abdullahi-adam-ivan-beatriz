function Comment({ name, comment }) {
  return (
    <div className="comment">
      <h3>{name}</h3>
      <p>{comment}</p>
    </div>
  );
}

export default Comment;
