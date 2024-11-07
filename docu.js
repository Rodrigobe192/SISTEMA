document.getElementById("form-verificar-documentos").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página

    // Validación de campos
    const nombreProyecto = document.getElementById("nombre-proyecto").value;
    const documentos = document.getElementById("documentos").files;

    if (nombreProyecto && documentos.length > 0) {
        // Si los campos son válidos, mostrar el mensaje de éxito
        document.getElementById("mensaje-exito").style.display = "block";
    } else {
        alert("Por favor, complete todos los campos y cargue los documentos.");
    }
});
