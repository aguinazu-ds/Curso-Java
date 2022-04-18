const arrayInverso = function (array) {
    for (let [index, values] of array.entries()) {
        if (index <= array.length/2 - 1) {
            let a = array[index];
            let b = array[array.length - (index + 1)];
            array[index] = b;
            array[array.length - (index + 1)] = a;
        }
        else {
            break;
        }
    }
    return array;
}