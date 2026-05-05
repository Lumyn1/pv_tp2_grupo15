// 1. Capturamos el botón del HTML usando su ID
const boton = document.getElementById("btnCambiarColor");

// 2. Armamos la lista de colores (Punto opcional de la consigna)
const colores = [
    "#FF5733", // Naranja
    "#33FF57", // Verde
    "#3357FF", // Azul
    "#F333FF", // Rosa
    "#FFE633", // Amarillo
    "#00E5FF", // Celeste
    "#222222"  // Gris oscuro
];

// 3. Le decimos al botón que escuche el "click"
boton.addEventListener("click", () => {
    
    // Matemática para elegir un número al azar basado en la cantidad de colores
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    const colorElegido = colores[indiceAleatorio];

    // Cambiamos el color de fondo de la página
    document.body.style.backgroundColor = colorElegido;

    // Imprimimos el mensaje en consola como pide la consigna
    console.log(`El color de fondo se cambió exitosamente a: ${colorElegido}`);
});