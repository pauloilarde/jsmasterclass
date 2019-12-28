function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 00
            target.length++;
            target[key] = value;
        }
    });
}

let languages = createArray();
languages[0] = 'PHP';
languages[1] = 'Ruby';
languages[2] = 'Go';

console.log(languages);
console.log(languages.length);