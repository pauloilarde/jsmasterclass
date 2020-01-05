function sum(a, b) {
    return new Promise(function (resolve) {

        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

sum(2, 3).then(function (a) {
    sum(3, 4).then(function (b) {
        sum(a, b).then(function (result) {

            console.log(result);
        });
    });
});