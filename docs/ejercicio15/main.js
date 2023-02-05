// Pedir dos números, mostrar la división.

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let primero = Number(document.getElementById("numero1").value);
  let segundo = Number(document.getElementById("numero2").value);

  let multiplicacion = primero / segundo;
  console.log(multiplicacion);
  document.getElementById(
    "respuesta"
  ).innerHTML = `la division entre ${primero} y ${segundo} da como resultado ${multiplicacion}`;
});
