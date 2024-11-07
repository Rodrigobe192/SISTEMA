document.getElementById('form-consultar-informes').addEventListener('submit', function(event) {
    event.preventDefault();

    const idProyecto = document.getElementById('id-proyecto').value;
    const tipoInforme = document.getElementById('tipo-informe').value;

    // Simulando la consulta del informe
    setTimeout(function() {
        // Muestra mensaje de éxito
        document.getElementById('mensaje-exito').style.display = 'block';

        // Mostrar los detalles del informe consultado
        const informeContenido = `Informe del proyecto con ID ${idProyecto} - Tipo: ${tipoInforme}`;
        document.getElementById('informe-contenido').innerText = informeContenido;

        // Mostrar detalles del informe
        document.getElementById('informe-detalles').style.display = 'block';
    }, 1000); // Simula un tiempo de espera para la consulta del informe
});
