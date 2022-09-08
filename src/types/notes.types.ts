import { Notes } from "@prisma/client";

type Note = Omit<Notes, "id">;

export { Notes, Note };
