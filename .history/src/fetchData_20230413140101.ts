export default async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
  } catch (error) {}
}
