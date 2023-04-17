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
    this.status = this.setStatus();
  }
  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((acc, valorAtual) => {
      return acc + valorAtual.valor;
    }, 0);
  }
  private setPagamento() {
    interface CountList {
      [key: string]: number;
    }
    //retorna as formas de pagamento
    const pagamentos = this.transacoes.map(({ pagamento }) => pagamento);

    const total = pagamentos.reduce((acc: CountList, item) => {
      if (acc[item]) {
        acc[item] += 1;
      } else {
        acc[item] = 1;
      }
      return acc;
    }, {});
    console.log(total);
  }
  private setStatus() {}
}
