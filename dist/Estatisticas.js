import countBy from "./countBy.js";
function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    pagamento;
    status;
    semana;
    melhorDia;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.semana = this.setSemana();
        this.melhorDia = this.setMelhorDia();
    }
    setTotal() {
        return this.transacoes.filter(filtrarValor).reduce((acc, valorAtual) => {
            return acc + valorAtual.valor;
        }, 0);
    }
    setPagamento() {
        return countBy(this.transacoes.map(({ pagamento }) => pagamento));
    }
    setStatus() {
        return countBy(this.transacoes.map(({ status }) => status));
    }
    setSemana() {
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
            if (day === 0)
                semana.domingo += 1;
            if (day === 1)
                semana.segunda += 1;
            if (day === 2)
                semana.terca += 1;
            if (day === 3)
                semana.quarta += 1;
            if (day === 4)
                semana.quinta += 1;
            if (day === 5)
                semana.sexta += 1;
            if (day === 6)
                semana.sabado += 1;
        }
        return semana;
    }
    setMelhorDia() { }
}
//# sourceMappingURL=Estatisticas.js.map