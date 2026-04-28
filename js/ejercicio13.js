//modificar todo el codigo si se solicita el ingreso de datos al usuario en la siguiente clase

// Mensaje para el usuario
console.log("Inserte cantidad de números y sus valores:");

// Definir el array manualmente (cambiar si es necesario)
const numeros = [10, 25, 7, 42, 18];

// Función que recibe un arreglo y muestra cada elemento en una línea
const mostrarArreglo = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
};

// Llamar a la función con el array 'numeros'
mostrarArreglo(numeros);