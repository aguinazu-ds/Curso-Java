const mayoresQueY = function(Y, array) {
    let arr_mayor_Y = [];
    array.forEach(element => {
        if (element > Y) {
            arr_mayor_Y.push(element);
        };
    });
    return arr_mayor_Y
}