const fn1 = function () {
    const v1 = 67;
    return function () {
        console.log(v1);
    };
}

const fn2 = fn1();
const v1 = 100;
fn2();