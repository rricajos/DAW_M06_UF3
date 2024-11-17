// Actualiza el mensaje de error o éxito en los campos
function mostrarMensaje(idCampo, mensaje, tipo) {
  const elemento = document.getElementById(idCampo);
  elemento.textContent = mensaje;
  elemento.style.color = tipo === 'error' ? 'red' : 'green';
}

// Muestra el mensaje inicial de bienvenida
function mostrarBienvenida(usuario) {
  const mensaje = `¡Bienvenid@, ${usuario}!`;
  document.getElementById('mensajeBienvenida').textContent = mensaje;
}

// Gestiona las acciones de contenido en el div
function gestionarContenido(accion) {

  const contenido = document.getElementById('contenido');

  if (accion === 'agregar') {
      // Crear un nuevo elemento <p>
      const p = document.createElement('p');
      p.textContent = 'Bienvenid@ ' + localStorage.getItem('usuario');
      contenido.appendChild(p);

  } else if (accion === 'eliminar') {
      // Eliminar el último elemento <p>
      if (contenido.lastChild) {
          contenido.removeChild(contenido.lastChild);
      }
  } else {
      // Alinear el contenido ('left', 'center', 'right')
      contenido.style.textAlign = accion;
  }
}
