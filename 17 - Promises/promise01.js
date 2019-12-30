function sum(a, b) {
    setTimeout(() => {
        return a + b;
    }, 1000);
}

let result = sum(3, 3);
console.log(result);