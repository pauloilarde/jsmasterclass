function* forever() {
    let value = 1;
    while (true) {
        let reset = yield value++;
        if (reset) value = 1;
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
foreverGenerator.return(); // aqui encerra o generator
console.log(foreverGenerator.next(true)); // a partir daqui vem undefined no value
console.log(foreverGenerator.next());
