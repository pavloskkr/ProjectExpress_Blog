import express, {Application, Request, Response, NextFunction} from 'express';
import articleRoutes from "./interface/routes/ArticleRoutes";
import {errorHandler} from "./interface/middleware/errorHandler";

const app: Application = express();

app.use(express.json());

app.use('/api', articleRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});