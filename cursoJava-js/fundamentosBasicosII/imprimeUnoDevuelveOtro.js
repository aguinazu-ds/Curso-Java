const imprimeUno_devuelveOtro = function(array) {
    console.log(array[array.length -2]);
    let impar = 0;
    array.forEach(element => {
        if (element%2 == 1) {
            impar = element;
            return impar;
        };
    });
}