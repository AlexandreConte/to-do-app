import Link from "next/link"
import { ElementType } from "react"

export interface AsideItemProps {
  texto: string
  icone: ElementType
  url: string
}

export default function AsideItem(props: AsideItemProps) {
  return (
    <Link href={props.url}>
      <div className="flex items-center gap-2 hover:bg-blue-950 px-4 py-4">
        <props.icone stroke={1} />
        <span>{props.texto}</span>
      </div>
    </Link>
  )
}