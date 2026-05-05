export const MostrarMensajeConsola = (pais, capital) => {
  console.log(` El país ${pais} tiene como capital ${capital}`);
};
//ejercicio 22
export const procesarTextoEspejo = (textoIngresado) => {
  if (textoIngresado === "") {
    return "aqui aparecera el texto";
  } else {
    return textoIngresado;
  }
};
