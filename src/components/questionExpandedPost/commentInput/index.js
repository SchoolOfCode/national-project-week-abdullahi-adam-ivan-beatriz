function CommentInput({ onSubmitClick, commentObject, setCommentObject }) {
  function handleChangeName(event) {
    setCommentObject({ ...commentObject, name: event.target.value });
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
      <input onChange={handleChangeName} value={commentObject.name} />
      <h3>Your Comment:</h3>
      <input onChange={handleChangeComment} value={commentObject.comment} />
      <button>Submit</button>
    </form>
  );
}

export default CommentInput;
