const iterarArray = function(array) {
    let suma = 0;
    array.forEach(element => {
        suma = suma + element
    });
    return suma;
}