import { IArticleRepository } from '../domain/interfaces/IArticleRepository';

export class DeleteArticle {
  constructor(private articleRepository: IArticleRepository) {}

  async execute(id: string): Promise<void> {
    await this.articleRepository.deleteArticle(id);
  }
}
