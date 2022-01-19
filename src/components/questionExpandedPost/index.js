function QuestionExpanded({
  title,
  name,
  question,
  code,
  triedAlready,
  whatDontUnderstand,
}) {
  return (
    <div className="questionPost">
      <h2>Title: {title}</h2>
      <h3>Author: {name}</h3>
      <p>Question: {question}</p>
      <h4>Do you have code?</h4>
      <code>{code}</code>
      <p>What have you tried already? {triedAlready}</p>
      <p>What dont you understand?{whatDontUnderstand}</p>
    </div>
  );
}
export default QuestionExpanded;
