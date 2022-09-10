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
