document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener('submit', function(event) {
        if (!validarFormulario()) {
            event.preventDefault();
        }
    });

    function validarFormulario() {
        const nombre = document.getElementById("nombre").value;
        const nombrev = /[a-zA-Záéíóú\s]{3,15}/; // Agrega 'é' e 'í' si es necesario
        if (nombrev.test(nombre)) {
            alert("Datos correctos");
            document.getElementById('nombre').classList.remove('formulario_grupo_incorrecto');
            document.getElementById('nombre').classList.add('formulario_grupo_correcto');
        } else {
            document.getElementById('nombre').classList.add('formulario_grupo_incorrecto');
            document.querySelector('.formulario_input-error').classList.add('formulario_input-error-activo');
        }
    }
});
