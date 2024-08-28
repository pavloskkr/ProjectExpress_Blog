import yamljs from "yamljs";
import swaggerUi from "swagger-ui-express";
import { Application, Express } from 'express';
import path from 'path';

function setupSwagger(app: Application) {
  const swaggerDocument = yamljs.load(path.resolve(__dirname, "../../swagger.yaml"));
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

export { setupSwagger };