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