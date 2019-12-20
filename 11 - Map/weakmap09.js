let areas = new WeakMap();

let rectangle1 = {
    x: 10,
    y: 3
};
let rectangle2 = {
    x: 8,
    y: 4
};

function calculateArea(rectangle) {
    if (areas.has(rectangle)) {
        console.log('');
        console.log('Using cache..');
        return areas.get(rectangle);
    }
    let area = rectangle.x * rectangle.y;
    areas.set(rectangle, area);
    return area;
}

console.log('Calculando sem cache..');
console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));
console.log('Calculando usando o cache.');
console.log(calculateArea(rectangle2));
console.log(calculateArea(rectangle1));