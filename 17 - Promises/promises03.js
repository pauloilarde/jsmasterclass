function sum(a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}

sum(3, 3, function (a) {
    sum(4, 4, function (b) {
        sum(a, b, function (result) {
            console.log(result);
        });
    });
});