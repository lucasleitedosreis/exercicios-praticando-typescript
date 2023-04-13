export default async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const respons = await fetch(url);
    if (!response.ok) throw new Error("Erro: " + response.status);
    const json = await response.json();
    return json;
  } catch (error) {
    if (error instanceof Error)
      console.log("Ocorreu um Erro ao executar o fetch: " + error.message);
    return null;
  }
}
