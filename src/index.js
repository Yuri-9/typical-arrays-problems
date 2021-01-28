exports.min = function min(array) {
    let minItem;
    if (array == undefined || array.length == 0) {
        minItem = 0;
    } else {
        minItem = array.reduce((acc, item) =>
            acc === undefined || item < acc ? item : acc
        );
    }
    return minItem;
};

exports.max = function max(array) {
    let maxItem;
    if (array == undefined || array.length == 0) {
        maxItem = 0;
    } else {
        maxItem = array.reduce((acc, item) =>
            acc === undefined || item > acc ? item : acc
        );
    }
    return maxItem;
};

exports.avg = function avg(array) {
    if (array == undefined || array.length == 0) {
        average = 0;
    } else {
        average = array.reduce((acc, item) => acc + item) / array.length;
    }

    return average;
};
