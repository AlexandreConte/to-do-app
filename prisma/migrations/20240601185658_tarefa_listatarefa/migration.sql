-- CreateTable
CREATE TABLE "ListaTarefa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tarefa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "criada" DATETIME NOT NULL,
    "atualizada" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prazo" DATETIME,
    "concluida" BOOLEAN NOT NULL DEFAULT false,
    "listaId" TEXT,
    CONSTRAINT "Tarefa_listaId_fkey" FOREIGN KEY ("listaId") REFERENCES "ListaTarefa" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
