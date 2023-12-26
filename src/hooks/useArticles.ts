import { useQuery } from "react-query";
import { ArticleService } from "../services";

const useArticles = () => {
    return useQuery('articles', () => ArticleService.getArticles());
}

export default useArticles;