import client from "../database";
import * as credentialsTypes from "../types/credentials.types";

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
