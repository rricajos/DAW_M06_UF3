// Valida el nombre de usuario
//  El nombre de usuario debe tener entre 5 y 15 caracteres, solo puede contener letras
// (mayúsculas o minúsculas) y un guion bajo como máximo que nunca pueda estar ni al
// principio ni al final
function validarUsuario(usuario) {
  const regex = /^(?!_)[a-zA-Z_]{5,15}(?<!_)$/;
  return regex.test(usuario);
}

// Valida la contraseña:
// • La contraseña debe ser de 8 caracteres, debe contener al menos una letra mayúscula,
// una letra minúscula, un número y un carácter especial, y no podrá tener espacios.
function validarContraseña(contraseña) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[^\s]{8}$/;
  return regex.test(contraseña);
}
