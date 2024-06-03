"use client"
import Pagina from "@/app/components/template/Pagina";
import UsuarioContext from "@/app/data/context/useUsuario";
import Usuario from "@/core/model/Usuario";
import { useContext } from "react";

export default function EditarSenha() {
  const usuario = useContext<Usuario | null>(UsuarioContext)

  return (
    <Pagina usuario={usuario}>
      <span className="text-white">Nada por aqui por enquanto</span>
      {/* TODO: PÁGINA DE RECUPERAÇÃO DE SENHA */}
    </Pagina>
  )
}