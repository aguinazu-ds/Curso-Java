const max_min_avg = function (array) {
    maxMinAvg_arr = [];
    max = array[0];
    min = array[0];
    suma = 0;

    array.forEach(element => {
        if (max < element) {
            max = element;
        };
        if (min > element) {
            min = element;
        };
        suma = suma + element;
    });

    return [max, min, suma / array.length];
}