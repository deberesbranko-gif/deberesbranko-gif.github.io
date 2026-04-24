    console.log("Ejercicio 4");

    let caracteres = "abcdefghijklmnopqrstuvwxyz";
    let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let caracteresNumeros = "0123456789";
    let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";

    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generarPassword(longitud) {

        if (longitud < 8) longitud = 8;
        if (longitud > 50) longitud = 50;

        let password = "";

        let cantidadNumeros = numeroAleatorio(1, 2);
        let cantidadEspeciales = numeroAleatorio(1, 2);

        password += caracteresMayusculas[numeroAleatorio(0, caracteresMayusculas.length - 1)];

        for (let i = 0; i < cantidadNumeros; i++) {
            password += caracteresNumeros[numeroAleatorio(0, caracteresNumeros.length - 1)];
        }

        for (let i = 0; i < cantidadEspeciales; i++) {
            password += caracteresEspeciales[numeroAleatorio(0, caracteresEspeciales.length - 1)];
        }

        while (password.length < longitud) {
            password += caracteres[numeroAleatorio(0, caracteres.length - 1)];
        }

        password = password.split('').sort(() => Math.random() - 0.5).join('');

        return password;
    }

    console.log("Contraseña generada:", generarPassword(12));