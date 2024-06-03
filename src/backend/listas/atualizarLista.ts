"use server"
import ListaTarefa from "@/core/model/ListaTarefa"
import RepositorioListas from "./RepositorioListas"

export default async function atualizarLista(lista: ListaTarefa, novoTitulo: string) {
  if (novoTitulo) {
    lista.titulo = novoTitulo
    return await RepositorioListas.atualizar(lista)
  }
}