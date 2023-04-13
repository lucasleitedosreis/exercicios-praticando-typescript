/**
 *
 * Recebe string '1.200,50' retorna number: 1200.50
 */
export default function moedaParanumero(moeda: string): number | null {
  const numero = Number(moeda.replaceAll(".", "").replaceAll(",", "."));
  if (isNaN(numero)) {
    return null;
  } else {
    return numero;
  }
}
