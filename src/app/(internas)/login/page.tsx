"use client"
import Pagina from "@/app/components/template/Pagina";
import Botao from "@/app/components/template/Shared/Botao";
import Input from "@/app/components/template/Shared/Input";
import UsuarioContext from "@/app/data/context/useUsuario";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Page() {
  const router = useRouter()
  
  const usuario = useContext(UsuarioContext)
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  if (usuario) {
    router.replace("/")
    return
  }

  function fazerLogin() {
    //TODO: FAZ LOGIN
  }

  return (
    <Pagina usuario={usuario}>
      <div className="w-full flex flex-col">
        <h2 className="text-xl text-white font-bold text-center w-full my-6">
          Página de Login
        </h2>
        <div>
          <Input 
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input 
            label="Senha"
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <Botao 
            texto="Entrar"
            className="bg-white text-black hover:bg-zinc-200 transition-colors"
            onClick={fazerLogin}
          />
        </div>
      </div>
    </Pagina>
  )
}