// Pedir un número, mostrar el doble de n.
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = document.getElementById("numero").value;
  let multiplicacion = numero * 2;
  console.log(multiplicacion);
  document.getElementById("respuesta").innerHTML = multiplicacion;
});
