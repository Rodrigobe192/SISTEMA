document.getElementById('form-cerrar-proyecto').addEventListener('submit', function(event) {
    event.preventDefault();

    const idProyecto = document.getElementById('id-proyecto').value;
    const comentarios = document.getElementById('comentarios').value;

    // Simulando el cierre del proyecto
    setTimeout(function() {
        // Muestra mensaje de éxito
        document.getElementById('mensaje-exito').style.display = 'block';

        // Mostrar detalles del cierre (comentarios, etc.)
        console.log(`Proyecto con ID ${idProyecto} cerrado. Comentarios: ${comentarios}`);
    }, 1000); // Simula un tiempo de espera para cerrar el proyecto
});
