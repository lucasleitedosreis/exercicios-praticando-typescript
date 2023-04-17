import Estatisticas from "./Estatisticas.js";
import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizartransacao.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    preencherTabela(transacoes);
    preencherEstatisticas(transacoes);
}
function preencherTabela(transacoes) {
    const tabela = document.querySelector("#tabela tbody");
    if (!tabela)
        return;
    transacoes.forEach((transacao) => {
        tabela.innerHTML += `
    <tr>
      <td>${transacao.nome}</td>
      <td>${transacao.email}</td>
      <td>R$: ${transacao.moeda}</td>
      <td>${transacao.pagamento}</td>
      <td>${transacao.status}</td>
    </tr>
    `;
    });
}
handleData();
function preencherLista(lista, containerId) {
    const containerElement = document.getElementById(containerId);
    if (containerElement) {
        Object.keys(lista).forEach((key) => {
            containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`;
        });
    }
}
function preencherEstatisticas(transacoes) {
    const data = new Estatisticas(transacoes);
    const totalElement = document.querySelector("#total span");
    if (totalElement) {
        totalElement.innerText = data.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
    preencherLista(data.pagamento, "pagamentos");
    preencherLista(data.status, "status");
}
//# sourceMappingURL=script.js.map