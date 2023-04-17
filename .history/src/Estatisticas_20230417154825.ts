import countBy from "./countBy.js";

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

  //------------------------------------------------------------------------

  //retorna as formas de pagamento e faz a soma de cada tipo usando o método countBy
  private setPagamento() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento));
  }
  //------------------------------------------------------------------------
  //retorna as formas de pagamento e faz a soma de cada tipo usando o método countBy

  private setStatus() {
    console.log(countBy(this.transacoes.map(({ status }) => status)));
  }
}
