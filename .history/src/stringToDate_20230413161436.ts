export default function stringToDate(text: string): Date {
  const [data, tempo] = text.split(" ");
  const [dia, mes, ano] = data.split("/");
  const [horas, minutos] = tempo.split(":");
  console.log(dia);
}
