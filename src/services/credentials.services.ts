import * as credentialsRepository from "../repositories/credentials.repository";
import * as cryptrProvider from "../providers/cryptr.provider";
import * as credentialsTypes from "../types/credentials.types";

export async function create(credential: credentialsTypes.Credential) {
  const { user_id, url_password, tittle } = credential;
  await checkCredentialExistsByTittleAndUserId(user_id, tittle);
  const hash_password = cryptrProvider.encrypt(url_password);
  credential.url_password = hash_password;
  await credentialsRepository.create(credential);
  console.log(credential);
}

export async function checkCredentialExistsByTittleAndUserId(
  user_id: number,
  tittle: string
) {
  const credential = await credentialsRepository.findByTittleAndUserId(
    tittle,
    user_id
  );
  if (credential) {
    throw {
      type: "conflict",
      message: "This credential tittle already exists",
    };
  }
}

export async function findById(id: number, user_id: number) {
  const credential = await credentialsRepository.findById(id, user_id);
  if (!credential) {
    throw { type: "not_found", message: "Credential not found" };
  }
  const decrypted_password = cryptrProvider.decrypt(credential.url_password);
  credential.url_password = decrypted_password;
  return credential;
}

export async function findAll(user_id: number) {
  const credentials = await credentialsRepository.findAll(user_id);
  const result = credentials.map((credential) => {
    credential.url_password = cryptrProvider.decrypt(credential.url_password);
    return credential;
  });
  return result;
}

export async function deleteById(id: number, user_id: number) {
  const credential = await credentialsRepository.findById(id, user_id);
  if (!credential) {
    throw { type: "not_found", message: "Credential not found" };
  }
  const { id: credential_id } = credential;
  await credentialsRepository.deleteById(credential_id);
}
