const perspectivaNegativa = function (array) {
    let new_arr = [];
    for (let values of array) {
        if (values <= 0) {
            new_arr.push(values);
        }
        else {
            new_arr.push(values * -1);
        }
    }
    return new_arr;
}