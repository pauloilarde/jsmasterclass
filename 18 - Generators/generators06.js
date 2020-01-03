function* forever() {
    let value = 1;
    while (true) {
        // o console log saiu daqui 
        // e o value++ está no yield
        yield value++;
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