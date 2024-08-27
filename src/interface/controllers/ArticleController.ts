import {Request, Response} from "express";
import {RedisArticleRepository} from "../../infrastructure/repositories/RedisArticleRepository";
import {GetAllArticles} from "../../use-cases/GetAllArticles";
import {Article} from "../../domain/entities/Article";
import {CreateArticle} from "../../use-cases/CreateArticle";

const articleRepository = new RedisArticleRepository();

export const getArticles = async (req: Request, res: Response): Promise<void> => {
    const getAllArticles = new GetAllArticles(articleRepository);
    const articles = await getAllArticles.execute();
    res.json(articles);
}

export const createArticle = async (req: Request, res: Response): Promise<void> => {
    const {id, title, content, author} = req.body
    const article = new Article(id, title, content, author, new Date());

    const createArticleUseCase = new CreateArticle(articleRepository);
    await createArticleUseCase.execute(article);

    res.status(201).json({ message: 'Article created successfully ' });
}