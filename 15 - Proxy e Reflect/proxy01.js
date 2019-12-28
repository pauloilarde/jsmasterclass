function createArray() {
    return new Proxy({}, {}); // objeto adicionado nessa linha
}

let languages = createArray();
languages[0] = 'PHP';
languages[1] = 'Ruby';
languages[2] = 'Go';

console.log(languages);
console.log(languages.length);