// faz uma cópia da interface e modifica o valor
type TransacaoValor = Transacao & { valor: number };

function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null;
}
export default class Estatisticas {
  private transacoes: Transacao[];
  total;
  pagamento;
  status;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
  }
  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((acc, valorAtual) => {
      return acc + valorAtual.valor;
    }, 0);
  }
  private setPagamento() {}
  private setStatus() {}
}
