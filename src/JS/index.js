//IMPORTS
import { post, getApi, deleteTask, updateTask } from "./API.js";
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
  var contadorCarga = 0;

  tareas.forEach((tarea) => {
    crearElementos(tarea.id, tarea.task, tarea.checked);
  });

  for (let index = 0; index < tareas.length; index++) {
    if (tareas[index].checked == true) {
      contadorCarga++;
    }
  }
  letra.textContent = contadorCarga;
}
document.addEventListener("DOMContentLoaded", cargarTareas);

function crearElementos(id, tarea, checked) {
  let eliminar = document.createElement("button");
  eliminar.setAttribute("class", "btn btn-danger");
  eliminar.id = "arreglarboton";
  eliminar.textContent = "Eliminar";

  let inputC = document.createElement("input");
  inputC.id = "arreglarcheck";
  inputC.setAttribute("type", "checkbox");
  inputC.checked = checked;

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

  eliminar.addEventListener("click", async (e) => {
    let listaT = document.getElementById("listaTarea");

    const i = e.target.parentElement;
    listaT.removeChild(i);
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

  inputC.addEventListener("change", function () {
    let checked = {
      checked: inputC.checked,
    };

    updateTask(id, checked);

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

    crearElementos(tareaPost.id, tareaPost.task, tareaPost.checked);

    contenedorTareas.value = "";
  } else {
    alert("Ingrese una tarea válida");
  }

  tarea = "";
}

export { agregarTarea };
