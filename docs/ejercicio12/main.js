// Pedir un número, mostrar si es positivo, negativo o si es cero.

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = document.getElementById("numero").value;

  if (Math.sign(numero) === 1) {
    document.getElementById(
      "respuesta"
    ).innerHTML = `el valor de ${numero} es positivo`;
  }
  if (Math.sign(numero) === -1) {
    document.getElementById(
      "respuesta"
    ).innerHTML = `el valor de ${numero} es negativo`;
  }
  if (Math.sign(numero) === 0) {
    document.getElementById(
      "respuesta"
    ).innerHTML = `el valor de ${numero} es 0`;
  }
});
