import client from "../database";
import * as credentialsTypes from "../types/credentialsTypes";

export async function create(credential: credentialsTypes.Credential) {
  const result = await client.credentials.create({
    data: credential,
  });
  return result;
}

export async function findByTittleAndUserId(tittle: string, user_id: number) {
  const result = await client.credentials.findFirst({
    where: {
      tittle,
      user_id,
    },
  });
  return result;
}

export async function findById(id: number, user_id: number) {
  const result = await client.credentials.findFirst({
    where: {
      id,
      user_id,
    },
  });
  return result;
}

export async function findAll(user_id: number) {
  const result = await client.credentials.findMany({
    where: {
      user_id,
    },
  });
  return result;
}

export async function deleteById(id: number) {
  const result = await client.credentials.delete({
    where: {
      id,
    },
  });
  return result;
}
