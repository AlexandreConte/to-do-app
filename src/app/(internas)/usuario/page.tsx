"use client"
import { useContext } from "react";
import UsuarioContext from "@/app/data/context/useUsuario";
import EditarUsuario from "@/app/components/template/Usuario/Editar/EditarUsuario";
import CadastroUsuario from "@/app/components/template/Usuario/Cadastrar/CadastroUsuario";
import Usuario from "@/core/model/Usuario";
import Aside from "@/app/components/template/Aside/Aside";

export default function Page() {
  const usuario = useContext<Usuario | null>(UsuarioContext)

  return (
    <div className="flex min-w-full">
      <Aside usuario={usuario} />
      {usuario ? (
        <EditarUsuario usuario={usuario} />
      ) : (
        <CadastroUsuario />
      )}
    </div>
  )
}