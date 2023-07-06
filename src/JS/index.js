//IMPORTS
import { post, getApi, deleteTask } from "./API.js";
//IMPORTS

//VARIABLES
const contenedorTareas = document.querySelector("#tareaInput");
//VARIABLES

// let listaTarea = document.querySelector("#listaTarea");
let letra = document.querySelector("#letra");

let contadorT = 0;
let mensaje = document.getElementById("mensaje");

async function cargarTareas() {
  let tareas = await getApi();

  tareas.forEach((tarea) => {
    crearElementos(tarea.id, tarea.task);
  });
}
document.addEventListener("DOMContentLoaded", cargarTareas);

function crearElementos(id, tarea) {
  let eliminar = document.createElement("button");
  eliminar.setAttribute("class", "btn btn-danger");
  eliminar.id = "arreglarboton";
  eliminar.textContent = "Eliminar";

  let inputC = document.createElement("input");
  inputC.id = "arreglarcheck";
  inputC.setAttribute("type", "checkbox");
  inputC.checked = false;

  var tareaLi = document.createElement("li");
  let texto = document.createElement("p");
  texto.id = "arreglartexto";

  texto.innerHTML = tarea;

  tareaLi.id = id;
  tareaLi.appendChild(inputC);
  tareaLi.appendChild(texto);
  tareaLi.appendChild(eliminar);
  mensaje.style.display = "none";

  let tabla = document.getElementById("listaTarea");
  tabla.appendChild(tareaLi);
  eliminar.addEventListener("click", (e) => {
    let listaT = document.getElementById("listaTarea");

    const i = e.target.parentElement;
    listaT.removeChild(i);
    console.log("lista: ", i.id);
    deleteTask(i.id);

    if (inputC.checked) {
      contadorT--;
      letra.innerHTML = contadorT;
    }

    let cargar = document.querySelectorAll("li");

    if (!cargar.length != 0) {
      mensaje.style.display = "block";
    }
  });

  mensaje.addEventListener("string", function () {
    if (condition) {
    }
  });
  
  inputC.addEventListener("click", function () {
    if (inputC.checked) {
      contadorT = contadorT + 1;
      letra.innerHTML = contadorT;
    } else {
      contadorT = contadorT - 1;
      letra.innerHTML = contadorT;
    }
  });
}

async function agregarTarea() {
  let tarea = contenedorTareas.value;

  if (tarea !== "") {
    var task = {
      task: tarea,
      checked: false,
    };

    let tareaPost = await post(task);

    crearElementos(tareaPost.id, tareaPost.task);

    contenedorTareas.value = "";
  } else {
    alert("Ingrese una tarea válida");
  }

  tarea = "";
}

export { agregarTarea };
