function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject('Invalid input');
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

(async function () {
    try {
        const a = await sum(2);
        const b = await sum(3, 4);
        const result = await sum(a, b)
        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
