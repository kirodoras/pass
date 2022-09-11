import { Router } from "express";
import * as cardsController from "../controllers/cards.controller";
import * as schemaValidator from "../middlewares/schemaValidator.middleware";
import cardsSchema from "../schemas/cards.schema";
import { tokenValidator } from "../middlewares/tokenValidator.middleware";
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
