import { Request, Response } from "express";
import * as usersServices from "../services/users.services";
import * as usersTypes from "../types/users.types";

export async function signUp(req: Request, res: Response) {
  const { email, password } = req.body;
  const user: usersTypes.User = { email, password };
  await usersServices.signUp(user);
  res.sendStatus(200);
}

export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;
  const user: usersTypes.User = { email, password };
  const token = await usersServices.signIn(user);
  res.send({ token });
}