import { Request, Response } from "express";
import * as credentialsService from "../services/credentialsServices";
import * as credentialsTypes from "../types/credentialsTypes";

export async function create(req: Request, res: Response) {
  const { url, url_user, url_password, tittle } = req.body;
  const user_id = res.locals.user_id;
  const credential: credentialsTypes.Credential = {
    user_id,
    url,
    url_user,
    url_password,
    tittle,
  };
  await credentialsService.create(credential);
  res.sendStatus(201);
}

export async function findById(req: Request, res: Response) {
  const { id } = req.params;
  const user_id = res.locals.user_id;
  const credential = await credentialsService.findById(Number(id), user_id);
  res.send(credential);
}

export async function findAll(req: Request, res: Response) {
  const user_id = res.locals.user_id;
  const credentials = await credentialsService.findAll(user_id);
  res.send(credentials);
}

export async function deleteById(req: Request, res: Response) {
  const { id } = req.params;
  const user_id = res.locals.user_id;
  await credentialsService.deleteById(Number(id), user_id);
  res.sendStatus(204);
}
