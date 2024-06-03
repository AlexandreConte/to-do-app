import Link from "next/link";

export default function Landing() {
  return (
    <div className="w-full">
      <h1 className="text-2xl my-10 text-white font-extrabold text-center">
        Gerenciador de tarefas
      </h1>
      {/* TODO: LANDING PAGE */}
      <div className="flex flex-col text-white text-center ">
        <Link href="usuario" className="">
          Cadastrar
        </Link>
        <Link href="login">
          Login
        </Link>
      </div>
    </div>
  )
}