// Pedir un número, mostrar la tercera parte de n.

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero = document.getElementById("numero").value;
  let division = (numero / 3).toFixed(2);
  document.getElementById(
    "respuesta"
  ).innerHTML = `la tercera parte de ${numero} es ${division}`;
});
