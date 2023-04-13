export default function moedaParanumero(moeda: string): number | null {
  console.log(Number(moeda.replaceAll(".", "").replaceAll(",", ".")));
}
