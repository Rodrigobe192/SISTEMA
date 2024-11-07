// Función para mostrar el mensaje de notificación exitosa
function mostrarMensajeNotificacion() {
    document.getElementById("mensaje-notificacion").style.display = "block";
}

// Evento para notificar el resultado al proponente
document.getElementById("form-notificar-resultado").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe

    // Mostrar mensaje de notificación exitosa
    mostrarMensajeNotificacion();
});
