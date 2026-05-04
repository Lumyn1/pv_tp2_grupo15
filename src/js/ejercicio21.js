import { MostrarMensajeConsola } from "../services/serviceAntenorMaximiliano.js";

const selectPaises = document.querySelector("#paises");
const selectCapitales = document.querySelector("#capitales");

selectPaises.addEventListener("change", (evento) => {
  const valorElegido = evento.target.value;

  selectCapitales.value = valorElegido;

  const nombrePais = selectPaises.options[selectPaises.selectedIndex].text;
  const nombreCapital =
    selectCapitales.options[selectCapitales.selectedIndex].text;

  MostrarMensajeConsola(nombrePais, nombreCapital);
});
