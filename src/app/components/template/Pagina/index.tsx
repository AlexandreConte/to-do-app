import Usuario from "@/core/model/Usuario";
import Aside from "../Aside/Aside";

export interface PaginaProps {
  children: any
  usuario: Usuario | null
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex">
      <Aside usuario={props.usuario} />
      {props.children}
    </div>
  )
}