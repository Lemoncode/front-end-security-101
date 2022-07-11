import "./mystyles.scss";

const btnSend = document.querySelector("#btnSend");
const formulario = document.querySelector("#formulario");

const nombre = document.querySelector("#name");

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", iniciarApp);

  nombre.addEventListener("blur", validarFormulario);

  formulario.addEventListener("submit", enviarEmail);
}

function iniciarApp() {
  console.log("Iniciando App...");
}

function validarFormulario(e) {
  if (e.target.value.length > 0) {
    const error = document.querySelector("p");
    if (error) {
      error.remove();
    }

    e.target.style.border = "2px solid green";
  } else {
    e.target.style.border = "2px solid red";

    mostrarError("El campo no puede estar vacío");
  }
}

function mostrarError(message: string) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = message;

  formulario.insertBefore(mensajeError, document.querySelector("#name-div"));
}

function enviarEmail(e) {
  e.preventDefault();

  const spinner: Element = document.querySelector("#spinner");
  spinner.style.display = "flex";

  setTimeout(() => {
    spinner.style.display = "none";

    const parrafo = document.createElement("p");
    parrafo.textContent = "El mensaje se envió correctamente";

    formulario.insertBefore(parrafo, spinner);
  }, 3000);
}
