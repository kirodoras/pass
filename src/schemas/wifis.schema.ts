import joi from "joi";
import * as wifisTypes from "../types/wifis.types";

const wifisSchema = joi.object<wifisTypes.Wifi>({
  network_name: joi.string().required(),
  network_password: joi.string().required(),
  tittle: joi.string().required(),
});

export default wifisSchema;
