import { Router } from "express";
import * as usersController from "../controllers/users.controller";
import * as schemaValidator from "../middlewares/schemaValidator.middleware";
import usersSchema from "../schemas/users.schema";

const UsersRouter = Router();
const PATH = "/users";

UsersRouter.post(
  `${PATH}/signup`,
  schemaValidator.body(usersSchema),
  usersController.signUp
);

export default UsersRouter;