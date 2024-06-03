"use server"
import ListaTarefa from "@/core/model/ListaTarefa"
import RepositorioListas from "./RepositorioListas"

export default async function criarLista(usuarioId: string, titulo: string) {
  const lista = new ListaTarefa(titulo, usuarioId)
  RepositorioListas.criarLista(lista)
}