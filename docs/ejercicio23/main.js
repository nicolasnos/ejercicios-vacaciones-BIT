// Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = Number(document.getElementById("numero").value);
  let i = 0;
  let multiplos = 0;

  while (i <= numero) {
    if (i % 3 === 0) {
      multiplos += i;
    }
    i++;
  }
  document.getElementById(
    "respuesta"
  ).innerHTML = `la suma de los multiplos de tres es ${multiplos}`;
});
