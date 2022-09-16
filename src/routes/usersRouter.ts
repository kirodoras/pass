import { Router } from "express";
import * as usersController from "../controllers/usersController";
import * as schemaValidator from "../middlewares/schemaValidatorMiddleware";
import usersSchema from "../schemas/usersSchema";

const UsersRouter = Router();
const PATH = "/users";

UsersRouter.post(
  `${PATH}/signup`,
  schemaValidator.body(usersSchema),
  usersController.signUp
);

UsersRouter.post(
  `${PATH}/signin`,
  schemaValidator.body(usersSchema),
  usersController.signIn
);

export default UsersRouter;
