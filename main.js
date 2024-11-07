document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-registrar-proyecto');
    const mensajeExito = document.getElementById('mensaje-exito');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario para la demostración

        // Aquí agregaríamos la lógica para guardar los datos o subir los archivos, si es necesario.
        // Por ahora, solo mostramos el mensaje de éxito.

        // Mostrar el mensaje de éxito
        mensajeExito.style.display = 'block';

        // Ocultar el mensaje después de 3 segundos
        setTimeout(function() {
            mensajeExito.style.display = 'none';
        }, 3000);
    });
});
