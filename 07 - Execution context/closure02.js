const fn1 = function () {
    return function () {
        const v1 = 67;
        console.log(v1);
    };
}

const fn2 = fn1();

fn2();