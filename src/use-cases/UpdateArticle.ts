import {IArticleRepository} from "../domain/interfaces/IArticleRepository";
import {Article} from "../domain/entities/Article";


export class UpdateArticle {
    constructor(private articleRepository: IArticleRepository) {
    }

    async execute(id: string, article: Article): Promise<void> {
        await this.articleRepository.updateArticle(id, article);
    }
}