//MODO OSCURO
const modoActivo = document.body.classList.contains("modo-oscuro");
const btnModo = document.getElementById("btn-modo");
btnModo.addEventListener("click", () =>{document.body.classList.toggle("modo-oscuro")});