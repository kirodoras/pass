import client from "../database";
import * as usersTypes from "../types/usersTypes";

export async function insert(user: usersTypes.User) {
  const result = await client.users.create({
    data: user,
  });
  return result;
}

export async function select(email: string) {
  const result = await client.users.findUnique({
    where: { email },
  });
  return result;
}