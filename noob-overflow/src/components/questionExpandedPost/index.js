function QuestionExpanded({
  title,
  name,
  question,
  code,
  triedAlready,
  whatDontUnderstand,
}) {
  return (
    <div class="questionPost">
      <h2>{title}</h2>
      <h3>{name}</h3>
      <h3>{question}</h3>
      <p>{code} FIND SOLUTION TO CODE</p>
      <p>{triedAlready}</p>
      <p>{whatDontUnderstand}</p>
    </div>
  );
}
export default QuestionExpanded;
