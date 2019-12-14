const sum = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const calculo = function (fn) {
    return function (a, b) {
        return fn(a, b);
    };
};

console.log(calculo(sum)(2));
