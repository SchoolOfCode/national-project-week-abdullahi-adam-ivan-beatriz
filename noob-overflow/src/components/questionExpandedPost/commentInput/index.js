import { useState } from "react";

function CommentInput({ onSubmitClick }) {
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");

  function handleChangeAuthor(event) {
    setAuthor(event.target.value);
  }

  function handleChangeComment(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    // Stop the page from refreshing as the form will try and submit and refresh by default
    event.preventDefault();
    onSubmitClick({ author: author, comment: comment });
  }
  return (
    <form onSubmit={handleSubmit} className="comment-input">
      <h3>Your Name:</h3>
      <input onChange={handleChangeAuthor} value={author} />
      <h3>Your Comment:</h3>
      <input onChange={handleChangeComment} value={comment} />
      <button>Submit</button>
    </form>
  );
}

export default CommentInput;
