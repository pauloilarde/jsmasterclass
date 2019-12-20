let ws1 = new WeakSet();
let obj1 = {};
let obj2 = {};
let obj3 = {};
ws1.add(obj1);
ws1.add(obj2);
console.log(ws1);
console.log(ws1.has(obj1)); // true
console.log(ws1.has(obj2)); // true
console.log(ws1.has(obj3)); // false
console.log(ws1.delete(obj1)); // true
console.log(ws1.delete(obj2)); // true
console.log(ws1.delete(obj3)); // false
