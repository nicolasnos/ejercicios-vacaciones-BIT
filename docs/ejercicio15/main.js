// Pedir dos números, mostrar la suma.

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let primero = Number(document.getElementById("numero1").value);
  let segundo = Number(document.getElementById("numero2").value);

  let suma = primero + segundo;
  console.log(suma);
  document.getElementById(
    "respuesta"
  ).innerHTML = `la operacion entre ${primero} y ${segundo} da como resultado ${suma}`;
});
