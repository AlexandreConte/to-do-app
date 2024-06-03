import Usuario from "@/core/model/Usuario";
import Repositorio from "../Repositorio";

export default class RepositorioUsuario extends Repositorio {
  static async atualizar(usuario: Partial<Usuario>): Promise<Partial<Usuario>> {
    return await this.db.usuario.update({
      where: { id: usuario.id },
      data: {
        nome: usuario.nome,
        email: usuario.email,
      }
    })
  }

  static async obterPorId(id: string): Promise<Partial<Usuario>> {
    const usuario = await this.db.usuario.findUnique({
      where: { id: id }
    })
    return usuario as Usuario
  }

  static async criar(usuario: Usuario): Promise<Usuario> {
    return await this.db.usuario.create({
      data: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        listas: {
          connect: {
            id: usuario.id,
          }
        }
      }
    }) as Usuario
  }
}