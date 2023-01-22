// Pedir un número, mostrar los números desde n hasta 0.
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = Number(document.getElementById("numero").value);
  let resta = [];

  let i = numero;
  do {
    resta.push(i);
    i--;
  } while (i >= 0);

  document.getElementById(
    "respuesta"
  ).innerHTML = `los numeros desde ${numero} hasta 0 son: ${resta}`;
});
