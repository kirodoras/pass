import { Router } from "express";
import * as cardsController from "../controllers/cardsController";
import * as schemaValidator from "../middlewares/schemaValidatorMiddleware";
import cardsSchema from "../schemas/cardsSchema";
import { tokenValidator } from "../middlewares/tokenValidatorMiddleware";
const CardsRouter = Router();
const PATH = "/cards";

CardsRouter.use(tokenValidator);
CardsRouter.post(
  `${PATH}/create`,
  schemaValidator.body(cardsSchema),
  cardsController.create
);
CardsRouter.get(`${PATH}/search/:id`, cardsController.findById);
CardsRouter.get(`${PATH}/search`, cardsController.findAll);
CardsRouter.delete(`${PATH}/delete/:id`, cardsController.deleteById);

export default CardsRouter;
