import {RedisArticleRepository} from "../infrastructure/repositories/RedisArticleRepository";
import {IArticleRepository} from "../domain/interfaces/IArticleRepository";
import {Article} from "../domain/entities/Article";


export class GetAllArticles {

    constructor(private articleRepository: IArticleRepository) {}

    async execute(): Promise<Article[]> {
        return await this.articleRepository.getAllArticles();
    }
}