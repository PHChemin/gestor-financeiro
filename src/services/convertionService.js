export function toFloat(string) {
  return parseFloat(string);
}

export function toInteger(string) {
  return parseInt(string);
}

export function toBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function toFormatedDate(date) {
  return new Date(date).toLocaleDateString("pt-BR");
}
