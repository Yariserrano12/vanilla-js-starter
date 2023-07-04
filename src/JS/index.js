import { post } from "./API.js";
const contenedorTareas = document.querySelector("#tareaInput");

let listaTarea = document.querySelector("#listaTarea");
let letra = document.querySelector("#letra");
let check = document.querySelector("#check");
let contadorT = 0;
let mensaje = document.getElementById("mensaje");

function agregarTarea() {
  let tarea = contenedorTareas.value;

  if (tarea !== "") {
    let tareaLi = document.createElement("li");

    let texto = document.createElement("p");
    texto.id = "arreglartexto";

    let inputC = document.createElement("input");
    inputC.id = "arreglarcheck";
    inputC.setAttribute("type", "checkbox");

    let eliminar = document.createElement("button");
    eliminar.id = "arreglarboton";
    eliminar.textContent = "Eliminar";

    texto.innerHTML = tarea;
    post({tarea});
    tareaLi.appendChild(texto);
    tareaLi.appendChild(inputC);
    tareaLi.appendChild(eliminar);

    let tabla = document.getElementById("listaTarea");
    tabla.appendChild(tareaLi);

    mensaje.style.display = "none";

    eliminar.addEventListener("click", (e) => {
      let listaT = document.getElementById("listaTarea");

      const i = e.target.parentElement;
      listaT.removeChild(i);

      if (inputC.checked) {
        contadorT--;
        letra.innerHTML = contadorT;
      }

      let cargar = document.querySelectorAll("li");
      console.log(cargar);

      if (!cargar.length != 0) {
        mensaje.style.display = "block";
      }
    });

    mensaje.addEventListener("string", function () {
      if (condition) {
      }
    });

    contenedorTareas.value = "";

    inputC.addEventListener("click", function () {
      if (inputC.checked) {
        contadorT = contadorT + 1;
        letra.innerHTML = contadorT;
      } else {
        contadorT = contadorT - 1;
        letra.innerHTML = contadorT;
      }
    });
  } else {
    alert("Ingrese una tarea válida");
  }

  tarea = "";
 
}

// contenedorTareas.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     agregarTarea();
//   }
// });
// Inserte el código aquí

export { agregarTarea };
