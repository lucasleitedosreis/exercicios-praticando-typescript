import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizartransacao.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    console.log(transacoes);
}
handleData();
//# sourceMappingURL=script.js.map