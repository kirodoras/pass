import joi from "joi";
import * as usersTypes from "../types/users.types";

const usersSchema = joi.object<usersTypes.User>({
  email: joi.string().email().required(),
  password: joi.string().min(10).required(),
});

export default usersSchema;
