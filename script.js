// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y el div de éxito
    const form = document.getElementById("form-cambiar-contraseña");
    const mensajeExito = document.getElementById("mensaje-exito");

    // Cuando el formulario sea enviado
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe y recargue la página

        // Aquí puedes agregar validaciones o un proceso de cambio de contraseña
        // Si todo es correcto, mostramos el mensaje de éxito
        mensajeExito.style.display = "block";

        // Opcionalmente, ocultar el mensaje después de 5 segundos
        setTimeout(function() {
            mensajeExito.style.display = "none";
        }, 5000);
    });
});
