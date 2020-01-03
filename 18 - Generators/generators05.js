function* forever() {
    let value = 1;
    while (true) {
        console.log(value++);
        yield;
    }
}

function today() {
    let date = new Date();
    console.log(date);
}

let foreverGenerator = forever();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
today();