import { Router } from "express";
import * as wifisController from "../controllers/wifisController";
import * as schemaValidator from "../middlewares/schemaValidatorMiddleware";
import wifisSchema from "../schemas/wifisSchema";
import { tokenValidator } from "../middlewares/tokenValidatorMiddleware";
const WifisRouter = Router();
const PATH = "/wifis";

WifisRouter.use(tokenValidator);
WifisRouter.post(
  `${PATH}/create`,
  schemaValidator.body(wifisSchema),
  wifisController.create
);
WifisRouter.get(`${PATH}/search/:id`, wifisController.findById);
WifisRouter.get(`${PATH}/search`, wifisController.findAll);
WifisRouter.delete(`${PATH}/delete/:id`, wifisController.deleteById);

export default WifisRouter;
