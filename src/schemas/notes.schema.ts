import joi from "joi";
import * as notesTypes from "../types/notes.types";

const notesSchema = joi.object<notesTypes.Note>({
  note: joi.string().max(1000).required(),
  tittle: joi.string().max(50).required(),
});

export default notesSchema;
