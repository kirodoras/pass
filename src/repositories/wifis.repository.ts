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
