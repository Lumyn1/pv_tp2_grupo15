const nombres = ["Esteban", "Eduardo", "Leandro", "Tobias", "Luciano"];
console.log(`Los integrantes del grupo son: ${nombres}`);
//funcion flecha para el mas largo
const nombreMasLargo = () => {
    let masLargo = nombres[0];
    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i].length > masLargo.length) {
            masLargo = nombres[i];
        }
    }
    console.log(`El nombre más largo es: ${masLargo}`);
}
nombreMasLargo();