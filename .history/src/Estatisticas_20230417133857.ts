export default class Estatisticas {
  private transacoes: Transacao[];
  total;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
  }
  private setTotal() {
    console.log(this.transacoes);
  }
}
