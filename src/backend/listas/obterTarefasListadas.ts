"use server"
import RepositorioListas from "./RepositorioListas"

export default async function obterTarefasListadas(idLista: string) {
  return await RepositorioListas.obterTarefas(idLista)
}