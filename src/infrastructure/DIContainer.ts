import { RedisArticleRepository } from './repositories/RedisArticleRepository';
import { GetAllArticles } from '../use-cases/GetAllArticles';
import { GetArticleById } from '../use-cases/GetArticleById';
import { DeleteArticle } from '../use-cases/DeleteArticle';
import { UpdateArticle } from '../use-cases/UpdateArticle';
import { CreateArticle } from '../use-cases/CreateArticle';

class DIContainer {
  private static articleRepository = new RedisArticleRepository();

  static getArticleRepository() {
    return this.articleRepository;
  }

  static getGetAllArticlesUseCase() {
    return new GetAllArticles(this.articleRepository);
  }

  static getGetArticleByIdUseCase() {
    return new GetArticleById(this.articleRepository);
  }

  static getCreateArticleUseCase() {
    return new CreateArticle(this.articleRepository);
  }

  static getUpdateArticleUseCase() {
    return new UpdateArticle(this.articleRepository);
  }

  static getDeleteArticleUseCase() {
    return new DeleteArticle(this.articleRepository);
  }
}

export { DIContainer };
