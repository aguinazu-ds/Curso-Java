const escalaElArray = function (arr, num) {
    for (let [index, value] of arr.entries()) {
        arr[index] = value * num;
    }
    return arr;
}