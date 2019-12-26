let languages = new Map([['Go', 2009], ['Java', 1995], ['Ruby', 1992]]);
let iterator = languages[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());