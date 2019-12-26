let languages = ['Go', 'Java', 'Ruby'];
let iterator = languages[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());