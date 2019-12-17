const timeUnits = new Map();
timeUnits.set('second', 1);
timeUnits.set('minute', 60);
timeUnits.set('hour', 3600);

console.log(timeUnits.has('hour')); // true
console.log(timeUnits.has('week')); // false