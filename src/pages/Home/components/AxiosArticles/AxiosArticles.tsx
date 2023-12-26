import { useEffect, useState, useRef } from "react";
import { Article } from "../../../../utils/types";
import { ArticleService } from "../../../../services";

const AxiosArticles = () => {
  const [articles, setArticles] = useState<Article[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [page, setPage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    ArticleService.getArticles()
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        error.handleGlobally && error.handleGlobally();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && (
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Unable to render data!</h4>
          <p>{error?.response?.data?.message || error?.message}</p>
          <hr />
          <p className="mb-0">
            Problem happened and we use a nice way to present it.
          </p>
        </div>
      )}

      {!isLoading && (
        <div>
          <div className="list-group">
            {articles?.map((article) => {
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

export default AxiosArticles;
