// Pedir dos números, mostrar el resto de la división.
"use-strict";

let form = document.getElementById("form");
let respuesta = document.getElementById("respuesta");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (Number(form.numero1.value) % Number(form.numero2.value) == 0) {
    respuesta.innerHTML = "si es divisible";
  } else {
    respuesta.innerHTML = "no es divisible";
  }
});
