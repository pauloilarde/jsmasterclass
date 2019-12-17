let obj = {};

console.log('toString' in obj); // true
console.log('valueOf' in obj); // true

let mapExample = new Map();
console.log(mapExample.get('toString')); // undefined
console.log(mapExample.get('valueOf')); // undefined