// Pedir un número, mostrar el doble de n más 4.

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = document.getElementById("numero").value;
  let operacion = numero * 2 + 4;
  document.getElementById(
    "respuesta"
  ).innerHTML = `la operacion de ${numero} al doble y sumarle 4 da como resultado ${operacion}`;
});
