/* Pedir nombre y edad al usuario,
si se llama Pepita y es mayor de edad permitir ingreso a sala de espera 1,
si se llama Pepita y es menor de edad permitir ingreso a sala de espera 2,
si no se llama Pepita pero es mayor de edad permitir ingreso a sala de espera 3,
sino dirigir a la sala de espera. 4 */

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  let edad = Number(document.getElementById("edad").value);
  let nombre = String(document.getElementById("nombre".value));
  e.preventDefault();
  if (edad >= 18 && nombre === "pepita") {
    (document.getElementById("respuesta").innerHTML = "vas a sala 1"),
      console.log("a sala 1");
  }
  if (edad < 18 && nombre !== "pepita") {
    document.getElementById("respuesta").innerHTML = "vas a sala 2";
  }
  if (nombre !== "pepita" && edad < 18) {
    document.getElementById("respuesta").innerHTML = "vas a sala 3";
  } else {
    document.getElementById("respuesta").innerHTML = "vas a sala 4";
  }
});
