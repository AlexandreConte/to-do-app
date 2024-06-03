import { ButtonHTMLAttributes } from "react";

export interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  texto: string
  className?: string
  onClick?: () => void
}

export default function Botao(props: BotaoProps) {
  return (
    <div className="flex w-full my-10 items-center justify-center">
      <button {...props} onClick={props.onClick}
        className={`
          text-lg font-medium mx-4 py-2
          flex justify-center items-center flex-1
          rounded-md max-w-[450px]
          ${props.className ?? ""}
        `}>
        {props.texto}
      </button>
    </div>
  )
}