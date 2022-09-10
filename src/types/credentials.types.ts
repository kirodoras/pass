import { Credentials } from "@prisma/client";

type Credential = Omit<Credentials, "id">;

export { Credentials, Credential };
