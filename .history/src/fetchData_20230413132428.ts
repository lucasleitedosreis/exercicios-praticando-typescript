async function fetchApi() {
  const response = await fetch("https://api.origamid.dev/json/transacoes.json");
  const data = await response.json();
  console.log(data);
}

export default fetchApi;
