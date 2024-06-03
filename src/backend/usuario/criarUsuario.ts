"use server"
import Usuario from "@/core/model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";

export default function criarUsuario(nome: string, email: string) {
  const usuario = new Usuario(nome, email)
  RepositorioUsuario.criar(usuario)
}