import { Request, Response } from "express";
import * as wifisServices from "../services/wifis.services";
import * as wifisTypes from "../types/wifis.types";

export async function create(req: Request, res: Response) {
  const { network_name, network_password, tittle } = req.body;
  const user_id = res.locals.user_id;
  const wifi: wifisTypes.Wifi = {
    network_name,
    network_password,
    tittle,
    user_id,
  };

  await wifisServices.create(wifi);
  res.sendStatus(201);
}
