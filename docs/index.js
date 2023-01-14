//capturar evento
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let usuario = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (usuario !== "Nicolas Olmos") {
    (document.getElementById(
      "respuesta"
    ).innerHTML = `hay algun dato mal, por favor verifica`),
      console.error("error en el nombre");
  }
  if (password !== "Password123") {
    (document.getElementById(
      "respuesta"
    ).innerHTML = `hay algun dato mal, por favor verifica`),
      console.error("error en el password");
  } else {
    window.location.assign("./ejercicio1/index.html");
  }
});
