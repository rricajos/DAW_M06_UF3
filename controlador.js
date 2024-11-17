// Manejo del formulario en index.html
if (window.location.pathname.includes('index.html')) {
  document.getElementById('formRegistro').addEventListener('submit', function (e) {
    e.preventDefault();

    const usuario = document.getElementById('username').value;
    const contraseña = document.getElementById('password').value;

    // Validación de campos
    if (!validarUsuario(usuario)) {
      mostrarMensaje('usernameError', 'Usuario no válido. Debe tener entre 5-15 caracteres y un solo guion bajo.', 'error');
    } else {
      mostrarMensaje('usernameError', 'Usuario válido', 'éxito');
    }

    if (!validarContraseña(contraseña)) {
      mostrarMensaje('passwordError', 'Contraseña no válida. Debe tener 8 caracteres, mayúscula, minúscula, número y carácter especial.', 'error');
    } else {
      mostrarMensaje('passwordError', 'Contraseña válida', 'éxito');
    }

    // Guardamos el nombre de usuario en local Storage
    if (validarUsuario(usuario) && validarContraseña(contraseña)) {
      localStorage.setItem('usuario', usuario);
      window.location.href = 'usuario.html';
    }
  });

}


// Manejo de botones en usuario.html
if (window.location.pathname.includes('usuario.html')) {

  if (localStorage.getItem('usuario') === null) {
    // Redirigir al usuario a la página principal si no está identificado
    window.location.href = 'index.html';
  }

  document.addEventListener('DOMContentLoaded', function () {

    const usuario = localStorage.getItem('usuario'); // Recuperamos el nombre del usuario
    mostrarBienvenida(usuario); // Muestra el mensaje inicial de bienvenida

    // Agregar un nuevo párrafo
    document.getElementById('btnAgregar').addEventListener('click', () => gestionarContenido('agregar'));

    // Eliminar el último párrafo creado
    document.getElementById('btnEliminar').addEventListener('click', () => gestionarContenido('eliminar'));

    // Alinear el contenido a la izquierda
    document.getElementById('btnIzquierda').addEventListener('click', () => gestionarContenido('left'));

    // Alinear el contenido al centro
    document.getElementById('btnCentro').addEventListener('click', () => gestionarContenido('center'));

    // Alinear el contenido a la derecha
    document.getElementById('btnDerecha').addEventListener('click', () => gestionarContenido('right'));
  });
}

