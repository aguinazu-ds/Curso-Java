const intercambiaValores = function (array) {
    const temp1 = array[0];
    const temp2 = array[array.length - 1];

    array[0] = temp2;
    array[array.length - 1] = temp1;

    return array;
}