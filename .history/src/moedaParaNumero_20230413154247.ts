export default function moedaParanumero(moeda: string): number | null {
  const numero = Number(moeda.replaceAll(".", "").replaceAll(",", "."));
  if (isNaN(numero)) {
    return null;
  } else {
    return numero;
  }
}
