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
console.log(foreverGenerator.return()); // visualizando o que o método return devolve, undefined no value
console.log(foreverGenerator.return('end')); // passando parâmetro para o return
console.log(foreverGenerator.next(true)); // a partir daqui vem undefined no value
console.log(foreverGenerator.next());
