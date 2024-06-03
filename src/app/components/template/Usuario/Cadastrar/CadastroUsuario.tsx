import { IconUser } from "@tabler/icons-react";
import Input from "../../Shared/Input";
import Botao from "../../Shared/Botao";

export default function CadastroUsuario() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="text-2xl text-white  flex justify-center items-center gap-2 w-full py-4 mt-8">
        <IconUser stroke={2.5} size={40} />
        <h1 className="text-2xl font-bold my-10">
          Cadastro de Usuário
        </h1>
      </div>
      <Input
        label="Nome"
        type="text"
      />
      <Input
        label="Email"
        type="email"
      />
      <Input
        label="Senha"
        type="password"
      />
      <Botao
        texto="Cadastrar"
        className="
          bg-white text-black
          hover:bg-zinc-200 transition-colors
          focus:bg-zinc-200
        "/>
    </div>
  )
}