function sum(a, b) {
    return new Promise(function (resolve) {

        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

function async(fn) {
    const gen = fn();
    asyncR(gen);
}

function asyncR(gen, result) {
    const obj = gen.next(result);
    if (obj.done) return;

    obj.value.then(function (result) {
        asyncR(gen, result);
    })
}

async(function* () {
    const a = yield sum(3, 4);
    const b = yield sum(4, 2);
    const result = yield sum(a, b);
    console.log(result);
});