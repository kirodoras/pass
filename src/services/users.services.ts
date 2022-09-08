import * as usersTypes from "../types/users.types";
import * as usersRepository from "../repositories/users.repository";
import * as bcryptProvider from "../providers/bcrypt.provider";

export async function signUp(user: usersTypes.User) {
  const { email, password } = user;
  await checkUserExists(email);
  const hash = await bcryptProvider.encode(password);
  await usersRepository.insert({ email, password: hash });
  console.log(user);
}

export async function checkUserExists(email: string) {
  const user = await usersRepository.select(email);
  if (user) {
    throw { type: "conflict", message: "User already exists" };
  }
}
