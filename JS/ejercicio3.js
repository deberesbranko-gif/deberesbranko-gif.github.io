console.log("Ejercicio3");

function cifrarCesar(texto, clave) {
        let resultado = "";
        let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        texto = texto.toUpperCase();

        for (let i = 0; i < texto.length; i++) {
            let letra = texto[i];
            let posicion = alfabeto.indexOf(letra);

            if (posicion !== -1) {
                let nuevaPosicion = (posicion + clave) % 26;
                resultado += alfabeto[nuevaPosicion];
            } else {
                resultado += letra; 
            }
        }

        return resultado;
    }

    function descifrarCesar(texto, clave) {
        return cifrarCesar(texto, 26 - clave);
    }

    let mensaje = "HOLA";
    let clave = 3;

    let cifrado = cifrarCesar(mensaje, clave);
    console.log("Mensaje original:", mensaje);
    console.log("Mensaje cifrado:", cifrado);
    console.log("Mensaje descifrado:", descifrarCesar(cifrado, clave));