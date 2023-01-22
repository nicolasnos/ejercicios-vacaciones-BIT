// Pedir dos números, mostrar el resto de la división.

const form = document.querySelector("#form");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let primero = Number(document.getElementById("numero1").value);
  let segundo = Number(document.getElementById("numero2").value);

  respuesta.innerHTML = `el resulado de la operacion es ${primero % segundo}`;
});
