import { procesarTextoEspejo } from "../services/serviceAntenorMaximiliano.js";

const inputTexto = document.querySelector("#entrada-texto");
const parrafoEspejo = document.querySelector("#texto-espejo");

inputTexto.addEventListener("input", (evento) => {
  const textoActual = evento.target.value;

  const textoProcesado = procesarTextoEspejo(textoActual);
  parrafoEspejo.textContent = textoProcesado;
});
