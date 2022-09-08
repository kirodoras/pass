import * as notesRepository from "../repositories/notes.repository";
import * as notesTypes from "../types/notes.types";

export async function create(noteObj: notesTypes.Note) {
  const { tittle, note, user_id } = noteObj;
  await checkNoteExistsByTittleAndUserId(tittle, user_id);
  await notesRepository.insert(noteObj);
  console.log(noteObj);
}

export async function checkNoteExistsByTittleAndUserId(tittle: string, user_id: number) {
  const note = await notesRepository.findByTittleAndUserId(tittle, user_id);
  if (note) {
    throw { type: "conflict", message: "This note tittle already exists" };
  }
}
