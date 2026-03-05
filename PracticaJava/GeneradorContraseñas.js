let caracteres = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteresNumeros = "0123456789";
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarContraseña(longitud){

    if(longitud < 8 || longitud > 50){
        return "La contraseña debe tener entre 8 y 50 caracteres";
    }

    let contraseña = "";

    
    let cantidadNumeros = numeroAleatorio(1,2);
    for(let i=0; i<cantidadNumeros; i++){
        contraseña += caracteresNumeros[numeroAleatorio(0, caracteresNumeros.length - 1)];
    }

   
    let cantidadEspeciales = numeroAleatorio(1,2);
    for(let i=0; i<cantidadEspeciales; i++){
        contraseña += caracteresEspeciales[numeroAleatorio(0, caracteresEspeciales.length - 1)];
    }

    
    contraseña += caracteresMayusculas[numeroAleatorio(0, caracteresMayusculas.length - 1)];

    
    while(contraseña.length < longitud){
        contraseña += caracteres[numeroAleatorio(0, caracteres.length - 1)];
    }

    
    contraseña = contraseña.split('').sort(() => Math.random() - 0.5).join('');

    return contraseña;
}

console.log(generarContraseña(12));
