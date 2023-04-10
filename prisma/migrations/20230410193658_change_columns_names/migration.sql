/*
  Warnings:

  - You are about to drop the `Categorias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContatoCategorias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contatos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContatoCategorias" DROP CONSTRAINT "ContatoCategorias_idCategoria_fkey";

-- DropForeignKey
ALTER TABLE "ContatoCategorias" DROP CONSTRAINT "ContatoCategorias_idContato_fkey";

-- DropTable
DROP TABLE "Categorias";

-- DropTable
DROP TABLE "ContatoCategorias";

-- DropTable
DROP TABLE "Contatos";

-- CreateTable
CREATE TABLE "Clientes" (
    "id" SERIAL NOT NULL,
    "Cliente" TEXT NOT NULL,
    "Telefone" TEXT NOT NULL,
    "Segmento" TEXT NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Segmentos" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Segmentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientesSegmentos" (
    "id" SERIAL NOT NULL,
    "idCliente" INTEGER NOT NULL,
    "idSegmento" INTEGER NOT NULL,

    CONSTRAINT "ClientesSegmentos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClientesSegmentos" ADD CONSTRAINT "ClientesSegmentos_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientesSegmentos" ADD CONSTRAINT "ClientesSegmentos_idSegmento_fkey" FOREIGN KEY ("idSegmento") REFERENCES "Segmentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
