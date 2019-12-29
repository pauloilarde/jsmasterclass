function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 00
            target.length++;
            Reflect.set(target, key, value); // usando reflect API
        },
        get(target, key) {
            if (typeof key === "string" && key.match(/\d+/)) {
                if (!(key in target)) {
                    throw `Property ${key} not found.`;
                }
            }
            return target[key];
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
console.log(languages[0]);

