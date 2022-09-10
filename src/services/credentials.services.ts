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
