function createIterable(...array) {
    return {
        [Symbol.iterator]() {

            let i = 0;
            return {
                next() {
                    if (i < array.length) {
                        return {
                            value: array[i++],
                            done: false
                        }
                    } else {
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                }
            };
        }
    };
}

const iterator = createIterable('Go', 'PHP', 'Python');
// for (const language of iterator) {
//     console.log(language);
// }

console.log([...iterator]);