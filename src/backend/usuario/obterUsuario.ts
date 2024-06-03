"use server"
import RepositorioUsuario from "./RepositorioUsuario";

export default function obterUsuario(id: string) {
  return RepositorioUsuario.obterPorId(id)
}