// Pedir un número, mostrar la suma de los números pares desde 1 hasta n.
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = Number(document.getElementById("numero").value);
  let i = 0;
  let result = 0;

  while (i <= numero) {
    if (i % 2 !== 0) result += i;
    i++;
  }
  document.getElementById(
    "respuesta"
  ).innerHTML = `el resultado de la operacion es ${result}`;
});
