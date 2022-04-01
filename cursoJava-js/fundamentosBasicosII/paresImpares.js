const paresImpares = function (array) {
    let contadorPar = 0;
    let contadorImpar = 0;

    array.forEach(element => {
        if (element%2 == 0) {
            contadorPar = contadorPar + 1;
            contadorImpar = 0;
        }
        else if (element%2 == 1) {
            contadorPar = 0;
            contadorImpar = contadorImpar + 1;
        }

        if (contadorPar == 3) {
            console.log("¡Es para bien!");
            contadorPar = 0;
        }
        else if (contadorImpar == 3) {
            console.log("¡Qué imparcial!");
            contadorImpar = 0;
        }
    });
}