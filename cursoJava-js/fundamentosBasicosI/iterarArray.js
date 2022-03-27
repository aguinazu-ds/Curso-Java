const iterarArray = function(array) {
    var suma = 0;
    array.forEach(element => {
        suma = suma + element
    });
    return suma;
}