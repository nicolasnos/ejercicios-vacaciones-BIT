//tomar dos numeros y segun el operador hacer la operacion

const form = document.querySelector("#form");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numero1 = Number(document.querySelector("#numero1").value);
  let numero2 = Number(document.querySelector("#numero2").value);
  let operador = document.querySelector("#option").value;

  switch (operador) {
    case sumar:
      break;
      respuesta.innerHTML = numero1 + numero2;
      break;
    case restar:
      console.log(numero1 - numero2);
      respuesta.innerHTML = numero1 - numero2;
      break;
    case dividir:
      respuesta.innerHTML = numero1 / numero2;
      break;
    case multiplicar:
      respuesta.innerHTML = numero1 * numero2;
      break;
  }
});
chaooooooo

estilos de bootstrap
componente form que contenga un input con label(ingresa una tarea), boton agregar tarea y que muestre la todo list

App-- escuchar los cambios del input[state] y guardarlos en un objeto para mostrarlo en una lista setLista

onChange={funcion guardaCambio} -- o en linea setState(e.target.value)

componente lista
setList[...list, state]

el map de la list debera retornar (item, i)


lista de lo que quiera, menos de tareas: que pueda agregar, quitar y marcar elementos como marcado
