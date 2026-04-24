
    console.log("Ejercicio1");

    function lanzarDado(caras) {
        return Math.floor(Math.random() * caras) + 1;
    }

    let resultadoDado = lanzarDado(6); 
    console.log("Resultado del dado:", resultadoDado);
