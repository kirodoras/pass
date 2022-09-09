-- CreateTable
CREATE TABLE "Wifis" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "network_name" TEXT NOT NULL,
    "network_password" TEXT NOT NULL,
    "tittle" TEXT NOT NULL,

    CONSTRAINT "Wifis_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Wifis" ADD CONSTRAINT "Wifis_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
