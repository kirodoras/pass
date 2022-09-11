import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET: string = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN: string = "2h";
export function encode(payload: any) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function decode(token: string) {
  let payload: JwtPayload | string | undefined;
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      throw { type: "unauthorized", message: "Invalid token" };
    }
    payload = decoded;
  });
  return payload;
}
