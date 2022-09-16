import client from "../database";
import * as notesTypes from "../types/notesTypes";

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
      user_id,
    },
  });
  return result;
}

export async function findById(id: number, user_id: number) {
  const result = await client.notes.findFirst({
    where: {
      id,
      user_id,
    },
  });
  return result;
}

export async function findAll(user_id: number) {
  const result = await client.notes.findMany({
    where: {
      user_id,
    },
  });
  return result;
}

export async function deleteById(id: number) {
  const result = await client.notes.delete({
    where: {
      id,
    },
  });
  return result;
}
