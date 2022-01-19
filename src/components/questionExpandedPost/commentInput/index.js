function CommentInput({ onSubmitClick, commentObject, setCommentObject }) {
  function handleChangeAuthor(event) {
    setCommentObject({ ...commentObject, author: event.target.value });
  }

  function handleChangeComment(event) {
    setCommentObject({ ...commentObject, comment: event.target.value });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitClick();
      }}
      className="comment-input"
    >
      <h3>Your Name:</h3>
      <input onChange={handleChangeAuthor} value={commentObject.author} />
      <h3>Your Comment:</h3>
      <input onChange={handleChangeComment} value={commentObject.comment} />
      <button>Submit</button>
    </form>
  );
}

export default CommentInput;
