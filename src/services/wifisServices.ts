import * as wifisRepository from "../repositories/wifisRepository";
import * as cryptrProvider from "../providers/cryptrProvider";
import * as wifisTypes from "../types/wifisTypes";

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

export async function findAll(user_id: number) {
  const wifis = await wifisRepository.findAll(user_id);
  const result = wifis.map((wifi) => {
    wifi.network_password = cryptrProvider.decrypt(wifi.network_password);
    return wifi;
  });
  return result;
}

export async function deleteById(id: number, user_id: number) {
  const wifi = await wifisRepository.findById(id, user_id);
  if (!wifi) {
    throw { type: "not_found", message: "Wifi not found" };
  }
  const { id: wifi_id } = wifi;
  await wifisRepository.deleteById(wifi_id);
}
