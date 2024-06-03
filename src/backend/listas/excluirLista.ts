"use server"
import RepositorioListas from "./RepositorioListas"

export default async function excluirLista(id: string) {
  return await RepositorioListas.excluirLista(id)
}