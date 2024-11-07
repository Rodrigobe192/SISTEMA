// Función para mostrar el mensaje de asignación exitosa
function mostrarMensajeAsignacion() {
    document.getElementById("mensaje-asignacion").style.display = "block";
}

// Evento para asignar evaluador
document.getElementById("form-asignar-evaluadores").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe

    // Mostrar mensaje de asignación exitosa
    mostrarMensajeAsignacion();
});
