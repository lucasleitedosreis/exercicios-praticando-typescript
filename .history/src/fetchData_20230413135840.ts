export default async function fetchData(url: string) {
  try {
    const response = await fetch(
      "https://api.origamid.dev/json/transacoes.json"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}
