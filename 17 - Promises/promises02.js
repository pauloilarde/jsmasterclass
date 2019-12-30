function sum(a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}

sum(3, 3, function (result) {
    console.log(result);
});