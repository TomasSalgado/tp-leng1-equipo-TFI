//MODO OSCURO
const modoActivo = document.body.classList.contains("modo-oscuro");
const btnModo = document.getElementById("btn-modo");

if(btnModo) {
    btnModo.addEventListener("click", () =>{document.body.classList.toggle("modo-oscuro")});
}

// 1. Capturamos el formulario y el párrafo donde irá el mensaje
const formulario = document.querySelector('form');
const mensajeForm = document.getElementById('mensaje-form');

// 2. Escuchamos el evento cuando el usuario hace clic en "Enviar Consulta"
formulario.addEventListener('submit', (event) => {
    
    // Evitamos que la página se recargue automáticamente
    event.preventDefault();

    // 3. Obtenemos lo que escribió el usuario en las cajas de texto
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // 4. Lógica de validación
    if (nombre === "" || email === "" || mensaje === "") {
        mensajeForm.textContent = "❌ Por favor, completá todos los campos obligatorios.";
        mensajeForm.style.color = "red";
    } else if (!email.includes("@") || !email.includes(".")) {
        mensajeForm.textContent = "❌ El correo electrónico ingresado no es válido.";
        mensajeForm.style.color = "red";
    } else {
        // CORREGIDO: Usamos comillas tradicionales y concatenación con "+" para evitar el SyntaxError
        mensajeForm.textContent = "🐾 " + nombre + ", recibirás información en el mail " + email;
        mensajeForm.style.color = "green";
        
        // Limpiamos los campos del formulario para que quede vacío
        formulario.reset();
    }
});

