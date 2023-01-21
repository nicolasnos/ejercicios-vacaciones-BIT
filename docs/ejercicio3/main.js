// Pedir un número y mostrar los números pares desde 1 hasta n.
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  let numero = document.getElementById("numero").value;
  let multiplos = "";
  e.preventDefault();

  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      multiplos += i + ", ";
    }
  }
  document.getElementById("respuesta").innerHTML = multiplos;
});
