"use client"
import Usuario from "@/core/model/Usuario";
import { createContext } from "react";
import usuarios from "../constants/usuarios";

const UsuarioContext = createContext<Usuario | null>(usuarios[0])

export default UsuarioContext

export interface UsuarioProviderProps {
  children: any
  usuario: Usuario
}

export function UsuarioProvider(props: UsuarioProviderProps) {
  return (
    <UsuarioContext.Provider value={props.usuario}>
      {props.children}
    </UsuarioContext.Provider>
  )
}