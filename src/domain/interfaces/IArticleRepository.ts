import {Article} from "../entities/Article";

export interface IArticleRepository {
    getAllArticles(): Promise<Article[]>;

    getArticleById(id: string): Promise<Article>;

    createArticle(article: Article): Promise<void>;

    deleteArticle(id: string): Promise<void>;

    updateArticle(article: Article): Promise<void>;
}