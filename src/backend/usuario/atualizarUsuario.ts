"use server"
import Usuario from "@/core/model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";

export default function atualizarUsuario(usuario: Usuario, novoNome: string) {
  usuario.nome = novoNome
  RepositorioUsuario.atualizar(usuario)
}