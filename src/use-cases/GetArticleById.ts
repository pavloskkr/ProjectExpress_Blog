import {IArticleRepository} from "../domain/interfaces/IArticleRepository";
import {Article} from "../domain/entities/Article";


export class GetArticleById {
    constructor(private articleRepository: IArticleRepository) {}

    async execute(id: string): Promise<Article | null> {
        return  this.articleRepository.getArticleById(id);
    }
}
