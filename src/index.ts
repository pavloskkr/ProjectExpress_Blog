import express, {Application, Request, Response, NextFunction} from 'express';
import articleRoutes from "./interface/routes/ArticleRoutes";

const app: Application = express();

app.use(express.json());

app.use('/api', articleRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});