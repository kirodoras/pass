import joi from "joi";
import * as credentialsTypes from "../types/credentials.types";

const credentialsSchema = joi.object<credentialsTypes.Credential>({
  url: joi.string().required(),
  url_user: joi.string().required(),
  url_password: joi.string().required(),
  tittle: joi.string().required(),
});

export default credentialsSchema;
