import Usuario from "@/core/model/Usuario";
import Input from "../../Shared/Input";
import { useState } from "react";
import Botao from "../../Shared/Botao";
import BemVindo from "../../Shared/BemVindo";
import Link from "next/link";

export interface UsuarioProps {
  usuario: Usuario
}

export default function EditarUsuario(props: UsuarioProps) {
  const [nome, setNome] = useState<string>(props.usuario.nome)
  const [email, setEmail] = useState<string>(props.usuario.email)
  const [senha, setSenha] = useState<string>("")

  function atualizarUsuario() {
    if (!senha) {
      //TODO: Mensagem ao usuario
      return
    }

    if (nome.trim().length === 0) {
      //TODO: Mensagem ao usuario
      return
    }

    if (email.trim().length === 0) {
      //TODO: Mensagem ao usuario
    }

    const nomeFoiAlterado = nome !== props.usuario.nome
    const emailFoiAlterado = email !== props.usuario.email
    if (nomeFoiAlterado || emailFoiAlterado) {
      //TODO: ALTERAR
    }
  }

  return (
    <div className="flex-1">
      <BemVindo nome={props.usuario.nome} />
      <div className="w-full flex flex-col items-center">
        <div className="text-white text-xl font-semibold my-6">Editando seus dados: </div>
        <Input
          label="Nome:"
          value={nome}
          type="text"
          onChange={e => setNome(e.target.value)}
        />
        <Input
          label="Email:"
          value={email}
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          label="Senha atual:"
          value={senha}
          type="password"
          onChange={e => setSenha(e.target.value)}
        />
        <Botao
          texto="Atualizar dados"
          className="bg-white text-black hover:bg-zinc-200 transition-colors"
          onClick={atualizarUsuario}
        />
        <Link href="/senha" className="text-lg text-white hover:text-black transition-colors">
          Esqueci minha senha
        </Link>
      </div>
    </div>
  )
}