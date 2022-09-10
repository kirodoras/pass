import { Request, Response } from "express";
import * as credentialsService from "../services/credentials.services";
import * as credentialsTypes from "../types/credentials.types";

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
