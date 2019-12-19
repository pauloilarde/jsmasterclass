const wm1 = new WeakMap();

const obj1 = {};
const obj2 = {};

wm1.set(obj1, 'obj1');
wm1.set(obj2, 'obj2');

console.log(wm1.get(obj1)); // obj1
console.log(wm1.get(obj2)); // obj2

console.log(wm1.delete(obj1)); // true, pois a exclusão deu certo
console.log(wm1.delete(obj2)); // true, pois a exclusão deu certo

console.log(wm1.get(obj1)); // undefined, pois não encontra essa chave
console.log(wm1.get(obj2)); // undefined, pois não encontra essa chave

console.log(wm1.has(obj1)); // false
console.log(wm1.has(obj2)); // false
