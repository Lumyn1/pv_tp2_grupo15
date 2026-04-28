const horas = 2; 
const minutos = 30;

const convertirASegundos = (h, m) => {
    // 1 hora = 3600 segundos | 1 minuto = 60 segundos
    const calculo = (h * 3600) + (m * 60);
    return calculo;
};


const resultado = convertirASegundos(horas, minutos);

console.log(`Horas: ${horas}, Minutos: ${minutos}`);
console.log(`El resultado de la conversión en segundos es: ${resultado}`);