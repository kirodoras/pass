import { Wifis } from "@prisma/client";

type Wifi = Omit<Wifis, "id">;

export { Wifis, Wifi };
