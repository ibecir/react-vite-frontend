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
    ArticleService.getArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>BECIREEEE</div>}

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
