// Pedir nombre y edad al usuario, si se llama Pepita y es mayor de edad permitir ingreso a sala de espera 1, si se llama Pepita y es menor de edad permitir ingreso a sala de espera 2, si no se llama Pepita pero es mayor de edad permitir ingreso a sala de espera 3, sino dirigir a la sala de espera. 4

"use-strict";

let form = document.getElementById("form");
let respuesta = document.getElementById("respuesta");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = String(document.getElementById("nombre").value);
  let numero2 = Number(document.getElementById("numero2").value);

  if (userName.toUpperCase === "Pepita" && numero2 >= 18) {
    respuesta.innerHTML = `vas a sala 1`;
  }
  if (userName === "Pepita" && numero2 < 18) {
    respuesta.innerHTML = `vas a sala 2`;
  }
  if (userName !== "Pepita" && numero2 >= 18) {
    respuesta.innerHTML = `vas a sala 3`;
  }
  if (userName !== "Pepita" && numero2 < 18) {
    respuesta.innerHTML = `vas a sala 4`;
  }
});
