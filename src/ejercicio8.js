let notas =[1,2,3,4,5,6,7,8,9,10];

const mostrar=(notas)=>{
    let resultado=[]
    for(let i=0;i<notas.length;i++){
        resultado.push(notas[i])
    }
    return resultado;
}

const contaraprobados=(notas)=>{
    let resultado=[]
        for(let i=0;i<notas.length;i++){
             if(notas[i]>=6){
            resultado.push(notas[i])
             }
        }
        return resultado;
}
const contardesaprobados=(notas)=>{
    let resultado=[]
        for(let i=0;i<notas.length;i++){
             if(notas[i]<6){
            resultado.push(notas[i])
             }
        }
        return resultado;
}
const promedio=(notas)=>{
    let suma=0;
    for(let i=0;i<notas.length;i++){
        suma=suma+notas[i]
    }
     return suma/notas.length;
}

const contar_cantaprobados=(notas)=>{
    let contador=0;
    for(let i=0;i<notas.length;i++){
        if(notas[i]>=6){
        contador++;
        }
    }
    return contador;
}




console.log("Las notas son: "+mostrar(notas))
console.log("Aprobados: "+contaraprobados(notas))
console.log("Desaprobados: "+contardesaprobados(notas))
console.log("El promedio es: "+promedio(notas));
console.log("La cantidad de aprobados son: "+contar_cantaprobados(notas));
