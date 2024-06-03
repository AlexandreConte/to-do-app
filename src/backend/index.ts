import { alternarCompletoTarefa, atualizarTarefa, concluirTarefa, criarTarefa, excluirTarefa, obterTodasTarefas } from "./tarefas";
import { adicionarTarefaListada, atualizarLista, criarLista, excluirLista, obterTarefasListadas } from "./listas";
import { atualizarUsuario, criarUsuario, obterUsuario } from "./usuario";

export default class Backend {
  static readonly usuario = {
    criar: criarUsuario,
    obter: obterUsuario,
    atualizar: atualizarUsuario,
  }

  static readonly tarefa = {
    criar: criarTarefa,
    obterTodas: obterTodasTarefas,
    alternarCompleto: alternarCompletoTarefa,
    atualizar: atualizarTarefa,
    excluir: excluirTarefa,
    concluir: concluirTarefa,
  }

  static readonly lista = {
    criar: criarLista,
    obter: obterTarefasListadas,
    atualizar: atualizarLista,
    excluir: excluirLista,
    adicionarTarefa: adicionarTarefaListada
  }
}