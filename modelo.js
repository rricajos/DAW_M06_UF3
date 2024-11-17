// modelo.js

// Valida el nombre de usuario
function validarUsuario(usuario) {
  const regex = /^(?!_)[a-zA-Z_]{5,15}(?<!_)$/;
  return regex.test(usuario);
}

// Valida la contraseña
function validarContraseña(contraseña) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[^\s]{8}$/;
  return regex.test(contraseña);
}
