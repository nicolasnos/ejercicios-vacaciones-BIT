// Pedir un número, mostrar n reducido en 5.

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = document.getElementById("numero").value;
  let resta = numero - 5;
  document.getElementById(
    "respuesta"
  ).innerHTML = `la operacion entre ${numero} - 5 da como resultado ${resta}`;
});
