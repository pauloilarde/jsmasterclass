function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject('Invalid input!');
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}
console.time('medindo a performance');
Promise.all([
    sum(3, 3),
    sum(4, 4)
]).then(function (values) {
    let [a, b] = values;
    console.log(a, b);
    return sum(a, b).then(function (result) {
        console.log(result);
        console.timeEnd('medindo a performance');
    });
}).catch(function (e) {
    console.log(e);
});