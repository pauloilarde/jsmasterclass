let languages = new Set(['Go', 'Java', 'Ruby']);
let iterator = languages[Symbol.iterator](); // linha diferente do código anterior
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); 