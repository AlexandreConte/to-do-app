import { v4 as uuidV4 } from "uuid"
import ListaTarefa from "./ListaTarefa";
import Tarefa from "./Tarefa";

export default class Usuario {
  private _id: string = uuidV4()
  _nome: string
  _email: string
  _tarefas: Tarefa[] = []
  _listas: ListaTarefa[] = []
  
  constructor(
    nome: string,
    email: string,
  ) {
    this._nome = nome
    this._email = email    
  }

  get id(): string {
    return this._id
  }

  get nome(): string {
    return this._nome
  }

  get email(): string {
    return this._email
  }

  get tarefas(): Tarefa[] {
    return this._tarefas
  }

  get listas(): ListaTarefa[] {
    return this._listas
  }

  set nome(nome: string) {
    this._nome = nome
  }

  set email(email: string) {
    this._email = email
  }

  adicionarTarefa(tarefa: Tarefa): void {
    this._tarefas.push(tarefa)
  }

  deletarTarefa(tarefa: Tarefa): void {
    this._tarefas.splice(this._tarefas.indexOf(tarefa), 1)
  }

  adicionarLista(lista: ListaTarefa): void {
    this._listas.push(lista)
  }

  deletarLista(lista: ListaTarefa): void {
    this._listas.splice(this._listas.indexOf(lista), 1)
  }
}