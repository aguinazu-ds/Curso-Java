const longitudesPrevias = function (array) {
    for (let [index, values] of array.entries()) {
        array[index] = values.length
    }
    return array
}