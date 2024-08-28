import { IArticleRepository } from '../domain/interfaces/IArticleRepository';
import { Article } from '../domain/entities/Article';

export class CreateArticle {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(article: Article): Promise<void> {
    return await this.articleRepository.createArticle(article);
  }
}
