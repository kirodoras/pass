import { Router } from "express";
import * as notesController from "../controllers/notesController";
import * as schemaValidator from "../middlewares/schemaValidatorMiddleware";
import notesSchema from "../schemas/notesSchema";
import { tokenValidator } from "../middlewares/tokenValidatorMiddleware";
const NotesRouter = Router();
const PATH = "/notes";

NotesRouter.use(tokenValidator);
NotesRouter.post(
  `${PATH}/create`,
  schemaValidator.body(notesSchema),
  notesController.create
);
NotesRouter.get(`${PATH}/search/:id`, notesController.findById);
NotesRouter.get(`${PATH}/search`, notesController.findAll);
NotesRouter.delete(`${PATH}/delete/:id`, notesController.deleteById);

export default NotesRouter;
