import { Cards } from "@prisma/client";

type Card = Omit<Cards, "id">;

export { Cards, Card };
