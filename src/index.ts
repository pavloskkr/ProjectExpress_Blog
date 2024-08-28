import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import articleRoutes from './interface/routes/ArticleRoutes';
import { errorHandler } from './interface/middleware/errorHandler';
import { logger } from './infrastructure/logger';

const app: Application = express();

app.use(express.json());

app.use('/api', articleRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
