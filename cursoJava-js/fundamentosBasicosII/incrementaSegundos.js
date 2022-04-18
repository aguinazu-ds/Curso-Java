const incrementaSegundos = function (arr) {
    for (let [index, values] of arr.entries()) {
        if (index % 2 == 1) {
            arr[index] = values + 1;
        };
        console.log(arr[index]);
    };
    return arr
};