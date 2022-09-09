import client from "../database";
import * as wifisTypes from "../types/wifis.types";

export async function insert(wifi: wifisTypes.Wifi) {
  const result = await client.wifis.create({
    data: wifi,
  });
  return result;
}

export async function findById(id: number, user_id: number) {
  const result = await client.wifis.findFirst({
    where: {
      id,
      user_id,
    },
  });
  return result;
}

export async function findAll(user_id: number) {
  const result = await client.wifis.findMany({
    where: {
      user_id,
    },
  });
  return result;
}

export async function deleteById(id: number) {
  const result = await client.wifis.delete({
    where: {
      id,
    },
  });
  return result;
}
