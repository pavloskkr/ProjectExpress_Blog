import {Router} from "express";
import {createArticle, getArticles} from "../controllers/ArticleController";

const router = Router();

router.get('/articles', getArticles);
router.post('/articles', createArticle);

export default router;