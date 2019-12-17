const timeUnits = new Map();
timeUnits.set('second', 1);
timeUnits.set('minute', 60);
timeUnits.set('hour', 3600);

timeUnits.forEach(function (key, value) {
    console.log(key, value);
})