-- CreateEnum
CREATE TYPE "enum_card_type" AS ENUM ('CREDIT', 'DEBIT', 'BOTH');

-- CreateTable
CREATE TABLE "Cards" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "card_number" TEXT NOT NULL,
    "card_name" TEXT NOT NULL,
    "card_cvv" TEXT NOT NULL,
    "card_expirate" TEXT NOT NULL,
    "card_password" TEXT NOT NULL,
    "card_is_virtual" BOOLEAN NOT NULL,
    "card_type" "enum_card_type" NOT NULL DEFAULT 'BOTH',
    "tittle" TEXT NOT NULL,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
