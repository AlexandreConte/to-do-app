"use client"
import { IconHome, IconSubtask, IconTag, IconTags, IconUser } from "@tabler/icons-react";
import { Fragment, useState } from "react";
import Menu from "../Menu/Menu";
import CloseMenu from "../Menu/CloseMenu";
import AsideItem from "./AsideItem";
import Usuario from "@/core/model/Usuario";

export interface AsideProps {
  usuario: Usuario | null
}

export default function Aside(props: AsideProps) {
  const [showAside, setShowAside] = useState<boolean>(true)
  return (
    showAside ? (
      <aside className="flex flex-col gap-2 bg-blue-900 w-72 text-zinc-50 py-4 min-h-screen h-full">
        <CloseMenu
          onClick={() => setShowAside(false)}
        />
        <div className="flex justify-center items-center mx-4 py-8 select-none gap-1 text-xl">
          <IconSubtask size={50} stroke={2.5} />
          <h1 className="text-2xl font-extrabold text-center">Gerenciador de Tarefas</h1>
        </div>
        <AsideItem texto="Principal"
          icone={IconHome}
          url="/"
        />
        {props.usuario && (
          <Fragment>
            <AsideItem texto="Tarefas"
              icone={IconTag}
              url="/tarefas"
            />
            <AsideItem texto="Listas de Tarefas"
              icone={IconTags}
              url="/listas"
            />
          </Fragment>
        )}
        <AsideItem texto="Controle de Usuário"
          icone={IconUser}
          url="/usuario"
        />

      </aside>
    ) : (
      <Menu onClick={() => setShowAside(true)} />
    )
  )
}