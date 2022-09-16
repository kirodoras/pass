import joi from "joi";
import * as cardsTypes from "../types/cardsTypes";

const cardsSchema = joi.object<cardsTypes.Cards>({
  card_number: joi.string().required(),
  card_name: joi.string().required(),
  card_cvv: joi.string().required(),
  card_expirate: joi.string().required(),
  card_password: joi.string().required(),
  card_is_virtual: joi.boolean().required(),
  card_type: joi.string().valid("CREDIT", "DEBIT", "BOTH").required(),
  tittle: joi.string().required(),
});

export default cardsSchema;
