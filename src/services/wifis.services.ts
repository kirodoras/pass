import * as wifisRepository from "../repositories/wifis.repository";
import * as cryptrProvider from "../providers/cryptr.provider";
import * as wifisTypes from "../types/wifis.types";

export async function create(wifi: wifisTypes.Wifi) {
  const hash_password = cryptrProvider.encrypt(wifi.network_password);
  wifi.network_password = hash_password;
  await wifisRepository.insert(wifi);
}
