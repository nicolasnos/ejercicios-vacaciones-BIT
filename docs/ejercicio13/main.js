// Pedir un número, mostrar si es un número primo o no.

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = Number(document.getElementById("numero").value);
  if (typeof numero !== "number")
    return console.info(`el dato ${numero} no es un numero`);

  if (numero === 0)
    return (document.getElementById(
      "respuesta"
    ).innerHTML = `el numero ${numero} es invalido`);
  if (numero === 1)
    return (document.getElementById(
      "respuesta"
    ).innerHTML = `el numero ${numero} es invalido`);

  let divisible = false;
  for (let index = 2; index < numero; index++) {
    if (numero % index === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? (document.getElementById(
        "respuesta"
      ).innerHTML = `el numero ${numero} no es primo`)
    : (document.getElementById(
        "respuesta"
      ).innerHTML = `el numero ${numero} es primo`);
});
