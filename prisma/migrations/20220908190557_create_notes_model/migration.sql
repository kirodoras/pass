-- CreateTable
CREATE TABLE "Notes" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "note" TEXT NOT NULL,
    "tittle" TEXT NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
