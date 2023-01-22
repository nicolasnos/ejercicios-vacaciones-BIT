//tomar dos numeros y segun el operador hacer la operacion

const form = document.querySelector("#form");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero1 = Number(document.querySelector("#numero1").value);
  let numero2 = Number(document.querySelector("#numero2").value);
  let operador = document.getElementById("option").value;
  console.log(operador);
  switch (operador) {
    case "suma":
      console.log(numero1 + numero2);
      respuesta.innerHTML = numero1 + numero2;
      break;
    case "resta":
      console.log(numero1 - numero2);
      respuesta.innerHTML = numero1 - numero2;
      break;
    case "division":
      const dividido = numero1 / numero2;
      respuesta.innerHTML = dividido.toFixed(2);
      break;
    case "multiplicacion":
      console.log(numero1 * numero2);
      respuesta.innerHTML = numero1 * numero2;
      break;
  }
});
