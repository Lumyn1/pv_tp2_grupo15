let edades =[13,55,7,19,4,23,72,29];

const mostrar=(edades)=>{
    let resultado=[]
    for(let i=0;i<edades.length;i++){
        resultado.push(edades[i])
    }
    return resultado;
}


const promedio=(edades)=>{
    let suma=0;
    for(let i=0;i<edades.length;i++){
        suma=suma+edades[i]
    }
     return suma/edades.length;
}
console.log("Las edades son: "+mostrar(edades));
console.log("Promedio de las edades es: "+promedio(edades));