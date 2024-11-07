// Función para mostrar el mensaje de evaluación exitosa
function mostrarMensajeEvaluacion() {
    document.getElementById("mensaje-evaluacion").style.display = "block";
}

// Evento para evaluar el proyecto
document.getElementById("form-evaluar-proyecto").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe

    // Mostrar mensaje de evaluación exitosa
    mostrarMensajeEvaluacion();
});
