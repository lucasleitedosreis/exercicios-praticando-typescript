async function fetchApi() {
  const response = await fetchApi(
    "https://api.origamid.dev/json/transacoes.json"
  );
  const data = await response.json();
}

export default fetchApi;
