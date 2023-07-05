///IMPORTS
import { agregarTarea } from "../JS/index.js";

///VARIABLES
const contenedorTareas = document.querySelector("#tareaInput");
const boton = document.querySelector("#btn-agregar");

///FUNCIONES
contenedorTareas.addEventListener("keypress", function (event) {

  if (event.key === "Enter") {
    event.preventDefault();
    agregarTarea();
  }
});  
boton.addEventListener("click", agregarTarea); 

