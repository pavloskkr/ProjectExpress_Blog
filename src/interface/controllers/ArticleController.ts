import {Request, Response} from "express";
import {RedisArticleRepository} from "../../infrastructure/repositories/RedisArticleRepository";
import {GetAllArticles} from "../../use-cases/GetAllArticles";
import {Article} from "../../domain/entities/Article";
import {CreateArticle} from "../../use-cases/CreateArticle";
import {UpdateArticle} from "../../use-cases/UpdateArticle";
import {DeleteArticle} from "../../use-cases/DeleteArticle";
import {GetArticleById} from "../../use-cases/GetArticleById";

const articleRepository = new RedisArticleRepository();

export const getArticles = async (req: Request, res: Response): Promise<void> => {
    const getAllArticles = new GetAllArticles(articleRepository);
    const articles = await getAllArticles.execute();
    res.json(articles);
}

export const getArticle = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params

    const getArticleById = new GetArticleById(articleRepository);
    const article = await getArticleById.execute(id);
    res.json(article);
}

export const createArticle = async (req: Request, res: Response): Promise<void> => {
    const {id, title, content, author} = req.body
    const article = new Article(id, title, content, author, new Date());

    const createArticleUseCase = new CreateArticle(articleRepository);
    await createArticleUseCase.execute(article);

    res.status(201).json({ message: 'Article created successfully ' });
}

export const updateArticle = async (req: Request, res: Response): Promise<void> => {
    const {id, title, content, author} = req.body
    const article = new Article(id, title, content, author, new Date());

    const updateArticleUseCase = new UpdateArticle(articleRepository);
    await updateArticleUseCase.execute(article);
    res.status(201).json({ message: 'Article updated successfully ' });
}

export const deleteArticle = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params

    const deleteArticleUseCase = new DeleteArticle(articleRepository);
    await deleteArticleUseCase.execute(id);

    res.status(201).json({ message: 'Article deleted successfully ' });
}

