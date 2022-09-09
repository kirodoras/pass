import * as wifisRepository from "../repositories/wifis.repository";
import * as cryptrProvider from "../providers/cryptr.provider";
import * as wifisTypes from "../types/wifis.types";

export async function create(wifi: wifisTypes.Wifi) {
  const hash_password = cryptrProvider.encrypt(wifi.network_password);
  wifi.network_password = hash_password;
  await wifisRepository.insert(wifi);
}

export async function findById(id: number, user_id: number) {
  const wifi = await wifisRepository.findById(id, user_id);
  if (!wifi) {
    throw { type: "not_found", message: "Wifi not found" };
  }
  const { network_password } = wifi;
  const decrypted_password = cryptrProvider.decrypt(network_password);
  wifi.network_password = decrypted_password;
  return wifi;
}
