import * as notesRepository from "../repositories/notesRepository";
import * as notesTypes from "../types/notesTypes";

export async function create(noteObj: notesTypes.Note) {
  const { tittle, user_id } = noteObj;
  await checkNoteExistsByTittleAndUserId(tittle, user_id);
  await notesRepository.insert(noteObj);
  console.log(noteObj);
}

export async function checkNoteExistsByTittleAndUserId(
  tittle: string,
  user_id: number
) {
  const note = await notesRepository.findByTittleAndUserId(tittle, user_id);
  if (note) {
    throw { type: "conflict", message: "This note tittle already exists" };
  }
}

export async function findById(id: number, user_id: number) {
  const note = await notesRepository.findById(id, user_id);
  if (!note) {
    throw { type: "not_found", message: "Note not found" };
  }
  return note;
}

export async function findAll(user_id: number) {
  const notes = await notesRepository.findAll(user_id);
  return notes;
}

export async function deleteById(id: number, user_id: number) {
  const note = await notesRepository.findById(id, user_id);
  if (!note) {
    throw { type: "not_found", message: "Note not found" };
  }
  const { id: note_id } = note;
  await notesRepository.deleteById(note_id);
}
