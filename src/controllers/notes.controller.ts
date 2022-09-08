import { Request, Response } from "express";
import * as notesServices from "../services/notes.services";
import * as notesTypes from "../types/notes.types";

export async function create(req: Request, res: Response) {
  const { tittle, note } = req.body;
  const user_id = res.locals.user_id;
  const noteObj: notesTypes.Note = { user_id, tittle, note };
  await notesServices.create(noteObj);
  res.sendStatus(201);
}
