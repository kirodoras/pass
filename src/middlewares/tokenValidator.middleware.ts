import { NextFunction, Request, Response } from "express";
import * as jwtProvider from "../providers/jwt.provider";
import * as usersServices from "../services/users.services";

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
  res.locals.user_id = +user.id;

  next();
}