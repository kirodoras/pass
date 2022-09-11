import * as cardsRepository from "../repositories/cards.repository";
import * as cardsTypes from "../types/cards.types";
import * as cryptrProvider from "../providers/cryptr.provider";

export async function create(card: cardsTypes.Card) {
  const { card_cvv, card_password } = card;
  const hash_cvv = cryptrProvider.encrypt(card_cvv);
  const hash_password = cryptrProvider.encrypt(card_password);
  card.card_cvv = hash_cvv;
  card.card_password = hash_password;
  await checkCardExistsByTittleAndUserId(card.user_id, card.tittle);
  await cardsRepository.create(card);
}

export async function checkCardExistsByTittleAndUserId(
  user_id: number,
  tittle: string
) {
  const card = await cardsRepository.findByTittleAndUserId(tittle, user_id);
  if (card) {
    throw {
      type: "conflict",
      message: "This card tittle already exists",
    };
  }
}

export async function findById(id: number, user_id: number) {
  const card = await cardsRepository.findById(id, user_id);
  if (!card) {
    throw { type: "not_found", message: "Card not found" };
  }
  const decrypted_cvv = cryptrProvider.decrypt(card.card_cvv);
  const decrypted_password = cryptrProvider.decrypt(card.card_password);
  card.card_cvv = decrypted_cvv;
  card.card_password = decrypted_password;
  return card;
}

export async function findAll(user_id: number) {
  const cards = await cardsRepository.findAll(user_id);
  const result = cards.map((card) => {
    card.card_cvv = cryptrProvider.decrypt(card.card_cvv);
    card.card_password = cryptrProvider.decrypt(card.card_password);
    return card;
  });
  return result;
}

export async function deleteById(id: number, user_id: number) {
  const card = await cardsRepository.findById(id, user_id);
  if (!card) {
    throw { type: "not_found", message: "Card not found" };
  }
  const { id: card_id } = card;
  await cardsRepository.deleteById(card_id);
}
