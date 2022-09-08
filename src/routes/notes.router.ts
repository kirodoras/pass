import { Router } from "express";
import * as notesController from "../controllers/notes.controller";
import * as schemaValidator from "../middlewares/schemaValidator.middleware";
import notesSchema from "../schemas/notes.schema";
import { tokenValidator} from "../middlewares/tokenValidator.middleware";
const NotesRouter = Router();
const PATH = "/notes";

NotesRouter.use(tokenValidator);
NotesRouter.post(
  `${PATH}/create`,
  schemaValidator.body(notesSchema),
  notesController.create
);

export default NotesRouter;
