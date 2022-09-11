import client from "../database";
import * as cardsTypes from "../types/cards.types";

export async function create(card: cardsTypes.Card) {
  const result = await client.cards.create({
    data: card,
  });
  return result;
}

export async function findByTittleAndUserId(tittle: string, user_id: number) {
  const result = await client.cards.findFirst({
    where: {
      tittle,
      user_id,
    },
  });
  return result;
}

export async function findById(id: number, user_id: number) {
  const result = await client.cards.findFirst({
    where: {
      id,
      user_id,
    },
  });
  return result;
}

export async function findAll(user_id: number) {
  const result = await client.cards.findMany({
    where: {
      user_id,
    },
  });
  return result;
}

export async function deleteById(id: number) {
  const result = await client.cards.delete({
    where: {
      id,
    },
  });
  return result;
}
