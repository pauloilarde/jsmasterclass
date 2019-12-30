function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject('Invalid input!');
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

sum(3, 3).then(function (a) {
    return sum(4).then(function (b) {
        return sum(a, b).then(function (result) {
            console.log(result);
        });
    });
}).catch(function (e) {
    console.log(e);
});