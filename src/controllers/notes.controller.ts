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

export async function findById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const user_id = res.locals.user_id;
  const note = await notesServices.findById(id, user_id);
  res.send(note);
}

export async function findAll(req: Request, res: Response) {
  const user_id = res.locals.user_id;
  const notes = await notesServices.findAll(Number(user_id));
  res.send(notes);
}

export async function deleteById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const user_id = res.locals.user_id;
  await notesServices.deleteById(id, user_id);
  res.sendStatus(200);
}
