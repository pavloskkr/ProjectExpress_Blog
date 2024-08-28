import {Router} from "express";
import {createArticle, deleteArticle, getArticle, getArticles, updateArticle} from "../controllers/ArticleController";

const router = Router();

router.get('/articles', getArticles);
router.get('/articles/:id', getArticle);
router.post('/articles', createArticle);
router.delete('/articles/:id', deleteArticle);
router.put('/articles', updateArticle);

export default router;