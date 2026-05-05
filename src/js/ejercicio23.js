const input = document.getElementById("texto");
const textoMostrado = document.getElementById("textoMostrado");

input.addEventListener("input", () => {
    textoMostrado.textContent = input.value;
});