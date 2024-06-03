"use server"
import RepositorioTarefas from "./RepositorioTarefas";

export default async function excluirTarefa(id: string) {
  return await RepositorioTarefas.excluirPorId(id)
}