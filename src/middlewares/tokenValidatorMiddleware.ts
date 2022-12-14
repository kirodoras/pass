import { NextFunction, Request, Response } from "express";
import * as jwtProvider from "../providers/jwtProvider";
import * as usersServices from "../services/usersServices";

type Payload = {
  email: string;
  iat: number;
  exp: number;
};

export async function tokenValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token: string | undefined = authorization?.replace("Bearer ", "");

  if (!token) {
    throw { type: "unauthorized", message: "Invalid request" };
  }

  const payload = jwtProvider.decode(token);
  const { email } = payload as Payload;

  if (!email) {
    throw { type: "unauthorized", message: "Invalid request" };
  }

  const user = await usersServices.checkUserNotExists(email);
  const user_id: number = +user.id;
  res.locals.user_id = user_id;

  next();
}
