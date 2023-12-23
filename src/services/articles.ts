import appAxios from "./appAxios";
import { Article } from "../utils/types";

const getArticles = async (): Promise<Article[]> => {
    return appAxios.get(`/articles/`).then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        });
}

export default { getArticles };