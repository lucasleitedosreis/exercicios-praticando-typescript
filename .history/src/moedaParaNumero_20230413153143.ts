export default function moedaParanumero(moeda: string): number | null {
  console.log(moeda.replaceAll(".", "").replaceAll(",", ""));
}
