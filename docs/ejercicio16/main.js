// Pedir dos números, mostrar el resto de la división.
"use-strict";

let form = document.getElementById("form");
let respuesta = document.getElementById("respuesta");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  respuesta.innerHTML = `el resultado de la division entre ${numero1} y ${numero2} es ${
    numero1 / numero2
  }`;
  console.log(numero1, numero2);
});
