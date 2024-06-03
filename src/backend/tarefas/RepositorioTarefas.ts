import Tarefa from "@/core/model/Tarefa";
import Repositorio from "../Repositorio";

export default class RepositorioTarefas extends Repositorio {
  static async atualizar(tarefa: Tarefa): Promise<Partial<Tarefa>> {
    const tarefaSelecionada = await this.db.tarefa.update({
      where: { id: tarefa.id },
      data: {
        titulo: tarefa.titulo,
        prazo: tarefa.prazo,
        concluida: tarefa.concluida,
        atualizada: tarefa.atualizada,
        lista: {
          connect: {
            id: tarefa.listaId
          }
        },
      }
    })
    return tarefaSelecionada as Tarefa
  }

  static async completarTarefa(tarefa: Tarefa): Promise<Partial<Tarefa>> {
    return this.db.tarefa.update({
      where: {
        id: tarefa.id
      },
      data: {
        concluida: tarefa.concluida
      }
    }) as Partial<Tarefa>
  }

  static async alternarCompleto(tarefa: Tarefa) {
    return this.db.tarefa.update({
      where: { id: tarefa.id },
      data: {
        concluida: tarefa.concluida
      }
    })
  }

  static async obterPorId(id: string): Promise<Tarefa> {
    return await this.db.tarefa.findUnique({
      where: { id: id }
    }) as Tarefa
  }

  static async excluirPorId(id: string): Promise<void> {
    await this.db.tarefa.delete({
      where: { id: id }
    })
  }

  static async obterTodas(): Promise<Partial<Tarefa[]>> {
    return await this.db.tarefa.findMany() as Partial<Tarefa[]>
  }

  static async criar(tarefa: Tarefa): Promise<Tarefa> {
    return await this.db.tarefa.create({
      data: {
        id: tarefa.id,
        titulo: tarefa.titulo,
        criada: tarefa.criada,
        atualizada: tarefa.atualizada,
        prazo: tarefa.prazo,
        concluida: tarefa.concluida,
        usuario: {
          connect: {
            id: tarefa.usuarioId,
          }
        }
      }
    }) as Tarefa
  }
}