/*
  Warnings:

  - You are about to drop the column `Cliente` on the `Clientes` table. All the data in the column will be lost.
  - You are about to drop the column `Segmento` on the `Clientes` table. All the data in the column will be lost.
  - You are about to drop the column `Telefone` on the `Clientes` table. All the data in the column will be lost.
  - Added the required column `cliente` to the `Clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `segmento` to the `Clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `Clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clientes" DROP COLUMN "Cliente",
DROP COLUMN "Segmento",
DROP COLUMN "Telefone",
ADD COLUMN     "cliente" TEXT NOT NULL,
ADD COLUMN     "segmento" TEXT NOT NULL,
ADD COLUMN     "telefone" TEXT NOT NULL;
