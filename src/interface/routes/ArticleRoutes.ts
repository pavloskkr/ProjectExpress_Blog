import {Router} from "express";
import {createArticle, deleteArticle, getArticle, getArticles, updateArticle} from "../controllers/ArticleController";
import {authenticateToken} from "../middleware/auth";

const router = Router();

router.get('/articles', authenticateToken, getArticles);
router.get('/articles/:id', getArticle);
router.post('/articles', createArticle);
router.delete('/articles/:id', deleteArticle);
router.put('/articles', updateArticle);

export default router;