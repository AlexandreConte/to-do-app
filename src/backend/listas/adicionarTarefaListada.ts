"use server"
import ListaTarefa from "@/core/model/ListaTarefa"
import RepositorioListas from "./RepositorioListas"
import Tarefa from "@/core/model/Tarefa"
import Backend from ".."

export default async function adicionarTarefaListada(
  lista: ListaTarefa,
  tituloTarefa: string,
  usuarioId: string,
  prazoTarefa: Date | undefined
) {
  const tarefa: Tarefa = await Backend.tarefa.criar(
    usuarioId,
    tituloTarefa,
    prazoTarefa
  )
  return await RepositorioListas.adicionarTarefa(lista, tarefa)
}