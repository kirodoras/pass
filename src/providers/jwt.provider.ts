import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET: string = process.env.JWT_SECRET || 'secret';
const JWT_EXPIRES_IN: number = 120
export function encode(payload: any) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function decode(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
