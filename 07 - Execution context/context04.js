const v1 = 50;
const fn1 = function () {
    const v1 = 100;
    const fn2 = function () {
        const v1 = 500;
        console.log(v1);
        const v2 = 2000;
        console.log(v2);
    }
    fn2();
};

fn1();
fn2();