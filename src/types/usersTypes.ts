import { Users } from "@prisma/client";

type User = Omit<Users, "id">;

export { Users, User };
