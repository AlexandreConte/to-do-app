"use server"
import Tarefa from "@/core/model/Tarefa";
import RepositorioTarefas from "./RepositorioTarefas";

export default async function alternarCompletoTarefa(tarefa: Tarefa) {
  tarefa.alternarCompleto()
  return await RepositorioTarefas.alternarCompleto(tarefa)
}