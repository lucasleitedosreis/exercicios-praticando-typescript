export default function stringToDate(text) {
    const [data, tempo] = text.split(" ");
    const [dia, mes, ano] = data.split("/").map(Number);
    const [horas, minutos] = tempo.split(":").map(Number);
    return new Date(ano, mes - 1, dia, horas, minutos);
}
//# sourceMappingURL=stringToDate.js.map