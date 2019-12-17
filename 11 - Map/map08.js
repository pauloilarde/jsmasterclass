const timeUnits = new Map();
timeUnits.set('second', 1);
timeUnits.set('minute', 60);
timeUnits.set('hour', 3600);

console.log(timeUnits.get('hour')); // retorna o valor da chave hour
console.log(timeUnits.get('day')); // retorna undefined
console.log(timeUnits.get('week')); // retorna undefined