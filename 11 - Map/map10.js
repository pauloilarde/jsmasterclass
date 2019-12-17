const timeUnits = new Map();
timeUnits.set('second', 1);
timeUnits.set('minute', 60);
timeUnits.set('hour', 3600);
console.log(timeUnits.size); // 3
console.log(timeUnits); // {infos do map}
timeUnits.clear();
console.log(timeUnits.size); // 0
console.log(timeUnits); // {}