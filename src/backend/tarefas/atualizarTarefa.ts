"use server"
import Tarefa from "@/core/model/Tarefa";
import RepositorioTarefas from "./RepositorioTarefas";

export interface AtualizarTarefaProps {
  tarefa: Tarefa
  novoTitulo?: string
  novoPrazo?: Date
  listaId?: string
}

export default async function atualizarTarefa(props: AtualizarTarefaProps) {
  const {
    tarefa,
    listaId,
    novoPrazo,
    novoTitulo
  } = props

  tarefa.listaId = listaId ?? undefined
  tarefa.prazo = novoPrazo ?? undefined
  if (novoTitulo) {
    tarefa.titulo = novoTitulo
  }

  return await RepositorioTarefas.atualizar(tarefa)
}