export default async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("");
    const json = await response.json();
    return json;
  } catch (error) {}
}
