import Pagina from "@/app/components/template/Pagina";
import UsuarioContext from "@/app/data/context/useUsuario";
import Usuario from "@/core/model/Usuario";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Page() {
  const usuario = useContext<Usuario | null>(UsuarioContext)
  
  const router = useRouter()

  if (!usuario) {
    router.replace("/login")
    return
  }

  return (
    <Pagina usuario={usuario}>
      ola
    </Pagina>
  )
}