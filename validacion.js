export function validar(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}


export function validarTextarea(textarea) {
  const tipoTextarea = textarea.dataset.tipo;

  if (validadores[tipoTextarea]) {
    validadores[tipoTextarea](textarea);
  }

  if (textarea.value.length != 0) {

    textarea.parentElement.classList.remove("textarea-container--invalid");
    textarea.parentElement.querySelector(".textarea-message-erro").innerHTML = "";

  } else {
    textarea.parentElement.classList.add("textarea-container--invalid");
    textarea.parentElement.querySelector(".textarea-message-erro").innerHTML = textareaMensajeDeError(tipoTextarea, textarea);
  }
}

const inputNombre = document.querySelector("#inputName");

inputNombre.addEventListener("blur", (evento) => {
  validarNombre(evento.target);
});

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
    customError: "máximo 50 caracteres ",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  asunto: {
    valueMissing: "El campo correo no puede estar vacío",
    patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
  },
  mensaje: {
    valueMissing: "Este mensaje no puede estar vacío en",
    customError: "Debes escribir un mensaje.",
  },
};

const validadores = {
  nombre: (input) => validarNombre(input),
  mensaje: (textarea) => validarMensaje(textarea),
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      /*    console.log(tipoDeInput, error);
         console.log(input.validity[error]);
         console.log(mensajesDeError[tipoDeInput][error]); */
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

function textareaMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      /*  console.log(tipoDeInput, error);
       console.log(input.validity[error]);
       console.log(mensajesDeError[tipoDeInput][error]); */
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

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

function validarMensaje(textarea) {
  const textArea = new String(textarea.value);
  let mensaje = "";
  if (!nombreCorrecto(textArea)) {
    mensaje = "El mensaje no debe estar vacio.";
  }
  textarea.setCustomValidity(mensaje);
}