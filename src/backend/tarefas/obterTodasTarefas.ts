"use server"
import RepositorioTarefas from "./RepositorioTarefas"

export default async function obterTodasTarefas() {
  return await RepositorioTarefas.obterTodas()
}