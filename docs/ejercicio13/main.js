// Pedir un número, mostrar si es par, impar o si es cero.

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = Number(document.getElementById("numero").value);
  if (numero === 0) {
    (document.getElementById(
      "respuesta"
    ).innerHTML = `el numero es ${numero}, valor neutro`),
      console.log(`neutro`);
  }
  if (numero % 2 === 0) {
    document.getElementById(
      "respuesta"
    ).innerHTML = `el numero ${numero} es par`;
  }
  if (numero % 2 !== 0) {
    document.getElementById(
      "respuesta"
    ).innerHTML = `el numero ${numero} es impar`;
  }
});
