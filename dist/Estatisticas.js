function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
    }
    setTotal() {
        return this.transacoes.filter(filtrarValor).reduce((acc, valorAtual) => {
            return acc + valorAtual.valor;
        }, 0);
    }
}
//# sourceMappingURL=Estatisticas.js.map