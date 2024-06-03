/*
  Warnings:

  - Added the required column `usuarioId` to the `ListaTarefa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Tarefa` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT,
    "email" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ListaTarefa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "ListaTarefa_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ListaTarefa" ("id", "titulo") SELECT "id", "titulo" FROM "ListaTarefa";
DROP TABLE "ListaTarefa";
ALTER TABLE "new_ListaTarefa" RENAME TO "ListaTarefa";
CREATE TABLE "new_Tarefa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "criada" DATETIME NOT NULL,
    "atualizada" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prazo" DATETIME,
    "concluida" BOOLEAN NOT NULL DEFAULT false,
    "listaId" TEXT,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "Tarefa_listaId_fkey" FOREIGN KEY ("listaId") REFERENCES "ListaTarefa" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Tarefa_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tarefa" ("atualizada", "concluida", "criada", "id", "listaId", "prazo", "titulo") SELECT "atualizada", "concluida", "criada", "id", "listaId", "prazo", "titulo" FROM "Tarefa";
DROP TABLE "Tarefa";
ALTER TABLE "new_Tarefa" RENAME TO "Tarefa";
PRAGMA foreign_key_check("ListaTarefa");
PRAGMA foreign_key_check("Tarefa");
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
