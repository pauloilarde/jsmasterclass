let mapExample = new Map();

mapExample.set(10, 'Number');
mapExample.set('10', 'String');
mapExample.set(true, 'Boolean');
mapExample.set('true', 'String');

console.log(mapExample);
console.log(mapExample.get(10));
console.log(mapExample.get('10'));
console.log(mapExample.get(true));
console.log(mapExample.get('true'));