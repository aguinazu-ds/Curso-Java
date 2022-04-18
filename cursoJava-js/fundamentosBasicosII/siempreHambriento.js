const siempreHambriento = function (array) {
    contador = 0
    for (let value of array) {
        if (value == 'comida') {
            console.log('yummy');
            contador = contador + 1;
        }
    }
    if (contador == 0) {
        console.log('tengo hambre');
    }
}