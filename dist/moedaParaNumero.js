export default function moedaParanumero(moeda) {
    const numero = Number(moeda.replaceAll(".", "").replaceAll(",", "."));
    if (isNaN(numero)) {
        return null;
    }
    else {
        return numero;
    }
}
//# sourceMappingURL=moedaParaNumero.js.map