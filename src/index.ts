import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import articleRoutes from './interface/routes/ArticleRoutes';
import { errorHandler } from './interface/middleware/errorHandler';
import { logger } from './infrastructure/logger';
import { setupSwagger } from './interface/swagger';
import path from 'path';

const app: Application = express();

app.use(express.json());

app.use('/api', articleRoutes);

app.use(errorHandler);

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

setupSwagger(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
