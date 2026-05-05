const input = document.getElementById("texto");
const textoMostrado = document.getElementById("textoMostrado");

input.addEventListener("input", () => {
    textoMostrado.textContent = input.value;

    if(input.value.length>20){
        textoMostrado.classList.add("limite");
    }
    else{
        textoMostrado.classList.remove("limite");
    }
});