import { useArticles } from "../../../../hooks";

const ArticleHooks = () => {
  const { data, error, isLoading, isError, refetch } = useArticles();

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error}</div>}

      {!isLoading && (
        <div>
          <div className="list-group">
            {data?.map((article) => {
              return (
                <a
                  href="#"
                  className="list-group-item list-group-item-action"
                  aria-current="true"
                  key={article.id}
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h2 className="mb-1">{article?.title}</h2>
                    <small>{article?.createdAt}</small>
                  </div>
                  <p className="mb-1">{article?.content}</p>
                  <small>
                    {article?.thumbnailUrl + " - " + article?.articleType}
                  </small>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleHooks;
