// Pedir edad al usuario y responder si es o no es mayor de edad.
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  let edad = Number(document.getElementById("edad").value);
  e.preventDefault();
  if (edad < 18) {
    document.getElementById("respuesta").innerHTML = "eres menor de edad";
  }
  if (edad >= 18) {
    document.getElementById("respuesta").innerHTML = "eres mayor de edad";
  }
});
