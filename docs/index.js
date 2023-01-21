//capturar evento
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let usuario = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (usuario !== "bit") {
    (document.getElementById(
      "respuesta"
    ).innerHTML = `hay algun dato mal, por favor verifica`),
      console.error("error en el nombre");
  }
  if (password !== "2023") {
    (document.getElementById(
      "respuesta"
    ).innerHTML = `hay algun dato mal, por favor verifica`),
      console.error("error en el password");
  } else {
    window.location.assign("./ejercicio1/index.html");
  }
});

const array = [1, 2, 3, 4];

let ebject = {};

const funcion = () => {};
console.info(ebject.isDifferent);
