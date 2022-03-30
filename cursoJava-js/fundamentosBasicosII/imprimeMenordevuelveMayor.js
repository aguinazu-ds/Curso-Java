const menor_mayor = function(array) {
    max = array[0];
    min = array[0];

    array.forEach(element => {
        if (max < element) {
            max = element;
        };
        if (min > element) {
            min = element;
        };
    });

    console.log(min);
    return max;
}