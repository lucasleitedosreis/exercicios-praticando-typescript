export default function stringToDate(text: string): Date {
  const [data, tempo] = text.split(" ");
  console.log(data, tempo);
}
