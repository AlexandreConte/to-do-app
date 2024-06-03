import { v4 as uuidV4 } from "uuid"

export default class Tarefa {
  private readonly _id: string
  private _titulo: string
  private _criada: Date
  private _atualizada: Date
  private _concluida: boolean
  private _prazo: Date | undefined
  private _usuarioId: string
  private _listaId?: string | undefined

  constructor(
    usuarioId: string,
    titulo: string,
    prazo: Date | undefined = undefined,
    concluida: boolean = false,
  ) {
    this._id = uuidV4()
    this._titulo = titulo
    this._criada = new Date(Date.now())
    this._atualizada = new Date(Date.now())
    this._concluida = concluida
    this._prazo = prazo
    this._usuarioId = usuarioId
  }

  get id(): string {
    return this._id
  }

  get titulo(): string {
    return this._titulo
  }

  get criada(): Date {
    return this._criada
  }

  get atualizada(): Date {
    return this._atualizada
  }

  get concluida(): boolean {
    return this._concluida
  }

  get prazo(): Date | undefined {
    return this._prazo
  }

  get usuarioId(): string {
    return this._usuarioId
  }

  get listaId(): string | undefined {
    return this._listaId
  }

  set titulo(titulo: string) {
    this.titulo = titulo
    this._atualizada = new Date(Date.now())
  }

  set prazo(prazo: Date | undefined) {
    this._prazo = prazo
  }

  set listaId(listaId: string | undefined) {
    this._listaId = listaId
  }

  completar() {
    this._concluida = true
    this._atualizada = new Date()
  }

  alternarCompleto() {
    this._concluida = !this._concluida
    this._atualizada = new Date()
  }

  adicionarNumaLista(listaId: string) {
    this._listaId = listaId
  }
}