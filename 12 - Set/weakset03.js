let ws1 = new WeakSet();
let obj1 = "obj1";
let obj2 = {};
let obj3 = {};
ws1.add(obj1);
ws1.add(obj2);
console.log(ws1);
console.log(ws1.has(obj1));
console.log(ws1.has(obj2));
console.log(ws1.has(obj3));

