function sum(a, b) {
    return new Promise(function (resolve) {

        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

(async function () {

    const a = await sum(2, 3);
    const b = await sum(3, 4);
    const result = await sum(a, b)
    console.log(result);
})();
