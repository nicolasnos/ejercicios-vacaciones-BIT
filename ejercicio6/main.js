// Pedir un número, mostrar el triple de n.

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = document.getElementById("numero").value;
  let multiplicacion = numero * 3;
  document.getElementById("respuesta").innerHTML = multiplicacion;
});
