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
  semana;
  melhorDia;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
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
  //retorna os status de pagamento e faz a soma de cada tipo usando o método countBy
  private setStatus() {
    return countBy(this.transacoes.map(({ status }) => status));
  }
  //------------------------------------------------------------------------
  //
  private setSemana() {
    const semana = {
      domingo: 0,
      segunda: 0,
      terca: 0,
      quarta: 0,
      quinta: 0,
      sexta: 0,
      sabado: 0,
    };

    for (let diaSemana of this.transacoes) {
      const day = diaSemana.data.getDay();
      if (day === 0) semana.domingo += 1;
      if (day === 1) semana.segunda += 1;
      if (day === 2) semana.terca += 1;
      if (day === 3) semana.quarta += 1;
      if (day === 4) semana.quinta += 1;
      if (day === 5) semana.sexta += 1;
      if (day === 6) semana.sabado += 1;
    }
    return semana;
  }
  private setMelhorDia() {}
}
