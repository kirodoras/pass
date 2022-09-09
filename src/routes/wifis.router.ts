import { Router } from "express";
import * as wifisController from "../controllers/wifis.controller";
import * as schemaValidator from "../middlewares/schemaValidator.middleware";
import wifisSchema from "../schemas/wifis.schema";
import { tokenValidator } from "../middlewares/tokenValidator.middleware";
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
