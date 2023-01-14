// Pedir un número, mostrar la mitad de n.

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = document.getElementById("numero").value;
  let division = numero / 2;
  document.getElementById(
    "respuesta"
  ).innerHTML = `la mitad de ${numero} es ${division}`;
});
