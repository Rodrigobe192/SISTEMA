// Función para mostrar el mensaje de actualización exitosa
function mostrarMensajeActualizacion() {
    document.getElementById("mensaje-progreso").style.display = "block";
}

// Evento para actualizar el progreso del proyecto
document.getElementById("form-monitorear-progreso").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe

    // Mostrar mensaje de actualización exitosa
    mostrarMensajeActualizacion();
});
