const contarPositivos = function (array) {
    contador = 0;
    array.forEach(element => {
        if (element > 0) {
            contador++;
        }
    });
    array[array.length - 1] = contador;
}