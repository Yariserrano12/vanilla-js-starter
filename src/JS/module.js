import { agregarTarea } from "../JS/index.js";
const contenedorTareas = document.querySelector("#tareaInput");
const boton = document.querySelector("#btn-agregar");
contenedorTareas.addEventListener("keypress", function (event) {

  if (event.key === "Enter") {
    event.preventDefault();
    agregarTarea();
  }
});  
boton.addEventListener("click", agregarTarea); 



