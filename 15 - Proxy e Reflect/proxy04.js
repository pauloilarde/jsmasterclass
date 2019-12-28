function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 00
            target.length++;
            target[key] = value;
        },
        deleteProperty(target, key) {
            if (key in target) {
                target.length--;
                delete target[key];
            }
        }
    });
}

let languages = createArray();
languages[0] = 'PHP';
languages[1] = 'Ruby';
languages[2] = 'Go';

console.log(languages);
console.log(languages.length);

delete languages[1];
delete languages[2];
delete languages[3]; // não existe elemento na posição 3, isso foi proposital
console.log(languages);
console.log(languages.length);