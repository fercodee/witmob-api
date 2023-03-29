-- CreateTable
CREATE TABLE "Categorias" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContatoCategorias" (
    "id" SERIAL NOT NULL,
    "idContato" INTEGER NOT NULL,
    "idCategoria" INTEGER NOT NULL,

    CONSTRAINT "ContatoCategorias_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContatoCategorias" ADD CONSTRAINT "ContatoCategorias_idContato_fkey" FOREIGN KEY ("idContato") REFERENCES "Contatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContatoCategorias" ADD CONSTRAINT "ContatoCategorias_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
