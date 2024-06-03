"use client"
import ListaTarefa from "@/core/model/ListaTarefa"
import Repositorio from "../Repositorio"
import Tarefa from "@/core/model/Tarefa"

export default class RepositorioListas extends Repositorio {
  static async atualizar(lista: Partial<ListaTarefa>): Promise<Partial<ListaTarefa>> {
    return await this.db.listaTarefa.update({
      where: { 
        id: lista.id
      },
      data: {
        titulo: lista.titulo,
      }
    }) as Partial<ListaTarefa>
  }

  static async adicionarTarefa(
    lista: ListaTarefa,
    tarefa: Tarefa
  ): Promise<Partial<ListaTarefa>> {
    return this.db.listaTarefa.update({
      where: {
        id: lista.id
      },
      data: {
        tarefas: {
          connect: {
            id: tarefa.id
          } 
        }
      }
    })
  }

  static async excluirLista(idLista: string): Promise<void> {
    await this.db.listaTarefa.delete({
      where: {
        id: idLista
      },
    })
  }

  static async obterTarefas(idLista: string): Promise<Partial<Tarefa[]>> {
    return await this.db.tarefa.findMany({
      where: {
        listaId: idLista
      }
    }) as Tarefa[]
  }

  static async criarLista(lista: ListaTarefa): Promise<ListaTarefa> {
    return await this.db.listaTarefa.create({
      data: {
        titulo: lista.titulo,
        id: lista.id,
        usuarioId: lista.usuarioId,
      }
    }) as ListaTarefa
  }
}