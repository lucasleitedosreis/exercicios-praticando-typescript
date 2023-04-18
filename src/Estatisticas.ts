import countBy from "./countBy.js";

// faz uma cópia da interface e modifica o valor
type TransacaoValor = Transacao & { valor: number };

function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null;
}
export default class Estatisticas {
  private transacoes;
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
  //Fazer a contagem de vendas por dias da semana
  private setSemana() {
    const semana = {
      ["Domingo"]: 0,
      ["Segunda"]: 0,
      ["Terça"]: 0,
      ["Quarta"]: 0,
      ["Quinta"]: 0,
      ["Sexta"]: 0,
      ["Sábado"]: 0,
    };
    for (let i = 0; i < this.transacoes.length; i++) {
      const day = this.transacoes[i].data.getDay();
      if (day === 0) semana["Domingo"] += 1;
      if (day === 1) semana["Segunda"] += 1;
      if (day === 2) semana["Terça"] += 1;
      if (day === 3) semana["Quarta"] += 1;
      if (day === 4) semana["Quinta"] += 1;
      if (day === 5) semana["Sexta"] += 1;
      if (day === 5) semana["Sábado"] += 1;
    }
    return semana;
  }
  //----------------------------------------------------------------
  //Verificar o dia com mais vendas
  private setMelhorDia() {
    return Object.entries(this.semana).sort((a, b) => {
      return b[1] - a[1];
    })[0];
  }
}
