import dotenv from "dotenv";
import Cryptr from "cryptr";

dotenv.config();
const CRYPTR_SECRET: string = process.env.CRYPTR_SECRET || "secret";
const cryptr = new Cryptr(CRYPTR_SECRET);

export function encrypt(value: string) {
  const encryptedString = cryptr.encrypt(value);
  return encryptedString;
}

export function decrypt(value: string) {
  const decryptedString = cryptr.decrypt(value);
  return decryptedString;
}
