console.log("Ejercicio2");

let numero =0
let cantidad =0
while (cantidad<6){
    cantidad++
    numero = numeroAleatorio(49)
    if(numeros.indexOf(numero)>-1){
        console.log("ya estaba en la lista" +numero)
    }
    else
        numeros.push(numero)
}

console.log(numeros)
