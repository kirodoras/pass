import { Router } from "express";
import * as credentialsController from "../controllers/credentialsController";
import * as schemaValidator from "../middlewares/schemaValidatorMiddleware";
import credentialsSchema from "../schemas/credentialsSchema";
import { tokenValidator } from "../middlewares/tokenValidatorMiddleware";
const CredentialsRouter = Router();
const PATH = "/credentials";

CredentialsRouter.use(tokenValidator);
CredentialsRouter.post(
  `${PATH}/create`,
  schemaValidator.body(credentialsSchema),
  credentialsController.create
);
CredentialsRouter.get(`${PATH}/search/:id`, credentialsController.findById);
CredentialsRouter.get(`${PATH}/search`, credentialsController.findAll);
CredentialsRouter.delete(
  `${PATH}/delete/:id`,
  credentialsController.deleteById
);

export default CredentialsRouter;
