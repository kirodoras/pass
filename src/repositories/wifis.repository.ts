import client from "../database";
import * as wifisTypes from "../types/wifis.types";

export async function insert(wifi: wifisTypes.Wifi) {
  const result = await client.wifis.create({
    data: wifi,
  });
  return result;
}
