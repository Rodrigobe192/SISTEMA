// Función para mostrar el mensaje de generación exitosa
function mostrarMensajeGeneracion() {
    document.getElementById("mensaje-informe").style.display = "block";
}

// Evento para generar informe
document.getElementById("form-generar-informe").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe

    // Mostrar mensaje de generación exitosa
    mostrarMensajeGeneracion();
});
