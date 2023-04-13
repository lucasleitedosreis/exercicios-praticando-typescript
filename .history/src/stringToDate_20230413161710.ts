export default function stringToDate(text: string): Date {
  const [data, tempo] = text.split(" ");
  const [dia, mes, ano] = data.split("/").map(Number);
  const [horas, minutos] = tempo.split(":").map(Number);
  return new Date(ano, mes, dia, horas, minutos);
}
