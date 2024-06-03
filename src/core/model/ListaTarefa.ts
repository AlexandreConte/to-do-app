import { v4 as uuidV4 } from "uuid"
import Tarefa from "./Tarefa"

export default class ListaTarefa {
  private _id: string
  private _titulo: string
  private _tarefas: Tarefa[] = []
  private _usuarioId: string

  constructor(
    titulo: string,
    usuarioId: string
  ) {
    this._id = uuidV4()
    this._usuarioId = usuarioId
    this._titulo = titulo
  }

  get id(): string {
    return this._id
  }

  get titulo(): string {
    return this._titulo
  }

  get tarefas(): Tarefa[] {
    return this._tarefas
  }

  get usuarioId(): string {
    return this._usuarioId
  }

  set titulo(titulo: string) {
    this._titulo = titulo
  }

  removerTarefa(tarefa: Tarefa): void {
    this._tarefas.splice(this._tarefas.indexOf(tarefa), 1)
  }
}