"use server"
import Tarefa from "@/core/model/Tarefa"
import RepositorioTarefas from "./RepositorioTarefas"

export default async function criarTarefa(usuarioId: string, tituloTarefa: string, prazo: Date | undefined) {
  const tarefa = new Tarefa(usuarioId, tituloTarefa, prazo)
  return await RepositorioTarefas.criar(tarefa)
}