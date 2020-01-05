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
        const functions = [
            sum(2, 3),
            sum(3, 4)
        ];
        const results = [];
        functions.forEach(async function (fn) { // essa função precisa ser async para funcionar
            const result = await fn;
            console.log(result); // as funções são executadas, mas o forEach não deve ser usado com funções assíncronas
            results.push(result);
        });

        const [a, b] = results;

        const result = await sum(a, b);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
