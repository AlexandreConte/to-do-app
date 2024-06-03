"use server"
import Tarefa from "@/core/model/Tarefa";
import RepositorioTarefas from "./RepositorioTarefas";

export default async function concluirTarefa(tarefa: Tarefa) {
  tarefa.completar()
  return await RepositorioTarefas.completarTarefa(tarefa)
}