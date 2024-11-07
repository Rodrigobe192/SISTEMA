// Función para mostrar el mensaje de validación exitosa
function mostrarMensajeValidacion() {
    document.getElementById("mensaje-validacion").style.display = "block";
}

// Evento para validar el proyecto
document.getElementById("form-validar-proyecto").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe

    // Mostrar mensaje de validación exitosa
    mostrarMensajeValidacion();
});
