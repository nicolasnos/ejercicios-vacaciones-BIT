// Pedir nombre al usuario y saludarlo.
const form = document.querySelector("#form");
const titulo = document.getElementById("titulo");

form.addEventListener("submit", (e) => {
  let nombre = document.querySelector("#nombre").value;
  e.preventDefault();
  let usuario = nombre;
  titulo.innerHTML = `Hola ${usuario}`;
});
