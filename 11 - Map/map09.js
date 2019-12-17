const timeUnits = new Map();
timeUnits.set('second', 1);
timeUnits.set('minute', 60);
timeUnits.set('hour', 3600);
console.log(timeUnits.size); // 3
console.log(timeUnits.delete('hour')); // true, pois apagou uma prop
console.log(timeUnits.delete('day')); // false, tentei apagar algo q ñ existe
console.log(timeUnits.size); // 2