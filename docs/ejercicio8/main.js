// Pedir un número, mostrar el cuadrado de n.

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = document.getElementById("numero").value;
  let cuadrado = numero * numero;
  document.getElementById(
    "respuesta"
  ).innerHTML = `el cuadrado de ${numero} es ${cuadrado}`;
});
