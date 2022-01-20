import TopHeadlineItem from "../articleItem";

function TopHeadlinesList({ articles }) {
  return (
    <div>
      <h2 className="titleQuestions">Articles</h2>
      {articles.map(function (article, index) {
        return <TopHeadlineItem {...article} key={index} />;
      })}
    </div>
  );
}

export default TopHeadlinesList;
