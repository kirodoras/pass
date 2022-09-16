import joi from "joi";
import * as credentialsTypes from "../types/credentialsTypes";

const credentialsSchema = joi.object<credentialsTypes.Credential>({
  url: joi.string().uri().required(),
  url_user: joi.string().required(),
  url_password: joi.string().required(),
  tittle: joi.string().required(),
});

export default credentialsSchema;
