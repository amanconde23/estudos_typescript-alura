import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // impede que algum valor da lista de negociacoes seja excluido 
  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}