import {NextFunction, Request, Response} from "express";
import {Article} from "../../domain/entities/Article";
import {DIContainer} from "../../infrastructure/DIContainer";

export const getArticles = async (req: Request, res: Response): Promise<void> => {
    const getAllArticles = DIContainer.getGetAllArticlesUseCase();
    const articles = await getAllArticles.execute();
    res.json(articles);
}

export const getArticle = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params

    const getArticleById = DIContainer.getGetArticleByIdUseCase()
    const article = await getArticleById.execute(id);
    res.json(article);
}

export const createArticle = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id, title, content, author} = req.body;

        if (!id || !title || !content || !author) {
            // Throwing a specific error with a custom message
            throw new Error("All fields are required");
        }

        const article = new Article(id, title, content, author, new Date());
        const createArticleUseCase = DIContainer.getCreateArticleUseCase();
        await createArticleUseCase.execute(article);

        res.status(201).json({message: 'Article created successfully '});
    } catch (error) {
        next(error);
    }
}

export const updateArticle = async (req: Request, res: Response): Promise<void> => {
    const {id, title, content, author} = req.body
    const article = new Article(id, title, content, author, new Date());

    const updateArticleUseCase = DIContainer.getUpdateArticleUseCase();
    await updateArticleUseCase.execute(article);
    res.status(201).json({message: 'Article updated successfully '});
}

export const deleteArticle = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params

    const deleteArticleUseCase = DIContainer.getDeleteArticleUseCase();
    await deleteArticleUseCase.execute(id);

    res.status(201).json({message: 'Article deleted successfully '});
}

