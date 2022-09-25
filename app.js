import {
  validar
} from "./validacion.js";
import {
  validarTextarea
} from "./validacion.js";

const inputs = document.querySelectorAll("input");

const textarea = document.querySelector("textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validar(input.target);
  });
});

textarea.addEventListener("blur", (textarea) => {
  validarTextarea(textarea.target);
});

function validarEnviar() {
  let form = document.getElementById("form");
  const textarea = new String(form.mensaje.value);
  const nombre = new String(form.inputName.value);
  const email = new String(form.email.value);
  const asunto = new String(form.asunto.value);
  const boton = document.getElementById("enviar");

  if (
    nombre.length !== 0 &&
    email.length !== 0 &&
    textarea.length !== 0 &&
    asunto.length !== 0
  ) {
    boton.removeAttribute("disabled");
  } else {
    boton.setAttribute("disabled", "true");
  }
}

document.getElementById("form").addEventListener("keyup", validarEnviar);
document.getElementById("enviar").addEventListener("click", (evento) => {
  evento.preventDefault();
  const boton = document.getElementById("enviar");

  const textarea = document.querySelector("textarea");
  textarea.parentElement.querySelector(".textarea-message-erro").innerHTML =
    "Mensaje enviado";
  textarea.parentElement.querySelector(".textarea-message-erro").style.display =
    "block";
  document.getElementById("form").reset();
  boton.setAttribute("disabled", "true");
});