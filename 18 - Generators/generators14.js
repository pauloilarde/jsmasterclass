function sum(a, b) {
    return new Promise(function (resolve) {

        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}
sum(3, 4).then(function (result) {
    console.log(result);
});
