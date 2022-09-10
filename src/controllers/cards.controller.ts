import { Request, Response } from "express";
import * as cardsServices from "../services/cards.services";
import * as cardsTypes from "../types/cards.types";

export async function create(req: Request, res: Response) {
  const card: cardsTypes.Card = req.body;
  card.user_id = res.locals.user_id;
  await cardsServices.create(card);
  res.sendStatus(201);
}
