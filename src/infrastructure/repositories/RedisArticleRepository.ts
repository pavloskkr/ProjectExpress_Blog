import { IArticleRepository } from '../../domain/interfaces/IArticleRepository';
import { Article } from '../../domain/entities/Article';
import redisClient from '../database/RedisClient';

export class RedisArticleRepository implements IArticleRepository {
  private readonly ARTICLE_PREFIX = 'article:';

  async getAllArticles(): Promise<Article[]> {
    const keys = await redisClient.keys(`${this.ARTICLE_PREFIX}*`);
    const articles = await Promise.all(
      keys.map(async (key) => {
        const articleData = await redisClient.get(key);
        return articleData ? JSON.parse(articleData) : null;
      }),
    );

    return articles.filter((article) => article !== null) as Article[];
  }

  async createArticle(article: Article): Promise<void> {
    const key = `${this.ARTICLE_PREFIX}${article.id}`;
    await redisClient.set(key, JSON.stringify(article));
  }

  async getArticleById(id: string): Promise<Article> {
    const key = `${this.ARTICLE_PREFIX}${id}`;
    const articleData = await redisClient.get(key);
    return articleData ? JSON.parse(articleData) : null;
  }

  async updateArticle(article: Article): Promise<void> {
    const key = `${this.ARTICLE_PREFIX}${article.id}`;
    await redisClient.set(key, JSON.stringify(article));
  }

  async deleteArticle(id: string): Promise<void> {
    const key = `${this.ARTICLE_PREFIX}${id}`;
    await redisClient.del(key);
  }
}
