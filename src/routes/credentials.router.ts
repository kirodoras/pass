import { Router } from "express";
import * as credentialsController from "../controllers/credentials.controller";
import * as schemaValidator from "../middlewares/schemaValidator.middleware";
import credentialsSchema from "../schemas/credentials.schema";
import { tokenValidator } from "../middlewares/tokenValidator.middleware";
const CredentialsRouter = Router();
const PATH = "/credentials";

CredentialsRouter.use(tokenValidator);
CredentialsRouter.post(
  `${PATH}/create`,
  schemaValidator.body(credentialsSchema),
  credentialsController.create
);
CredentialsRouter.get(`${PATH}/search/:id`, credentialsController.findById);

export default CredentialsRouter;
