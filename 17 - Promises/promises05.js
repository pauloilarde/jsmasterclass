function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject('Invalid input!');
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

sum(3).then(function (a) {
    sum(4).then(function (b) {
        sum().then(function (result) {
            console.log(result);
        }).catch(function (e) {
            console.log(e);
        });
    }).catch(function (e) {
        console.log(e);
    });
}).catch(function (e) {
    console.log(e);
});