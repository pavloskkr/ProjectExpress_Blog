import { Router } from 'express';
import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticles,
  updateArticle,
} from '../controllers/ArticleController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Retrieve a list of articles
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 */
router.get('/articles', authenticateToken, getArticles);

/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Retrieve a single article by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article ID
 *     responses:
 *       200:
 *         description: A single article
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 */
router.get('/articles/:id', getArticle);

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Create a new article
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       201:
 *         description: Article created successfully
 */
router.post('/articles', createArticle);

/**
 * @swagger
 * /articles/{id}:
 *   delete:
 *     summary: Delete an article by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article ID
 *     responses:
 *       200:
 *         description: Article deleted successfully
 */
router.delete('/articles/:id', deleteArticle);

/**
 * @swagger
 * /articles:
 *   put:
 *     summary: Update an existing article
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       200:
 *         description: Article updated successfully
 */
router.put('/articles', updateArticle);

export default router;
