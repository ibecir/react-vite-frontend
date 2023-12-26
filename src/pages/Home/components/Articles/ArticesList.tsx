import { useEffect, useState, useRef } from "react";
import { Article } from "../../../../utils/types";
import { BASE_URL } from "../../../../constants";
import { ArticleService } from "../../../../services";

const ArticesList = () => {
  const [articles, setArticles] = useState<Article[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [page, setPage] = useState(0);
  const abortController = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchArticlesSync = async () => {
      abortController.current?.abort();
      abortController.current = new AbortController();
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/articles/?page=${page}`, {
          signal: abortController.current.signal,
        });
        const data = (await response.json()) as Article[];
        setArticles(data);
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("ABORTED");
          return;
        }
        setError(error);
      } finally {
        console.log("FINALLY");
        setIsLoading(false);
      }
    };

    const fetchArticlesChain = () => {
      fetch(`${BASE_URL}/articles/?page=${page}`)
        .then((response) => {
          response.json().then((data) => {
            setArticles(data);
            setIsLoading(false);
          });
        })
        .catch((error) => {
          setError(error);
          error?.handleGlobally && error.handleGlobally();
        })
        .finally(() => {
          console.log("FINALLY");
          setIsLoading(false);
        });
    };

    fetchArticlesChain();
  }, [page]);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>BECIREEEE</div>}

      {!isLoading && (
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Load more
          </button>
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
                    <h5 className="mb-1">{article?.title}</h5>
                    <small>{article?.createdAt}</small>
                  </div>
                  <p className="mb-1">{article?.content}</p>
                  <small>{article?.thumbnailUrl}</small>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticesList;
