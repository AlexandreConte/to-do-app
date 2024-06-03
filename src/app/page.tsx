"use client"
import { useContext } from "react";
import Usuario from "@/core/model/Usuario";
import UsuarioContext from "./data/context/useUsuario";
import BemVindo from "./components/template/Shared/BemVindo";
import Pagina from "./components/template/Pagina";
import Landing from "./components/template/Landing";

export default function Home() {
  const usuario = useContext<Usuario | null>(UsuarioContext)

  return (
    <UsuarioContext.Provider value={usuario}>
      {usuario ? (
        <Pagina usuario={usuario}>
          <BemVindo nome={usuario.nome} />
        </Pagina>
      ) : (
        <Pagina usuario={usuario}>
          <Landing />
        </Pagina>
      )}
    </UsuarioContext.Provider>
  )
}