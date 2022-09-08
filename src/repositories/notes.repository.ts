import client from "../database";
import * as notesTypes from "../types/notes.types";

export async function insert(note: notesTypes.Note) {
  const result = await client.notes.create({
    data: note,
  });
  return result;
}

export async function findByTittleAndUserId(tittle: string, user_id: number) {
  const result = await client.notes.findFirst({
    where: {
      tittle,
      user_id
    },
  });
  return result;
}
