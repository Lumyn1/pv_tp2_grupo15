const radios = document.querySelectorAll('input[name="lenguaje"]');
const mensaje = document.getElementById("mensaje");

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        mensaje.textContent = `Tu lenguaje favorito es: ${radio.value}`;
        console.log(`Tu lenguaje favorito es: ${radio.value}`);
    });
});