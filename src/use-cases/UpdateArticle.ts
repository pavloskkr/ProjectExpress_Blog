import {IArticleRepository} from "../domain/interfaces/IArticleRepository";
import {Article} from "../domain/entities/Article";


export class UpdateArticle {
    constructor(private articleRepository: IArticleRepository) {
    }

    async execute(article: Article): Promise<void> {
        await this.articleRepository.updateArticle(article);
    }
}