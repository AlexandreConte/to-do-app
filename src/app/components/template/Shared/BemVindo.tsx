export interface BemVindoProps {
  nome: string
}

export default function BemVindo(props: BemVindoProps) {
  return (
    <h1 className="text-white text-center text-2xl font-black my-10 flex-1">Bem vindo &#40;a&#41;, {props.nome} 👋</h1>
  )
}