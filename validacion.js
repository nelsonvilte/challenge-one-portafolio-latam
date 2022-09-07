/* export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
} */

const inputNombre = document.querySelector("#inputName");

inputNombre.addEventListener("blur", (evento) => {
  validarNombre(evento.target);
});

function validarNombre(input) {
  const nombre = new String(input.value);
  let mensaje = "";
  if (!nombreCorrecto(nombre)) {
    mensaje = "debes ingresar como maximo 50 caracteres";
  }
  input.setCustomValidity(mensaje);
}

function nombreCorrecto(cadena) {
  return cadena.length < 50;
}
