// Pedir un número, mostrar la suma total desde 1 hasta n.
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = Number(document.getElementById("numero").value);
  let i = 0;
  let result = 0;

  while (i <= numero) {
    result += i;
    i++;
  }
  document.getElementById(
    "respuesta"
  ).innerHTML = `el resultado de la operacion es ${result}`;
});
