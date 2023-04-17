type TransacaoValor = Transacao & { valor: number };
function filtrarValor(transacao: Transacao) {
  return transacao.valor !== null;
}
export default class Estatisticas {
  private transacoes: Transacao[];
  total;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
  }
  private setTotal() {
    this.transacoes.filter((transacao) => {
      console.log(transacao.valor !== null);
    });
  }
}
