function TopHeadlineItem({ title, url, tags }) {
  return (
    <div className="question-list-item">
      <a href={url} target="_blank">
        <h2 className="top_headline_h2">{title}</h2>
      </a>
    </div>
  );
}

export default TopHeadlineItem;
