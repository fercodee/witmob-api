/*
  Warnings:

  - You are about to drop the `Contato` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Contato";

-- CreateTable
CREATE TABLE "Contatos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "categorias" TEXT NOT NULL,

    CONSTRAINT "Contatos_pkey" PRIMARY KEY ("id")
);
